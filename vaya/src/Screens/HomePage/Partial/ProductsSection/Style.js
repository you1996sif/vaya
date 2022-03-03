import { makeStyles } from '@mui/styles'
const useStyles = makeStyles(() =>
({
    root: {
        
    },
    shownew:{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        // gap:'1150px', 
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
        borderRadius: '15px', transition: 'all 2s ease-in-out', transitionDelay: '2s',
        height:'600px'
    },

}))

export default useStyles;