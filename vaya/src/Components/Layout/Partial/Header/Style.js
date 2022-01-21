import { makeStyles } from '@mui/styles'
import { textAlign } from '@mui/system';
const useStyles = makeStyles(() =>
({
    root: {
        paddingLeft:'10px',
        paddingRight: '40px',

        width: '100%',
        height: "100px",
        backgroundColor: '#ededed',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
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
        width:'20%',
        marginRight:'200PX',
        paddingLeft:'25px',
// paddingRight:'10px',
        paddingTop: '2rem',

    },
    container: {

        // backgroundColor: '#ededed',
        // backgroundColor:'red',
        display: 'flex',
        alignItems:'stretch',
        justifyContent: 'center',
        width: '50%',
        paddingTop: '1rem',
        paddingLeft:'100px',
        marginLeft:'-250px',
        gap:'50px',
        // alignItems:'baseline'
    },
    logo: {
        // backgroundColor:'green',
        width: '8%',
        paddingTop: '2rem',
        textAlign: 'right',
        paddingRight:'60px',
        paddingLeft:'100px'

    },
    products: {
        

    },
    About: {
        paddingTop: '1rem',

    },
    footer: {
        paddingTop: '1rem',

    }

    
    

}))

export default useStyles;