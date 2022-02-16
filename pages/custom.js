(function () {
  // strict mode
  'use strict';
  // top level scope variables
  var canvas = document.querySelector('canvas'),
    context = canvas.getContext('2d'),
    pixelRatio = window.devicePixelRatio || 1,
    buttons = document.querySelectorAll('button'),
    stage = new Stage(canvas),
    recorder = new InputRecorder(canvas),
    tracker = new CoordinateTracker(canvas),
    interrupt = false,
    sphere = new Sprite();

  // IIFE which binds handlers to node events
  (function bindListeners() {
    // add event listener on window resize to scale the canvas dimensions accordingly
    window.addEventListener('resize', stage.responsiveResize);
    // bind listeners to buttons conditional to their action
    Array.prototype.forEach.call(buttons, function (button) {
      switch (button.getAttribute('action')) {
        // bind animate through points behavior
        case 'animate':
          button.addEventListener('click', animateSpherePaths);
          break;
        // bind reset recorder behavior
        case 'clear':
          button.addEventListener('click', resetDemo);
      }
    });
  })();

  // IIFE - draws a sphere onto a temporary canvas to set as an image reference to a sprite object
  (function defineSphere() {
    sphere.image = (function () {
      var context = document.createElement('canvas').getContext('2d'),
        fillColor = 'honeydew',
        strokeColor = 'honeydew',
        strokeWidth = 1 * pixelRatio,
        width = 100 * pixelRatio,
        height = 100 * pixelRatio,
        diameter = width - strokeWidth;
      context.canvas.width = width;
      context.canvas.height = height;
      context.fillStyle = fillColor;
      context.strokeStyle = strokeColor;
      context.lineWidth = strokeWidth;
      context.beginPath();
      context.arc(
        diameter / 2 + strokeWidth / 2,
        diameter / 2 + strokeWidth / 2,
        diameter / 2,
        0,
        2 * Math.PI
      );
      context.fill();
      context.stroke();
      return context.canvas;
    })();
  })();

  // initial setup of stage layers and sizing
  (function stageInit() {
    // add stage layers
    stage.addLayer('sprite');
    stage.addLayer('indicator');
    stage.addLayer('debug');
    // initial scaling of responsive canvas to parent dimensions
    stage.responsiveResize();
  })();

  // render sphere onto layer
  positionSphere(canvas.width / 2, canvas.height / 2);

  // first render of sphere onto stage
  stage.render();

  // when invoked, will animate sphere through recorded points sequentially until all paths have traversed
  function animateSpherePaths() {
    // local animation calculations, constants and references
    var duration = 1000,
      pathIndex = 0,
      paths = recorder.coordinates.length,
      context = stage.layers.sprite.getContext('2d'),
      anchorPos = copyPosition();
    // triggers path animation cycle if path points have been recorded
    if (paths) {
      recorder.pause = true;
      animCycle();
    }
    // triggers a single animation loop cycle
    function animCycle() {
      animate(duration, drawAtTime, drawAtTime);
    }
    // copies the current spheres position object values to a new object and returns it
    function copyPosition() {
      return {
        x: sphere.position.x,
        y: sphere.position.y,
      };
    }
    // draws the sphere sprite somewhere along the path at time coefficient t
    function drawAtTime(t) {
      t = easeOutQuad(t);
      if (recorder.coordinates[pathIndex]) {
        positionSphere(
          anchorPos.x + (recorder.coordinates[pathIndex][0] - anchorPos.x) * t,
          anchorPos.y + (recorder.coordinates[pathIndex][1] - anchorPos.y) * t
        );
        stage.render();
      }
      if (t === 1) {
        if (++pathIndex < paths) {
          anchorPos = copyPosition();
          animCycle();
        } else {
          recorder.clear();
          recorder.pause = false;
        }
      }
    }
    // minified easing coefficient equation
    function easeOutQuad(t) {
      return t * (2 - t);
    }
  }

  // animation function which lasts for a given duration.
  // triggers loopCallback during each requestAnimationFrame loop
  // ultimately fires endCallback() when duration has expired
  function animate(duration, loopCallback, endCallback) {
    var start = Date.now(),
      last;
    (function loop() {
      var now = Date.now(),
        t = (now - start) / duration;
      last = now;
      if (!interrupt) {
        if (now - start >= duration) {
          (endCallback || function () {})(1);
        } else {
          (loopCallback || function () {})(t);
          requestAnimationFrame(loop);
        }
      }
    })();
  }

  // Constructor object to track coordinates from input on a given target element (canvas)
  function CoordinateTracker(target) {
    // defines handlers/behavior for interaction listeners
    var handlers = {
        hover: function (e) {
          _public.flags.touched = true;
          _public.coordinates.x = e.clientX - targetBounds.left;
          _public.coordinates.y = e.clientY - targetBounds.top;
          _public.renderData();
        },
        end: function () {
          _public.flags = {};
          _public.coordinates = {};
        },
      },
      // will return this as our access object
      _public = {
        coordinates: {},
        flags: {},
        renderData: function () {
          var renderString =
              '{x: ' +
              tracker.coordinates.x +
              ', y: ' +
              tracker.coordinates.y +
              '}',
            context = stage.layers.debug.getContext('2d');
          context.clearRect(0, 0, 200 * pixelRatio, 50 * pixelRatio);
          context.save();
          context.font = '100 ' + 12 * pixelRatio + 'pt sans-serif';
          context.textBaseline = 'top';
          context.textAlign = 'left';
          context.fillStyle = 'honeydew';
          context.fillText(renderString, 10 * pixelRatio, 10 * pixelRatio);
          context.restore();
          if (!recorder.pause) {
            stage.render();
          }
        },
      },
      // store target bounding rect on each event capture
      targetBounds;
    // assign listeners to base level of input events
    target.addEventListener('mousemove', capture);
    target.addEventListener('mouseup', capture);
    target.addEventListener('touchstart', capture);
    target.addEventListener('touchend', capture);
    // return our accessor to be referenced by the invoking instance
    return _public;
    // handles capturing each event and determining behavior conditional to the event's type
    function capture(e) {
      getTargetBounds();
      switch (e.type) {
        case 'mousemove':
        case 'touchstart':
          handlers.hover(e);
          break;
        default:
          handlers.end();
      }
    }
    // updates the bounding rect calculations for the target in case they have changed (responsive)
    function getTargetBounds() {
      targetBounds = target.getBoundingClientRect();
    }
  }

  // Constructor for object to record coordinates when clicking on locations on the canvas
  function InputRecorder(target) {
    // public accessor object
    var _public = {
      clear: function () {
        _public.coordinates = [];
        stage.layers.indicator = stage.addLayer();
        stage.render();
      },
      coordinates: [],
      pause: false,
    };
    // add behavior listeners to capture input locations
    target.addEventListener('mousedown', record);
    target.addEventListener('touchstart', record);
    //return this as a reference for the instance
    return _public;
    // records the current location of the tracker within the public coordinates array
    function record() {
      if (!_public.pause) {
        setMarker(
          _public.coordinates[
            _public.coordinates.push([
              tracker.coordinates.x * pixelRatio,
              tracker.coordinates.y * pixelRatio,
            ]) - 1
          ]
        );
      }
    }
    // sets a marker at a recorded coordinate
    function setMarker(coordinate) {
      var context = stage.layers.indicator.getContext('2d'),
        markerSize = 20 * pixelRatio,
        fontSize = 8;
      context.save();
      context.fillStyle = 'honeydew';
      context.strokeStyle = 'honeydew';
      context.strokeRect(
        coordinate[0] - markerSize / 2,
        coordinate[1] - markerSize / 2,
        markerSize,
        markerSize
      );
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.font = '100 ' + fontSize * pixelRatio + 'pt sans-serif';
      context.fillText(
        _public.coordinates.length,
        coordinate[0],
        coordinate[1]
      );
      context.restore();
      stage.render();
    }
  }

  // helper function which clears the sprite layer, sets sphere sprite position and renders the sprite to the given layer
  function positionSphere(oX, oY) {
    var context = stage.layers.sprite.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    sphere.position = [oX, oY];
    sphere.drawTo(context);
  }

  function resetDemo() {
    interrupt = true;
    requestAnimationFrame(function () {
      interrupt = false;
      recorder.clear();
      recorder.coordinates = [[canvas.width / 2, canvas.height / 2]];
      animateSpherePaths();
    });
  }

  // Constructor for a sprite-based object
  function Sprite() {
    var _public = {
        // renders the sprite onto a given context at its position or a given coordinate
        drawTo: function (context, coordinate) {
          var oX = coordinate ? coordinate[0] : position.x || 0,
            oY = coordinate ? coordinate[1] : position.y || 0;
          context.save();
          context.drawImage(image, oX - image.width / 2, oY - image.height / 2);
          context.restore();
        },
        set image(img) {
          image = img;
        },
        set position(coordinate) {
          position.x = coordinate[0];
          position.y = coordinate[1];
        },
        get position() {
          return position;
        },
      },
      image,
      position = {};
    return _public;
  }

  // Constructor for stage object - governs base canvas, additional layer management, and rendering methods
  function Stage(canvas) {
    var context = canvas.getContext('2d'),
      dimensions = {},
      layers = {},
      _public = {
        // add a new canvas layer to the array, size it, return it
        addLayer: function (name) {
          var newlayer = (layers[name || layers.length] =
            document.createElement('canvas'));
          resizeCanvas(newlayer, dimensions.width, dimensions.height);
          return newlayer;
        },
        // wipe the canvas contents completely
        clear: function () {
          context.clearRect(0, 0, canvas.width, canvas.height);
        },
        get layers() {
          return layers;
        },
        render: function () {
          _public.clear();
          iterateLayers(function drawLayerToStage(layer) {
            context.drawImage(layer, 0, 0);
          });
        },
        resize: function (width, height) {
          dimensions = {
            width: width,
            height: height,
          };
          resizeCanvas(canvas, width, height);
          updateAllLayerSize();
        },
        responsiveResize: function () {
          var parentBounds = canvas.parentNode.getBoundingClientRect();
          _public.resize(parentBounds.width, parentBounds.height);
        },
        stage: canvas,
      };
    return _public;
    // iterates through layers and triggers callback for each layer
    function iterateLayers(callback) {
      Object.keys(layers).some(function (key) {
        return callback(layers[key]);
      });
    }
    // takes a canvas element and sizes it, adjusted for devicePixelRatio, to provided dimensions
    function resizeCanvas(el, width, height) {
      el.width = width * pixelRatio;
      el.height = height * pixelRatio;
      el.style.width = width + 'px';
      el.style.height = height + 'px';
    }
    // iterates through layers and updates their size based on stage dimensions
    function updateAllLayerSize() {
      iterateLayers(function (layer) {
        resizeCanvas(layer, dimensions.width, dimensions.height);
      });
    }
  }
})();
