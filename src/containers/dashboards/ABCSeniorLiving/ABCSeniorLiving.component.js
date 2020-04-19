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
                    <div className="boss_livUpr">

                        <div className="boss_cntct">
                            <h1>ABC Senior Living has <span>Brenda Lange</span> listed as the contact.</h1>
                            <h2>Please make a selection to continue</h2>
                        </div>  

                        <div className="boss_liv"> 
                            <p>Brenda Lange is my boss, but I’m the new contact for the ABC Senior Living.</p> 
                            <Button size="small"> CLICK HERE </Button>
                        </div>

                        <div className="boss_liv"> 
                            <p>Brenda Lange is still the contact but I would like access.</p> 
                            <Button size="small"> CLICK HERE </Button>
                        </div>

                        <div className="boss_liv"> 
                            <p>I’m the new contact for ABC Senior Living.</p> 
                            <Button size="small"> CLICK HERE </Button>
                        </div>

                        <div className="allow_code"> 
                            <p>Allow 30sec, to receive code.</p> 
                        </div>

                    </div>
                </Grid>
            </Grid>
        );
    }
}
export default Index;