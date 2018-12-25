import React from "react";
import {withStyles} from "@material-ui/core/styles";
import {Paper, Typography, ListItem, ListItemText, List, ListItemIcon} from "@material-ui/core";

const fEntries = [
  {
    name: "GitHub",
    imgLnk: "github.svg",
    RemoteLnk: "https://github.com/jkalupa"
  },
  {
    name: "Linkedin",
    imgLnk: "linkedin.png",
    RemoteLnk: "https://www.linkedin.com/in/john-kalupa-981888a6/"
  }
];

function clickHandle(lnk) {
  window.location.href = lnk;
}

function FollowTab(props) {
  var rows = [];
  for (var i = 0; i < fEntries.length; i++) {
    rows.push(
      <ListItem
        button
        alignItems="center"
        onClick={clickHandle.bind(this, fEntries[i].RemoteLnk)}
      >
      <ListItemIcon>
        <img src={fEntries[i].imgLnk} alt={fEntries[i].name} height="60" />
      </ListItemIcon>
        <ListItemText>
        <Typography variant="h6">{fEntries[i].name}</Typography>
        </ListItemText>
      </ListItem>
    );
  }

  return (
    <Paper>
      <List>{rows}</List>
    </Paper>
  );
}

export default FollowTab;
