import React from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import CreateDialog from "../Exercises/Dialogs/Create";

export default props => {
  return (
    <AppBar color="primary">
      <Toolbar>
        <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
          Exercise database
        </Typography>
        <Button color="inherit" style={{ marginRight: 9 }}>Login</Button>
        <CreateDialog />
      </Toolbar>
    </AppBar>
  );
};
