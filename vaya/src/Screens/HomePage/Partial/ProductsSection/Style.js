import { makeStyles } from '@mui/styles'
const useStyles = makeStyles(() =>
({
    root: {
        // minHeight: '100vh'
    },
    shownew:{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignContent: 'center', 
        alignItems: 'center'

    },
    p:{
        fontWeight: 'bold', fontSize: '1.3em'

    },
    hr:{
        marginTop: '-15px', borderTop: '3px solid #838383'
    },
    carts:{
        borderRadius: '15px', transition: 'all 2s ease-in-out', transitionDelay: '2s'
    },

}))

export default useStyles;