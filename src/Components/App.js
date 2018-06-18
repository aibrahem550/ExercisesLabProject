import React, { Component, Fragment } from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Excerises from "../Components/Exercises/Index";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { muscles, exercises } from "../store.js";

export default class App extends Component {
  state = {
    exercises,
    category: "arms"
  };
  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  }

  handleCategorySelected = category => {
    this.setState({});
  };
  render() {
    const exercises = this.getExercisesByMuscles(),
      { category } = this.state;
    return (
      <Fragment>
        <MuiThemeProvider>
          <Header />
          <br />
          <br />
          <br />
          <Excerises exercises={exercises} />
          <Footer
            muscles={muscles}
            category={category}
            onSelect={this.handleCategorySelected}
          />
        </MuiThemeProvider>
      </Fragment>
    );
  }
}
