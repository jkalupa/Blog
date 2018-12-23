import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import {Divider, Avatar, Grid, Card, CardMedia, Typography} from "@material-ui/core/";

const styles = {
  card: {
    MaxWidth: 400,
    height: 350
  },
  media: {
    MaxWidth: 350,
    height: 250
  }
};

function MediaCard(props) {
  const {classes} = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
      {/*<Grid container>
          <Grid item xs="5" alignItems="center">
            <Avatar
              title="Profile Picture"
              src="profile.jpg"
              className={classes.media}
            />
          </Grid>
        </Grid>
        */}
         <CardMedia
          className={classes.media}
          image="profile.jpg"
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
