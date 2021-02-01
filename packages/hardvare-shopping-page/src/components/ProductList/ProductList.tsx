import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import { Product } from "../../types";
import SearchField from "../SearchField/SearchField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    fontSize: 30,
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const ProductList = ({
  products,
  onAddProduct,
}: {
  products: Product[];
  onAddProduct?: (product: Product) => void;
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} cols={3} spacing={40}>
        <GridListTile key="Subheader" cols={3} style={{ height: "auto" }}>
          <SearchField />
        </GridListTile>
        {products.map((product) => (
          <GridListTile key={product.id}>
            <img src={product.image} alt="" />
            <GridListTileBar
              title={product.name}
              subtitle={<span>price: {product.price}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${product.name}`}
                  className={classes.icon}
                  onClick={() => (onAddProduct ? onAddProduct(product) : "")}
                >
                  +
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default ProductList;
