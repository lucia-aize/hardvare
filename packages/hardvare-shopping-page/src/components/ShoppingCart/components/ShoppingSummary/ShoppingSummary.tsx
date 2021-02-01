import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { FC, useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  summary: {
    padding: 10,
  },
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

type ShoppingSummaryProps = {
  children?: React.ReactNode;
  className?: string;
  shipping?: number;
  total?: number;
};

const ShoppingSummary: FC<ShoppingSummaryProps> = ({ total = 0 }) => {
  const classes = useStyles();
  const [shipping, setShipping] = useState(0);

  useEffect(() => {
    setShipping(total < 500 && total > 0 ? 100 : 0);
  }, [total]);

  return (
    <Paper className={classes.summary}>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>
      <Divider />
      <List disablePadding>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Shipping" />
          <Typography variant="subtitle1" className={classes.total}>
            {shipping},- NOK
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {total + shipping} NOK
          </Typography>
        </ListItem>
      </List>
    </Paper>
  );
};

export default ShoppingSummary;
