import React, { Fragment } from "react";
import { Grid, Paper, Typography, List } from "material-ui";
import { ListItem, ListItemText } from "material-ui/List";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBotton: 10,
    marginLeft: 3,
    height: 500,
    overflowY: "auto"
  }
};
export default ({ exercises }) => (
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exelist]) => (
          <Fragment>
            <Typography
              variant="headline"
              style={{ textTransform: "capitalize" }}
            >
              {group}
            </Typography>
            <List component="ul">
              {exelist.map(({ title }) => (
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              ))}
            </List>
          </Fragment>
        ))}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography variant="display1">Welcome</Typography>
        <Typography style={{ marginTop: 20 }} variant="subheading">
          Please select exercise from the left menu
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
