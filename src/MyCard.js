import React from "react";
import './MyCard.css';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const styles = theme => ({
  media: {
    width: "auto"
  }
});
class MyCard extends React.Component {
  imageClick = () => {
    this.refs.layer.style.display = "block";
  };
  render() {
    const { classes } = this.props;
    return (
     <Card>
        <div className="cardWrapper" onClick={this.imageClick}>
         <CardMedia
            alt="My cool img"
            component="img"
            className={classes.media}
            image="https://placeimg.com/100/100/nature"
          /> 
          <div className="layer" ref="layer">
            New layer
          </div>
        </div>
      </Card>
    );
  }
}

MyCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyCard);


