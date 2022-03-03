import { makeStyles } from '@mui/styles'
import Heropic1 from '../pics/HeroSection1.jpg'
import Heropic2 from '../pics/HeroSection2.jpg'
import Heropic3 from '../pics/HeroSection3.jpg'
import Heropic4 from '../pics/HeroSection4.jpg'



const useStyles = makeStyles(() =>
({
    root: {
        // minHeight: '100vh',
        border: 'none'
    },
    itemparagaphs: {
        borderRadius: '15px', transition: 'all 2s ease-in-out', transitionDelay: '2s'
    },

    itemparagaphs1: {
        borderRadius: '15px', transition: 'all 2s ease-in-out', transitionDelay: '2s'
        , textAlign: 'center', backgroundColor: 'red'
    },
    p1: {

        color: 'black',
        paddingTop: "50px",
        fontFamily: 'fantasy',


    },
    p2: {
        color: 'black',
        // width: '50%',
        paddingBottom: "10px",
        textAlign: 'center',
        fontFamily: 'fantasy',
    },
    Heropic1: {

        backgroundImage: `url(${Heropic1})`, height: '500px', backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: '15px'
    },
    Heropic2: {
        backgroundImage: `url(${Heropic2})`, height: '250px', backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: '15px'
    },
    Heropic3: {
        backgroundImage: `url(${Heropic3})`, height: '210px', backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: '15px'
    },
    Heropic4: {

        backgroundImage: `url(${Heropic4})`, height: '210px', backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: '15px'
    }

}))

export default useStyles;