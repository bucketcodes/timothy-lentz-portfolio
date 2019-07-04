import React from 'react'
import {Card, CardActionArea, CardMedia, CardContent, CardActions, Button} from '@material-ui/core'
import GridItem from "components/Grid/GridItem.jsx";


function PortfolioItem({classes, title, description, skills, viewURL, sourceURL, imageURL}) {
    return (
        <GridItem xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia component="img"
                                alt="Image Desctiption"
                                height="140"
                                image={imageURL}
                                title="Image Title" />
                    <CardContent>
                        <h4 style={{marginBottom: 0, marginTop: 0}} className={classes.title}>
                            {title}
                        </h4>
                        <p className={classes.description}>{description}</p>
                        <ul className={classes.skillList}>
                            {skills && skills.map(skill => (
                                <li>{skill}</li>
                            ))}
                        </ul>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button href={sourceURL} size="small" color="primary">
                        Source
                    </Button>
                    <Button href={viewURL} size="small" color="primary">
                        View
                    </Button>
                </CardActions>
              </Card>
          </GridItem>
    )
}

export default PortfolioItem
