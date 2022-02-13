import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) =>
({
    root: {
        height: '450px',
        width: '325px',
        margin: '1rem',

        ['@media (max-width:800px)']: {
            height: '350px',
            width: '250px',
        },
        ['@media (max-width:600px)']: {
            height: '450px',
            width: '350px',
        },

        ['@media (max-width:1200px)']: {
            height: '350px',
            width: '250px',
        },
        ['@media (max-width:1000px)']: {
            height: '350px',
            width: '250px',
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        cursor:'pointer'
    },
    type: {
        textAlign: 'right',
        fontSize: '20px',
        paddingRight: '10px',
        // color: theme.palette.text.secondary
        // backgroundColor: theme.palette.text.secondary
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: '10px'

    }

})
)

export default useStyles;