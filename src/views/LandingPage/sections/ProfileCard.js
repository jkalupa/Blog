import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import {CardActionArea,  CardContent, Card, CardMedia, Typography} from "@material-ui/core/";

const styles = {
  card: {
    MaxWidth: 400,
    minHeight: 375
  },
  media: {
    MaxWidth: 350,
    height: 250
  }
};

function MediaCard(props) {
  const {classes} = props;
  return (
    <Card >
      <CardActionArea className={classes.card}>
         <CardMedia
          className={classes.media}
          image="/img/profile.jpg"
          title="Profile Picture"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            John Kalupa
          </Typography>
          <Typography component="p" align="center">
            Software Engineer, USA
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
