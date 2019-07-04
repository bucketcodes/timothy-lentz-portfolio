import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";


import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

import PortfolioItem from "../../Components/PortfolioItem";

const portfolioList = [{
    title: 'Lesson Plan Builder',
    description: 'An application for teachers interested in building, sharing, and finding 21st century lesson plans.',
    skills: ['ReactJS', 'Redux', 'Firebase', 'AWS', 'NodeJS', 'Azure', 'MaterialUI'],
    viewURL: 'https://learning-portal-portfolio.firebaseapp.com/',
    sourceURL: 'https://github.com/bucketsec/learning-portal-portfolio',
    imageURL: '/media/learning-portal.jpg',
},{
    title: 'CordMedia Grid',
    description: 'A recreation of CordMedia\'s grid component on their home page',
    skills: ['HTML', 'SCSS', 'ProcessWire', 'jQuery'],
    viewURL: 'https://cordmedia-timlentz.herokuapp.com/',
    sourceURL: 'https://github.com/bucketsec/cordmedia',
    imageURL: '/media/cord-media.jpg',
},
{
    title: 'Little Bar Website',
    description: 'A website for the bar "Little Bar".',
    skills: ['HTML', 'SCSS', 'Javascript', 'CSS Animation'],
    viewURL: 'https://little-bar.herokuapp.com',
    sourceURL: 'https://github.com/bucketsec/little-bar',
    imageURL: '/media/little-bar.jpg'
},
{
    title: 'React + ChartJS Dashboard',
    description: 'A test of using ReactJS and ChartJS to build a dashboard with animated graphs.',
    skills: ['ReactJS', 'Javascript', 'ChartJS', 'Material UI'],
    viewURL: 'https://example-react-dashboard-pcfs.herokuapp.com/',
    sourceURL: 'https://github.com/bucketsec/example-dashboard',
    imageURL: '/media/dashboard.jpg'
}]

class PortfolioSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={12}>
            <h2 className={classes.title}>Here is some of my work.</h2>
          </GridItem>
          {portfolioList && portfolioList.map(item => (
              <PortfolioItem title={item.title} description={item.description} skills={item.skills} viewURL={item.viewURL} sourceURL={item.sourceURL} imageURL={item.imageURL} classes={classes}/>
          ))}
          
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(PortfolioSection);
