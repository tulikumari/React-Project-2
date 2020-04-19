import React from 'react';
import Grid from '@material-ui/core/Grid';

class Index extends React.Component {
  render() {
    return (
      <div>
        <Grid
          container
          direction="row"
          justify="center"
        >
          <Grid key={10} item xs={10} sm={10} md={10}>
            <Grid
              container
              direction="row"
              justify="center"
            >
                <div className="userdata">
                  <label><b>Travel Page</b></label>
                </div>

            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Index;