import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Item from '../../../../Components/Item';

import useStyles from './Style'
import { Button } from '@mui/material';
import ProductCard from './Partial/ProductCard';


const ProductsSection = () => {
  const classes = useStyles()

  return <div>
    <Box sx={{ flexGrow: 1, paddingLeft:"30px"}} >
      <Grid container spacing={3} paddingLeft={4}>
        <Grid className={classes.shownew} item xs={11.5} >
          <div>
            <Button variant="outlined"> مشاهدة المزيد </Button>
          </div>
          <div >
            <p className={classes.p}> أحدث المنتجات </p>
            <hr className={classes.hr} />
          </div>
        </Grid>
        <Grid className={classes.carts} item xs={11.5} >
          {/* <Item> */}
            <ProductCard />
          {/* </Item> */}
        </Grid>
      </Grid>

    </Box>


  </div >;
};

export default ProductsSection;
