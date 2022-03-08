import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
    direction: 'rtl',
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: 'hsla(0,0%,100%,.7)',

    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'hsla(0,0%,100%,.7)',

    },

    '&:hover .MuiOutlinedInput-input': {
        color: 'hsla(0,0%,100%,.7)',

    },
    '& .MuiOutlinedInput-input': {
        color: 'hsla(0,0%,100%,.7)',

    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
        color: 'hsla(0,0%,100%,.7)',

    },
    '& .MuiInputLabel-outlined': {
        color: 'hsla(0,0%,100%,.7)',
    },
    '&:hover .MuiInputLabel-outlined': {
        color: 'hsla(0,0%,100%,.7)',

    },
    '& .MuiInputLabel-outlined.Mui-focused': {
        color: 'hsla(0,0%,100%,.7)',

    },
    '& label': {
        color: '#fff',
        float : 'right',
        fontFamily: 'iran-sans',
    },'& label.Mui-focused': {
        color: '#fff',
        fontFamily: 'iran-sans',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
        fontFamily: 'iran-sans',
    },
    '& .MuiOutlinedInput-root': {
        color: '#fff',
        fontFamily: 'iran-sans',
        '& fieldset': {
            borderColor: '#fff',
            color: '#fff'
        },
        '&:hover fieldset': {
            borderColor: 'green',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});

export default customTheme