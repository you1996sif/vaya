import { makeStyles } from '@mui/styles'

import aboutPhoto from './about.jpg';



const useStyles = makeStyles(() =>
({
    root: {
        border: 'none',
        paddingBottom:'2rem'
    },
    itemparagaphs: {
        borderRadius: '15px', transition: 'all 2s ease-in-out', transitionDelay: '2s'
    },
   
    Heropic1: {

        backgroundImage: `url(${aboutPhoto})`, height: '500px', backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: '15px'
    },
    
    p: {
        marginTop: '0px',
        fontWeight: 'bold',
        fontSize: '2em',

        textAlign: 'right',

    },
    shownew: {
        paddingRight: '10px',
        textAlign: 'right'
    },

    hr: {
        marginTop: '-15px', borderTop: '3px solid #838383', width: '55px',
        textAlign: "right",
        marginRight: '0px'
    },
    hr1: {
        marginTop: '-15px', borderTop: '3px solid #838383', width: '250px',
        textAlign: "right",
        marginRight: '0px'
    },

    h3: {
        textAlign: 'right',
        lineHeight: '40px',
        fontFamily: 'sans-serif',
        ['@media (max-width:1300px)']: {
            lineHeight: '20px',
        },
        ['@media (max-width:925px)']: {
            lineHeight: '25px',
        },

        fontSize: '22px'
    },
    r1:{
        height: '110px'
    }

}))

export default useStyles;