import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import {CardActionArea,  CardContent, Card, CardMedia, Typography} from "@material-ui/core/";

const styles = {
  
  card: {
    height: "100%"
  },
  actionArea:{
    height: "100%"
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  }
};

function ProfileCard(props) {
  const {classes} = props;
  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.actionArea}>
         <CardMedia className={classes.media}
          image="assets/img/profile.jpg"
          title="Profile Picture"
        />

          <CardContent>
          <Typography variant="h5" component="h2" align="center">
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

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileCard);
