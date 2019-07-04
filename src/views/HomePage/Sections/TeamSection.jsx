import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "assets/img/faces/tim.jpg";

import websites from "assets/img/websites.png";


class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Hi I'm Tim!</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team1} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Timothy Lentz
                  <br />
                  <small className={classes.smallTitle}>Front End Web Engineer</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    I'm an introverted extrovert who travels hundreds of miles for coffee. I started my career as a filmmaker and use the skills of storytelling in my passion for developing web applications.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    href="https://www.linkedin.com/in/timothy-lentz-39a4586a/"
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    href="https://github.com/bucketsec"
                  >
                    <i className={classes.socials + " fab fa-github"} />
                  </Button>
                  
                </CardFooter>
              </Card>

            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
            <img alt='Websites' style={{width: '100%',right: 0, height: 'auto', float: 'right', marginTop: -40}} src={websites} />
            </GridItem>
            
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
