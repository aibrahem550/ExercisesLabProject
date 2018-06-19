import React, { Fragment, Component } from "react";
import { Dialog, Button, TextField ,Select} from "material-ui";
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";
import AddIcon from "material-ui-icons/Add";
import {FormControl} from 'material-ui/Form';
import {InputLabel} from 'material-ui/Input';
import {MenuItem} from 'material-ui/Menu';


export default class extends Component {
  state = {
    open: false,
    exercises: {
      title: "",
      description: "",
      muscles: ""
    }
  };
  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };
  handleChange = name => event => {
    this.setState({
      exercises:{
        ...this.state.exercises,
        [name]:event.target.value
      }
 

    });
  };

  render() {
    const { open, exercises: { title, description, muscles } } = this.state;

    return (
      <Fragment>
        <Button variant="fab" mini onClick={this.handleToggle}>
          <AddIcon />
        </Button>
        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create New Task</DialogTitle>
          <DialogContent>
            <DialogContentText>Please fill out the below</DialogContentText>
            <form>
              <TextField
                id="name"
                label="title"
                value={title}
                onChange={this.handleChange("title")}
                margin="normal"
              />
              <br/>
              <FormControl>
                <InputLabel htmlFor="age-simple">Age</InputLabel>
                <Select
                  value={this.state.age}
                  onChange={this.handleChange}
                  inputProps={{
                    name: 'age',
                    id: 'age-simple',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <br/>

              <TextField
                id="Description"
                label="Description"
                value={description}
                multiline
                rows='3'
                onChange={this.handleChange("description")}
                margin="normal"
              />         
            </form>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleToggle}>
              Cancel
            </Button>
            <Button color="primary" variant="raised">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
