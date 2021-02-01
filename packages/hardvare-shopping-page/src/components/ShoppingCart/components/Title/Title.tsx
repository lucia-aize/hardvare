import Typography from "@material-ui/core/Typography";
import React from "react";

const Title: React.FC = (props) => (
  <Typography
    component="h2"
    variant="h6"
    color="primary"
    gutterBottom
    {...props}
  >
    {props.children}
  </Typography>
);

export default Title;
