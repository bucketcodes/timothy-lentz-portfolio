import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Smile from "@material-ui/icons/SentimentSatisfiedAlt";
import FormatPaint from "@material-ui/icons/FormatPaint";
import FlashOn from "@material-ui/icons/FlashOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Do you need a web application?</h2>
            <h5 className={classes.description}>
              You're looking for a custom solution for you staff, clients, shareholders, or even yourself to be able to have a single repository of interactive and relevant use. You want a dashboard to monitor aspects of your business. You want clients to log in and interact with your brand. You need to share important information with your shareholders. You need a web application.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Your Story"
                description="Let's get coffee. When we start, I want to learn about you and hear the story of your business. Who, What, When, Where, and Why."
                icon={Smile}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Our Design"
                description="Together, we will design the application. Pen to paper, we'll discuss the look and style, we will plan on features and applications."
                icon={FormatPaint}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="My Developing"
                description="After I've learned your story, and we have created a design, then it's time for me to get to work. Your custom application is almost finished!"
                icon={FlashOn}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
