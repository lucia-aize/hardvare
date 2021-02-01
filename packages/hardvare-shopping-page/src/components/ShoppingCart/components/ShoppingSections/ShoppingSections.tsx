import Grid from "@material-ui/core/Grid";
import React from "react";

import { AddedProduct } from "../../../../types";
import ShoppingCartList from "../ShoppingCartList";
import ShoppingSummary from "../ShoppingSummary";
import Title from "../Title";

const shoppingCart = (TitleComponent: Function) => (
  <TitleComponent style={{ textAlign: "center" }}>Shopping Cart</TitleComponent>
);

type ShoppingSectionsProps = {
  addedProducts: AddedProduct[];
};

const ShoppingSections: React.FC<ShoppingSectionsProps> = ({
  addedProducts,
}) => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      {shoppingCart(Title)}
    </Grid>
    <Grid item xs={12}>
      <ShoppingCartList addedProducts={addedProducts} />
    </Grid>
    <Grid item xs={12}>
      <ShoppingSummary
        total={addedProducts.reduce(
          (previous, current) =>
            previous + current.quantity * current.product.price,
          0
        )}
      />
    </Grid>
  </Grid>
);

export default ShoppingSections;
