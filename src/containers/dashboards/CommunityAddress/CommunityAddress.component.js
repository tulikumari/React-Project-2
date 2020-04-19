import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
                    <div className="cmunity_verify">

                        <h1>This Community address is currently listed on Seniorplicity as:</h1>
                        
                        <div className="nameLicence">
                            <div><label>Name:</label> <span>ABC Senior Living</span></div>
                            <div><label>License#:</label> <span>88888888</span></div>
                            <p>123 Main Street Tarpon Springs, FL 34685</p>
                        </div>

                        <div className="cmunity_note">
                            <p><span>NOTE:</span> If this is the correct address and community has changed names, ownership or licensing select Yes! You’ll be able to update the community name and license# once logged in.</p> 
                        </div>    

                        <div className="cmunity_verfyAdd">
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