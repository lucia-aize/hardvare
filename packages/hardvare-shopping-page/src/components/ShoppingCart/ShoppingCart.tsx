import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import { AddedProduct } from "../../types/index";
import ShoppingSections from "./components/ShoppingSections";

const useStyles = makeStyles({
  root: {
    position: "sticky",
    top: "9rem",
  },

  title: {
    textAlign: "center",
  },
  pos: {
    marginBottom: 12,
  },
  buttons: {
    justifyContent: "flex-end",
  },
});

type ShoppingCartProps = {
  addedProducts: AddedProduct[];
  onEmptyCart?: () => void;
};

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  addedProducts,
  onEmptyCart,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={15}>
      <CardContent>
        <ShoppingSections addedProducts={addedProducts} />
      </CardContent>

      <CardActions className={classes.buttons}>
        <Button
          size="large"
          color="secondary"
          onClick={() => (onEmptyCart ? onEmptyCart() : "")}
          disabled={addedProducts.length === 0}
        >
          Checkout
        </Button>
      </CardActions>
    </Card>
  );
};

export default ShoppingCart;
