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

                    <div className="send_chat">

                        <div className="sendCode">
                            <h1>Seniorplicity will send a code to the community phone number on file.</h1>
                            <h2><span>Note:</span> Please make reception aware that you are expecting a confirmation call that will
                            Include a 6 digit code. We’ll call in 30 sec. to give you time to coordinate.</h2>

                            <div><Button size="medium">Send Code</Button></div>
                        </div>

                        <div className="and_or"><p>OR</p></div>

                        <div className="startChat">
                            <p>Chat with us to gain Access</p>
                            <div><Button size="medium">Start Chat</Button></div>
                        </div>

                    </div>

                </Grid>
            </Grid>
        );
    }
}
export default Index;