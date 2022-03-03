
import { makeStyles } from '@mui/styles'
const useStyles = makeStyles(() =>
({
    contact: {
        textAlign: 'right',
        // backgroundColor:'red',
    },
    p: {
        fontSize: '26px',
        ['@media (max-width:800px)']: {
            fontSize: '14px',
        },
    },
    insta:{
        textDecoration: ' none', color: '#707070', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', fontSize: '20px',
        ['@media (max-width:800px)']: {
            fontSize: '10px',
        },
    }

}))

export default useStyles;
