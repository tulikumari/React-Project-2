import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from './analytics.style';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Analytics = (props) => {
  const { classes } = props;

  return (
    <Grid xs={12} className="homeContent">
      <div className="followColors"><h1>Follow Colors for User Types Creating Community Pages</h1></div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        //className={classes.background}
        className="homeClick"
        spacing={16}
      >
          <Grid key={3} item xs={12} sm={3} md={3}>
            <Card className={classes.card}>
              <CardContent className="nwUser nwUser_green">
                  <p>NEW USER</p>
                  <p>NEW COMMUNITY</p>
                  <p>CLICK HERE</p>
                  <label>NUNC</label>
              </CardContent>
            </Card>
          </Grid>

          <Grid key={3} item xs={12} sm={3} md={3}>
            <Card className={classes.card}>
              <CardContent className="nwUser nwUser_blue">
                  <p>NEW USER</p>
                  <p>EXISTING COMMUNITY</p>
                  <p>CLICK HERE</p>
                  <label>NUEC</label>
              </CardContent>
            </Card>
          </Grid>

          <Grid key={3} item xs={12} sm={3} md={3}>
            <Card className={classes.card}>
              <CardContent className="nwUser nwUser_orange">
                  <p>EXISTING USER</p>
                  <p>EXISTING COMMUNITY</p>
                  <p>CLICK HERE</p>
                  <label>EUEC</label>
              </CardContent>
            </Card>
          </Grid>

          <Grid key={3} item xs={12} sm={3} md={3}>
            <Card className={classes.card}>
              <CardContent className="nwUser nwUser_yellow">
                  <p>EXISTING USER</p>
                  <p>NEW COMMUNITY</p>
                  <p>CLICK HERE</p>
                  <label>EUNC</label>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

    </Grid>
  );
};

Analytics.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles, { withTheme: true })(Analytics);
