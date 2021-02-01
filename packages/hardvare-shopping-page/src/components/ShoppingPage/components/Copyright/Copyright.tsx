import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import React from "react";

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © "}
    <Link
      color="inherit"
      href="https://github.com/pioszala/hardvare/tree/master"
    >
      szalap
    </Link>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
);

export default Copyright;
