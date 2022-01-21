import { makeStyles } from '@mui/styles'
const useStyles = makeStyles(() =>
({
    root: {
        width: '100%',
        backgroundColor: '#1E2833',
        textAlign: 'center',
        color: 'gray'
    },

    logo2: {
        width: '100px',

    },
    paragraph: {
        // lineHeight:'10px',
        marginTop:'-20px'
    },
    icons:{
        display:'flex',
        justifyContent:"center",
        gap:"30px",
        paddingBottom: '2rem',
        paddingTop: '2rem'

    }

}))

export default useStyles;