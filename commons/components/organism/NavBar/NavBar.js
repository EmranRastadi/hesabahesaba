import {useState} from "react";
import {Container, List, ListItem} from "./style";
import {Logo, NavbarList} from "../../molecules";
import {Tab, Tabs} from "@mui/material";
import {makeStyles, withStyles} from "@mui/styles";

// function a11yProps(index) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// }
//
//
// const AntTabs = withStyles({
//     root: {
//         height : '50px',
//         marginTop : '10px',
//         float : 'right',
//         // borderBottom: '1px solid #e8e8e8',
//
//     },
//     indicator: {
//         backgroundColor: '#f25461',
//     },
// })(Tabs);
//
//
// const AntTab = withStyles((theme) => ({
//     root: {
//         textTransform: 'none',
//         minWidth: 72,
//         color : '#fff',
//         fontWeight: theme.typography.fontWeightRegular,
//         marginRight: theme.spacing(4),
//         fontFamily: [
//             '-apple-system',
//             'BlinkMacSystemFont',
//             '"Segoe UI"',
//             'Roboto',
//             '"Helvetica Neue"',
//             'Arial',
//             'sans-serif',
//             '"Apple Color Emoji"',
//             '"Segoe UI Emoji"',
//             '"Segoe UI Symbol"',
//         ].join(','),
//         '&:hover': {
//             color: '#f25461',
//             opacity: 1,
//         },
//         '&$selected': {
//             color: '#f25461',
//             fontWeight: theme.typography.fontWeightMedium,
//         },
//         '&:focus': {
//             color: '#f25461',
//         },
//     },
//     selected: {},
// }))((props) => <Tab disableRipple {...props} />);
//
// const StyledTabs = withStyles({
//     indicator: {
//         display: 'flex',
//         justifyContent: 'center',
//         backgroundColor: 'transparent',
//         '& > span': {
//             maxWidth: 40,
//             width: '100%',
//             backgroundColor: '#f25461',
//         },
//     },
// })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
//
// const StyledTab = withStyles((theme) => ({
//     root: {
//         textTransform: 'none',
//         color: '#f25461',
//         fontWeight: theme.typography.fontWeightRegular,
//         fontSize: theme.typography.pxToRem(15),
//         marginRight: theme.spacing(1),
//         '&:focus': {
//             opacity: 1,
//         },
//     },
// }))((props) => <Tab disableRipple {...props} />);
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     padding: {
//         padding: theme.spacing(3),
//     },
//     demo1: {
//         backgroundColor: theme.palette.background.paper,
//     },
//     demo2: {
//         backgroundColor: '#f25461',
//     },
// }));

export default function NavBar({
                                   listFloat
                               }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Container>
            <div className={"top-navbar"}>
                <Logo/>
                <NavbarList/>
                {/*<AntTabs*/}
                {/*    value={value} onChange={handleChange} aria-label="ant example">*/}
                {/*    <AntTab label="راهکار" />*/}
                {/*    <AntTab label="صنایع" />*/}
                {/*    <AntTab label="مشتریان" />*/}
                {/*    <AntTab label="ارتباط با ما " />*/}
                {/*</AntTabs>*/}
            </div>
        </Container>
    )
}