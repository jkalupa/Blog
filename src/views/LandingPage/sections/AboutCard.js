import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import {Card, CardActionArea, CardContent, Typography, Divider, CardHeader} from "@material-ui/core/";

const styles = {
  card: {
    MaxWidth: 400,
    minHeight: 375
  },
};

function MediaCard(props) {
  const {classes} = props;
  return (
    <Card >
      <CardActionArea className={classes.card}>
        <CardHeader title="About" titleTypographyProps={{align:"center"}}/>
        <Divider variant="middle"/>
        <CardContent>
          <Typography component="p" align="center">
            I've read countless homemade blogs and tutorials that have helped me
            be a better developer, so this is my way of giving back. I write
            about technologies I use accross the stack. However, I work mostly
            with backend technologies, this blog itself is my first foray into
            frontend development, and I'm very excited for the trip.
            <br />
            If you have any quesions or concerns feel free to reach out to me
            with the form below.
            <br />
            <strong>Happy Learning!</strong>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
