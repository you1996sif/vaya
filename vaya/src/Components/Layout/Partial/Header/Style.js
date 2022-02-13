import { makeStyles } from '@mui/styles'
import { textAlign } from '@mui/system';
const useStyles = makeStyles((theme) =>
({
    root: {
        // paddingLeft:'10px',
        // paddingRight: '40px',
        position:"fixed",
        zIndex:'100',

        width: '100%',
        height: "100px",
        backgroundColor: '#ededed',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        // gap: '10px',
        // paddingLeft: '10px',
        ['@media (max-width:600px)']: {
            "& $container": {
                display: 'none'
            },
            "& $menu": {
                display: 'block'
            },
        },

    },
    menu: {
        display: 'none'
    },
    cartitem: {
        ['@media (max-width:600px)']: {
            display: 'none'


        },

    },
    cart: {
        ['@media (max-width:600px)']: {

            width: '200px'
        },
        // backgroundColor:'blue',
        display: 'flex',
        flexDirection: 'row',
        width: '13%',
        // marginRight:'200PX',
        // paddingLeft:'15px',
        // paddingRight:'10px',
        paddingTop: '2rem',
        cursor: 'pointer',
        '&:hover': {
            color: 'gray'
        }
    },
    container: {

        // backgroundColor: '#ededed',
        // backgroundColor:'red',
        display: 'flex',
        // alignItems:'stretch',
        justifyContent: 'center',
        width: '50%',
        paddingTop: '1rem',
        // paddingLeft:'100px',
        // marginLeft:'-250px',
        gap: '50px',
        // alignItems:'baseline'
    },
    logo: {
        // backgroundColor:'green',
        width: '8%',
        paddingTop: '2rem',
        textAlign: 'right',
        // paddingRight:'20px',
        // paddingLeft:'100px'

    },
    products: {
        cursor: 'pointer',
    },
    About: {
        paddingTop: '1rem',
        cursor: 'pointer'
        ,
        '&:hover': {
            color: 'gray'
        }
    },
    footer: {
        paddingTop: '1rem',
        cursor: 'pointer',
        '&:hover': {
            color: 'gray'
        }
    }




}))

export default useStyles;