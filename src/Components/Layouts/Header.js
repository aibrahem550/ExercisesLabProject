import React from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

export default props => {
  return (
    <AppBar color="primary">
      <Toolbar>
        <Typography variant="headline" color="inherit">
          Exercise database
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
