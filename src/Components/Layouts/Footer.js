import React from "react";
import { Paper, Tabs } from "material-ui";
import { Tab } from "material-ui/Tabs";

const Footer = props => {
  const index = props.category
    ? props.muscles.findIndex(group => group === props.category) + 1
    : 0;
  const onIndexSelect = (e, index) =>
    props.onSelect(index === 0 ? "" : props.muscles[index - 1]);

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={onIndexSelect}
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
