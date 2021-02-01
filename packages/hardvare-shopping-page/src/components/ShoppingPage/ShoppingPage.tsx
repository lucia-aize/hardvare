import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import produce, { Draft } from "immer";
import React, { useState } from "react";

import useDataApi from "../../hooks";
import { AddedProduct, Product } from "../../types";
import NewsBanner from "../NewsBanner";
import ProductList from "../ProductList";
import ShoppingCart from "../ShoppingCart";
import Copyright from "./components/Copyright";
import TopBar from "./components/TopBar";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const mainFeaturedPost = {
  title: "New and fresh",
  description: "This is something you cannot miss, come and check.",
  image: "https://images.unsplash.com/photo-1611801444214-c364624ca6ed",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const addProduct = produce((draft: Draft<AddedProduct[]>, product: Product) => {
  for (let index = 0; index < draft.length; index += 1) {
    if (draft[index].product.id === product.id) {
      // eslint-disable-next-line no-param-reassign
      draft[index].quantity += 1;

      return;
    }
  }

  draft.push({
    quantity: 1,
    product,
  });
});

const ShoppingPage = () => {
  const classes = useStyles();
  const [addedProducts, setAddedProducts] = useState<AddedProduct[]>([]);

  const [{ data, isLoading }] = useDataApi(
    "http://localhost:3004/products",
    []
  );

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <TopBar />
      <main className={classes.layout}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={classes.paper}>
                <NewsBanner post={mainFeaturedPost} />
                <ProductList
                  products={data}
                  onAddProduct={(product) => {
                    setAddedProducts(addProduct(addedProducts, product));
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <ShoppingCart
                addedProducts={addedProducts}
                onEmptyCart={() => setAddedProducts([])}
              />
            </Grid>
          </Grid>
        </Container>
        <Copyright />
      </main>
    </React.Fragment>
  );
};

export default ShoppingPage;
