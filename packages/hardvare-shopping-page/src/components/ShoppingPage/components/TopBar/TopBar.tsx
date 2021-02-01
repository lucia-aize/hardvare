import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import styled from "styled-components";

const StyledAppBar = styled(AppBar)`
  position: sticky;
  align-items: center;
`;

const TopBar = () => (
  <StyledAppBar>
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap>
        Smart Hardware Shop
      </Typography>
    </Toolbar>
  </StyledAppBar>
);

export default TopBar;
