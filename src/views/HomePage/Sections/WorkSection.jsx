import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import axios from 'axios'

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class WorkSection extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    buttonText: 'Send Message',
    sent: false
  }

  formSubmit = (e) => {
    e.preventDefault();

    this.setState({
      buttonText: '...sending'
    })

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }

    axios.post('https://nodejs-express-3csnvx5f2.now.sh/', data)
    .then( res => {
      this.setState({sent: true, buttonText: "Message Sent"})
    }).catch(() => {
      console.log('Message not sent');
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Let's tell a story</h2>
            <h4 className={classes.description}>
              Contact me to schedule a free consultation. In otherwords, let's get coffee.
            </h4>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    onChange={e => this.setState({ name: e.target.value})}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    onChange={(e) => this.setState({ email: e.target.value})}
                  />
                </GridItem>
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  onChange={e => this.setState({ message: e.target.value})}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                />
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                  >
                    <Button disabled={!this.state.name && !this.state.email && this.state.message && this.state.buttonText !== "Send Message"} color="primary">{this.state.buttonText}</Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
