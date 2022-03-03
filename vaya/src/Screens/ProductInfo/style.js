import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    formcontrol: {
        width: '100px',
        minWidth: '0%',
        '& .MuiFilledInput-root': {
            backgroundColor: 'transparent',
            width: '100px',
            minWidth: 0,
        }
    },
}))

export default useStyles;