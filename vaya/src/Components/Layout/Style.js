import { makeStyles } from '@mui/styles'
const useStyles = makeStyles(() =>
({
    main: {
        minHeight: '72vh',
        paddingTop: '125px',
        paddingRight: '40px'
        ,
        ['@media (max-width:600px)']: {
            // paddingRight: '45px'
        },

    }

}))

export default useStyles;