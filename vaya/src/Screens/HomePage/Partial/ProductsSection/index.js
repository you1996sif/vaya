import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Item from '../../../../Components/Item';

import useStyles from './Style'
import { Button } from '@mui/material';
import ProductCard from '../../../../Components/ProductCard';
import SliderComponent from '../SliderComponent';
import { Link } from 'react-router-dom';
;


const ProductsSection = () => {
  const classes = useStyles()
  const MyLink = props => <Link to="/productspage" {...props} />

  return <div>
    <Box sx={{ flexGrow: 1, paddingLeft: "30px" }} style={{ borderRadius: '15px',}}>
      <Grid container spacing={3} paddingLeft={4}>
        <Grid className={classes.shownew} item xs={11.7} >
          <div>
            
            <Button variant="outlined" component={MyLink}> مشاهدة المزيد </Button>
          
          </div>
          <div >
            <p className={classes.p}> أحدث المنتجات </p>
            <hr className={classes.hr} />
          </div>
        </Grid>
        <Grid className={classes.carts}  display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'} item xs={11.7} >
         
          <SliderComponent stepProps={3} />
        </Grid>
      </Grid>

    </Box >


  </div >;
};

export default ProductsSection;
