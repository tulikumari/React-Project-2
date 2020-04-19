import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import Switch from '@material-ui/core/Switch';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ShareIcon from '@material-ui/icons/Share';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import HelpIcon from '@material-ui/icons/Help';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './adminCss.css';

function TabContainer(props) {
    const { children, dir } = props;

    return (
        <Typography component="div" dir={dir}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
        position: 'relative',
        minHeight: 200
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2
    },
    fabGreen: {
        color: theme.palette.common.white,
        backgroundColor: green[500]
    }
});

class FloatingActionButtonZoom extends React.Component {
    state = {
        value: 0,
        value2: 0,
        checkedA: true,
        age: '',
        name: 'hai',
        checkedB: false,
        checkedF: true,
        checkedG: true
    };

    handleToggle = name => (event, checked) => {
        this.setState({ [name]: checked });
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = (index) => {
        this.setState({ value: index });
    };

    handleChange2 = (event, value2) => {
        this.setState({ value2 });
    };

    handleChangeIndex2 = (index) => {
        this.setState({ value2: index });
    };

    render() {
        const { classes, theme } = this.props;
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12} sm={12} md={10}>
                    <div className="connect_tab">
                        <div className={classes.root}>
                            

                                {/* VOLUNTEER DESIGN */}
                                <div className="voluntryInnerTabs">
                                            <div className="blue-txt"><b>SEARCH BY:</b></div>
                                            <div className="selectByType admin_search_filter">
                                                <ul>
                                                    <li><FormControlLabel control={<Checkbox value="selectall" />} label="First" /></li>
                                                    <li><FormControlLabel control={<Checkbox value="assistedliving" />} label="Last" /></li>
                                                    <li><FormControlLabel control={<Checkbox value="nursinghome" />} label="Email" /></li>
                                                    <li> <FormControlLabel control={<Checkbox value="rehab" />} label="Zip" /></li>
                                                    <li> <FormControlLabel control={<Checkbox value="rehab" />} label="County" /></li>
                                                    <li> <FormControlLabel control={<Checkbox value="rehab" />} label="State" /></li>
                                                </ul>
                                            </div>

                                            <div className="srchVolun filter_search">
                                                <a>
                                                <TextField
                                                    margin="normal"
                                                    id="title"
                                                    label=""
                                                    type="text"
                                                    value="keyword"
                                                    className="search_textbox"
                                                /><SearchIcon className="search_btn" /></a>
                                            </div>

                                            <Typography variant="headline">
                                                <b>COMMUNITY AMENITIES:</b>
                                            </Typography>

                                            <div className="incentiveSbmt"><Button size="medium" className={classes.button}> <span className="font-size22 mr-12">+</span> AMENITIES </Button></div>                                        

                                            <Grid container direction="row" alignItems="top" spacing={0}>
                                                <Grid key={3} item xs={12} sm={12} lg={3}>
                                                  <div className="admin_list">
                                                    <span>
                                                         <DeleteForeverIcon />
                                                         <img className="mt5" src="../../assets/images/icons/edit_yellow.png" alt="" title="" width="20" />
                                                    </span>
                                                    <span>55+ Community</span>
                                                  </div>
                                                  <div className="admin_list">
                                                    <span>
                                                         <DeleteForeverIcon />
                                                         <img className="mt5" src="../../assets/images/icons/edit_yellow.png" alt="" title="" width="20" />
                                                    </span>
                                                    <span>55+ Community</span>
                                                  </div>
                                                  <div className="admin_list">
                                                    <span>
                                                         <DeleteForeverIcon />
                                                         <img className="mt5" src="../../assets/images/icons/edit_yellow.png" alt="" title="" width="20" />
                                                    </span>
                                                    <span>55+ Community</span>
                                                  </div>
                                                  <div className="admin_list">
                                                    <span>
                                                         <DeleteForeverIcon />
                                                         <img className="mt5" src="../../assets/images/icons/edit_yellow.png" alt="" title="" width="20" />
                                                    </span>
                                                    <span>55+ Community</span>
                                                  </div>
                                                  <div className="admin_list">
                                                    <span>
                                                         <DeleteForeverIcon />
                                                         <img className="mt5" src="../../assets/images/icons/edit_yellow.png" alt="" title="" width="20" />
                                                    </span>
                                                    <span>55+ Community</span>
                                                  </div>
                                                  <div className="admin_list">
                                                    <span>
                                                         <DeleteForeverIcon />
                                                         <img className="mt5" src="../../assets/images/icons/edit_yellow.png" alt="" title="" width="20" />
                                                    </span>
                                                    <span>55+ Community</span>
                                                  </div>
                                                  <div className="admin_list">
                                                    <span>
                                                         <DeleteForeverIcon />
                                                         <img className="mt5" src="../../assets/images/icons/edit_yellow.png" alt="" title="" width="20" />
                                                    </span>
                                                    <span>55+ Community</span>
                                                  </div>
                                                  <div className="admin_list">
                                                    <span>
                                                         <DeleteForeverIcon />
                                                         <img className="mt5" src="../../assets/images/icons/edit_yellow.png" alt="" title="" width="20" />
                                                    </span>
                                                    <span>55+ Community</span>
                                                  </div>
                                                  <div className="admin_list">
                                                    <span>
                                                         <DeleteForeverIcon />
                                                         <img className="mt5" src="../../assets/images/icons/edit_yellow.png" alt="" title="" width="20" />
                                                    </span>
                                                    <span>55+ Community</span>
                                                  </div>
                                                </Grid>
                                                <Grid key={3} item xs={12} sm={12} lg={3}>
                                                  <div className="admin_list">
                                                    <span>
                                                         <DeleteForeverIcon />
                                                         <img className="mt5" src="../../assets/images/icons/edit_yellow.png" alt="" title="" width="20" />
                                                    </span>
                                                    <span>55+ Community</span>
                                                  </div>
                                                  <div className="admin_list">
                                                    <span>
                                                         <DeleteForeverIcon />
                                                         <img className="mt5" src="../../assets/images/icons/edit_yellow.png" alt="" title="" width="20" />
                                                    </span>
                                                    <span>55+ Community</span>
                                                  </div>
                                                  <div className="admin_list">
                                                    <span>
                                                         <DeleteForeverIcon />
                                                         <img className="mt5" src="../../assets/images/icons/edit_yellow.png" alt="" title="" width="20" />
                                                    </span>
                                                    <span>55+ Community</span>
                                                  </div>
                                                  <div className="admin_list">
                                                    <span>
                                                         <DeleteForeverIcon />
                                                         <img className="mt5" src="../../assets/images/icons/edit_yellow.png" alt="" title="" width="20" />
                                                    </span>
                                                    <span>55+ Community</span>
                                                  </div>
                                                  <div className="admin_list">
                                                    <span>
                                                         <DeleteForeverIcon />
                                                         <img className="mt5" src="../../assets/images/icons/edit_yellow.png" alt="" title="" width="20" />
                                                    </span>
                                                    <span>55+ Community</span>
                                                  </div>
                                                  <div className="admin_list">
                                                    <span>
                                                         <DeleteForeverIcon />
                                                         <img className="mt5" src="../../assets/images/icons/edit_yellow.png" alt="" title="" width="20" />
                                                    </span>
                                                    <span>55+ Community</span>
                                                  </div>
                                                  <div className="admin_list">
                                                    <span>
                                                         <DeleteForeverIcon />
                                                         <img className="mt5" src="../../assets/images/icons/edit_yellow.png" alt="" title="" width="20" />
                                                    </span>
                                                    <span>55+ Community</span>
                                                  </div>
                                                  <div className="admin_list">
                                                    <span>
                                                         <DeleteForeverIcon />
                                                         <img className="mt5" src="../../assets/images/icons/edit_yellow.png" alt="" title="" width="20" />
                                                    </span>
                                                    <span>55+ Community</span>
                                                  </div>
                                                  <div className="admin_list">
                                                    <span>
                                                         <DeleteForeverIcon />
                                                         <img className="mt5" src="../../assets/images/icons/edit_yellow.png" alt="" title="" width="20" />
                                                    </span>
                                                    <span>55+ Community</span>
                                                  </div>
                                                </Grid>
                                                <Grid key={3} item xs={12} sm={12} lg={3}>
                                                  <div className="admin_list">
                                                    <span>
                                                         <DeleteForeverIcon />
                                                         <img className="mt5" src="../../assets/images/icons/edit_yellow.png" alt="" title="" width="20" />
                                                    </span>
                                                    <span>55+ Community</span>
                                                  </div>
                                                  <div className="admin_list">
                                                    <span>
                                                         <DeleteForeverIcon />
                                                         <img className="mt5" src="../../assets/images/icons/edit_yellow.png" alt="" title="" width="20" />
                                                    </span>
                                                    <span>55+ Community</span>
                                                  </div>
                                                  <div className="admin_list">
                                                    <span>
                                                         <DeleteForeverIcon />
                                                         <img className="mt5" src="../../assets/images/icons/edit_yellow.png" alt="" title="" width="20" />
                                                    </span>
                                                    <span>55+ Community</span>
                                                  </div>
                                                  <div className="admin_list">
                                                    <span>
                                                         <DeleteForeverIcon />
                                                         <img className="mt5" src="../../assets/images/icons/edit_yellow.png" alt="" title="" width="20" />
                                                    </span>
                                                    <span>55+ Community</span>
                                                  </div>
                                                  <div className="admin_list">
                                                    <span>
                                                         <DeleteForeverIcon />
                                                         <img className="mt5" src="../../assets/images/icons/edit_yellow.png" alt="" title="" width="20" />
                                                    </span>
                                                    <span>55+ Community</span>
                                                  </div>
                                                  <div className="admin_list">
                                                    <span>
                                                         <DeleteForeverIcon />
                                                         <img className="mt5" src="../../assets/images/icons/edit_yellow.png" alt="" title="" width="20" />
                                                    </span>
                                                    <span>55+ Community</span>
                                                  </div>
                                                  <div className="admin_list">
                                                    <span>
                                                         <DeleteForeverIcon />
                                                         <img className="mt5" src="../../assets/images/icons/edit_yellow.png" alt="" title="" width="20" />
                                                    </span>
                                                    <span>55+ Community</span>
                                                  </div>
                                                  <div className="admin_list">
                                                    <span>
                                                         <DeleteForeverIcon />
                                                         <img className="mt5" src="../../assets/images/icons/edit_yellow.png" alt="" title="" width="20" />
                                                    </span>
                                                    <span>55+ Community</span>
                                                  </div>
                                                  <div className="admin_list">
                                                    <span>
                                                         <DeleteForeverIcon />
                                                         <img className="mt5" src="../../assets/images/icons/edit_yellow.png" alt="" title="" width="20" />
                                                    </span>
                                                    <span>55+ Community</span>
                                                  </div>
                                                </Grid>
                                            </Grid>
                                            
                                            <div className="incentiveSbmt text-center mt20"><Button size="medium" className={classes.button}> Update </Button></div>

                                </div>
                                {/* END OF VOLUNTEER DESIGN */}

                          
                        </div>
                    </div>
                </Grid>
            </Grid>
        );
    }
}
FloatingActionButtonZoom.propTypes = {
    classes: PropTypes.shape({}).isRequired,
    theme: PropTypes.shape({}).isRequired
};
export default withStyles(styles, { withTheme: true })(FloatingActionButtonZoom);
