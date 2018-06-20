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
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  FormControl:{
    width:500
  }
})
export default withStyles(styles)(class extends Component {
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
  handleSubmit =()=>{
    const {exercise} = this.state
    this.props.onCreate(exercise);
  }
  render() {
    const { open, exercises: { title, description, muscles } } = this.state,
     {classes, muscles : categories } =this.props;

    return (
      <Fragment>
        <Button variant="fab" color="primary" mini onClick={this.handleToggle}>
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
                className={classes.FormControl}
              />
              <br/>
              <FormControl className={classes.FormControl}>
                <InputLabel htmlFor="muscles">
                Muscles
                </InputLabel>
                <Select
                  value={muscles}
                  onChange={this.handleChange('muscles')}
                >
    {categories.map(category=>
                    <MenuItem value={category}>{category}</MenuItem>
     )}
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
                className={classes.FormControl}
              />         
            </form>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleToggle}>
              Cancel
            </Button>
            <Button color="primary" variant="raised"
             onClick={this.handleSubmit}
             >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
})
