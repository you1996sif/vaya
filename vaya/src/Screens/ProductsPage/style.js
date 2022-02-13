import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() =>
({
    root: {
        // padding: '2rem',
        paddingLeft: '4rem',
        // backgroundColor:'blue'
    },
    container: {
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
    },

    products: {
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
        width: '75%', flexWrap: 'wrap',
        
    },
    rightbar: {
        width: '20%',
        // textAlign: 'right',
        height: '50vh',
        position: 'fixed',
        top: '25%',
        left: '80%',
        // paddingRight:'2rem'
        // backgroundColor:'green',
        // paddingRight:'2rem'
    },
    root2: {
        width: '250px',
        height: '375px'
    },
    formcontrol:{
        // 'MuiFilledInput-root MuiFilledInput-underline MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl'
        '& .MuiFilledInput-root':{
            backgroundColor:'transparent'
        }
    },
    top:{
        height:'50px',
        display: 'flex', flexDirection: 'row', justifyContent: 'flex-end',
fontSize:'40px',
        // backgroundColor:'red',
        paddingRight:'20px',
        fontFamily:'fantasy'
    },
    price:{
        display:'flex',
        justifyContent:'space-around',
        textAlign:'right',
        width:"310px",
        gap:'130px'
        // backgroundColor:'red'
    },
    pricespan:{
        textAlign:'left',

    },
    pricesec:{
        paddingTop:'40px'
    }
}))

export default useStyles;