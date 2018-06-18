import React from "react";
import { Paper, Tabs } from "material-ui";
import { Tab } from "material-ui/Tabs";

const Footer = props => {
  const index = props.category
    ? props.muscles.findIndex(group => group === props.category) + 1
    : 0;
  return (
    <Paper>
      <Tabs
        value={index}
        onChange={props.onSelect}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {props.muscles.map(group => <Tab label={group} />)}
      </Tabs>
    </Paper>
  );
};

export default Footer;
