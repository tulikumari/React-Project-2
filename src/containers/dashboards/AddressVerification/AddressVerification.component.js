import React from 'react';
import Grid from '@material-ui/core/Grid';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Button from '@material-ui/core/Button';

  const iconStyle = {
    fontSize: 25
  };


class Index extends React.Component {
  render() {
    return (
    <Grid
      container
      direction="row"
      spacing={0}
      justify="center"
      alignItems="center"
    >
        <Grid item sm={10} xs={12} md={10}>
          <div className="address_verify">
                <h1>USPS Address Verification:</h1>
                <div>
                    <label>Unverified:</label>
                     <ul>
                         <li><p>123 Main St Tarpon Springs, FL3<span></span>89</p></li>
                     </ul>    
                </div>    
                <div>
                    <label>Verified:</label>
                    <ul>
                         <li> <p>123 Main St Tarpon Springs, FL34685 <CheckCircleIcon style={iconStyle} className="add_verify" /> </p></li>
                     </ul>
                </div>  

                <div className="use_verfyAdd">
                    <h2>Use verified address?</h2>
                    <Button size="small"> Yes </Button>
                    <Button size="small"> No </Button>
                </div>    

          </div>  
        </Grid>
    </Grid>
    );
  }
}
export default Index;