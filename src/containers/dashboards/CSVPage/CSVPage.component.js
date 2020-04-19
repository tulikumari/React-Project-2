import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%'
    },
    menu: {
        width: '100%'
    }
});

class Index extends React.Component {
    render() {
        return (
            <div className="csvMain">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className="csvContent"
                >
                    <Grid item xs={12} sm={8} md={8}>

                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            className="csvContentCmn"
                        >
                            <Grid item xs={12} sm={6} md={6} className="csv-6">
                                <label>Step 1:</label>
                                <p>Download CSV</p>
                                <div><img src="../../assets/images/download.png" alt="" title="" /></div>
                            </Grid>

                            <Grid item xs={12} sm={6} md={6} className="csv-6">
                                <label>Step 2:</label>
                                <p>Fill Out CSV Spreadsheet</p>
                                <div><img src="../../assets/images/spreadsheet.png" alt="" title="" /></div>
                            </Grid>
                        </Grid>
                            <div className="setUpload_Line"><label>Next Steps</label></div>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            className="csvContentCmn"
                        >
                            <Grid item xs={12} sm={6} md={6} className="csv-6">
                                <label>Step 3:</label>
                                <p>Save CSV</p>
                                <div><img src="../../assets/images/save.png" alt="" title="" /></div>
                            </Grid>

                            <Grid item xs={12} sm={6} md={6} className="csv-6">
                                <label>Step 4:</label>
                                <p>Upload CSV</p>
                                <div><img src="../../assets/images/upload.png" alt="" title="" /></div>
                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>

            </div>
        );
    }
}
export default withStyles(styles)(Index);