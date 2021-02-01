import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import React from "react";

import { AddedProduct } from "../../../../types";
import Title from "../Title";

const ShoppingCartList: Function = ({
  addedProducts = [],
}: {
  addedProducts: AddedProduct[];
}) => (
  <React.Fragment>
    {addedProducts.length === 0 ? (
      <Typography variant="body2" color="textSecondary" align="center">
        Your cart is empty
      </Typography>
    ) : (
      <React.Fragment>
        <Title>Products</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {addedProducts.map((addedProduct) => (
              <TableRow key={addedProduct.product.id}>
                <TableCell>{addedProduct.product.name}</TableCell>
                <TableCell>{addedProduct.product.price}</TableCell>
                <TableCell align="right">{addedProduct.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    )}
  </React.Fragment>
);

export default ShoppingCartList;
