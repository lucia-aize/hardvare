import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import React from "react";

const SearchField = () => (
  <Grid container spacing={1} alignItems="flex-end">
    <Grid item>
      <Button />
    </Grid>
    <Grid item>
      <TextField id="input-with-icon-grid" label="Almost a SearchField" />
    </Grid>
  </Grid>
);

export default SearchField;
