import React from 'react';
import Grid from '@material-ui/core/Grid';

class Index extends React.Component {
  render() {
    const { classes } = this.props;

    return (

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid key={10} item xs={10} sm={10} md={10}>
          <div className="describe_you">
              <h1>What best describes you:</h1>
              <h2>Senoir Community</h2>
               <ul>
                <li><a>Provide Services to Senior Community/s</a></li>
                <li><a>I’m searching for Senior Services</a></li>
                <li><a>I’m interested in Volunteering</a></li>
               </ul>   
          </div>    

        </Grid>
      </Grid>

    );
  }
}

export default Index;