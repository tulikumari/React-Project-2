import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/ModeEdit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import green from '@material-ui/core/colors/green';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import Switch from '@material-ui/core/Switch';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ShareIcon from '@material-ui/icons/Share';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Grid from '@material-ui/core/Grid';

function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
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
    checkedA: true,
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

  render() {
    const { classes, theme } = this.props;
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen
    };

    const fabs = [
      {
        color: 'primary',
        className: classes.fab,
        icon: <AddIcon />
      },
      {
        color: 'secondary',
        className: classes.fab,
        icon: <EditIcon />
      },
      {
        color: 'inherit',
        className: classNames(classes.fab, classes.fabGreen),
        icon: <UpIcon />
      }
    ];

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
              <AppBar position="static" color="default">
                <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  fullWidth
                >
                  <Tab label="PROVIDERS" />
                  <Tab label="COMMUNITIES" />
                  <Tab label="USERS" />
                  <Tab label="ALL" />
                  <Tab label="VOLUNTEER" />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={this.state.value}
                onChangeIndex={this.handleChangeIndex}
              >
                <TabContainer dir={theme.direction}>
                  <div className="connect_tabInner">
                    <Table>
                      <Thead>
                        <Tr>
                          <Th>NAME</Th>
                          <Th>STATUS</Th>
                          <Th>TYPE</Th>
                          <Th>OF TYPE</Th>
                          <Th>OFFER</Th>
                          <Th>OPTION</Th>
                          {/* <Th>DISPLAY</Th>
                          <Th>ACTION</Th> */}
                        </Tr>
                      </Thead>
                      <Tbody>

                        <Tr>
                          <Td>Keller</Td>
                          <Td>Pending</Td>
                          <Td>Realtor</Td>
                          <Td>1</Td>
                          <Td>-500.00</Td>
                          <Td><a>Find More Like This</a></Td>

                          {/* <Td>
                            <Switch
                              checked={this.state.checkedA}
                              onChange={this.handleToggle('checkedA')}
                              aria-label="checkedA"
                            />
                          </Td>
                          <Td className="rowEditIcon">
                            <MailOutlineIcon />
                            <ShareIcon />
                            <DeleteForeverIcon />
                          </Td> */}

                        </Tr>
                        <Tr>
                          <Td>Dignity</Td>
                          <Td>Pending</Td>
                          <Td>Funeral Home</Td>
                          <Td>1</Td>
                          <Td>-250.00</Td>

                          {/* <Td><a>Find More Like This</a></Td>
                          <Td>
                            <Switch
                              checked={this.state.checkedA}
                              onChange={this.handleToggle('checkedA')}
                              aria-label="checkedA"
                            />
                          </Td>
                          <Td className="rowEditIcon">
                            <MailOutlineIcon />
                            <ShareIcon />
                            <DeleteForeverIcon />
                          </Td> */}

                        </Tr>
                        <Tr>
                          <Td>Annex</Td>
                          <Td>Pending</Td>
                          <Td>Pharmacy</Td>
                          <Td>2</Td>
                          <Td>-50.00</Td>
                          <Td><a>Find More Like This</a></Td>

                          {/* <Td>
                            <Switch
                              checked={this.state.checkedA}
                              onChange={this.handleToggle('checkedA')}
                              aria-label="checkedA"
                            />
                          </Td>
                          <Td className="rowEditIcon">
                            <MailOutlineIcon />
                            <ShareIcon />
                            <DeleteForeverIcon />
                          </Td> */}

                        </Tr>
                        <Tr>
                          <Td>John</Td>
                          <Td>Pending</Td>
                          <Td>Pharmacy</Td>
                          <Td>3</Td>
                          <Td>-150.00</Td>
                          <Td><a>Find More Like This</a></Td>

                          {/* <Td>
                            <Switch
                              checked={this.state.checkedA}
                              onChange={this.handleToggle('checkedA')}
                              aria-label="checkedA"
                            />
                          </Td>
                          <Td className="rowEditIcon">
                            <MailOutlineIcon />
                            <ShareIcon />
                            <DeleteForeverIcon />
                          </Td> */}

                        </Tr>
                        <Tr>
                          <Td>Smith</Td>
                          <Td>Connected</Td>
                          <Td>Non-Medical</Td>
                          <Td>4</Td>
                          <Td>-100.00</Td>
                          <Td><a>Find More Like This</a></Td>

                          {/* <Td>
                            <Switch
                              checked={this.state.checkedA}
                              onChange={this.handleToggle('checkedA')}
                              aria-label="checkedA"
                            />
                          </Td>
                          <Td className="rowEditIcon">
                            <MailOutlineIcon />
                            <ShareIcon />
                            <DeleteForeverIcon />
                          </Td> */}

                        </Tr>
                        <Tr>
                          <Td>Jack</Td>
                          <Td>Connected</Td>
                          <Td>Non-Medical</Td>
                          <Td>1</Td>
                          <Td>-50.00</Td>
                          <Td><a>Find More Like This</a></Td>

                          {/* <Td>
                            <Switch
                              checked={this.state.checkedA}
                              onChange={this.handleToggle('checkedA')}
                              aria-label="checkedA"
                            />
                          </Td>
                          <Td className="rowEditIcon">
                            <MailOutlineIcon />
                            <ShareIcon />
                            <DeleteForeverIcon />
                          </Td> */}

                        </Tr>
                        <Tr>
                          <Td>Tom</Td>
                          <Td>Connected</Td>
                          <Td>Non-Medical</Td>
                          <Td>1</Td>
                          <Td>-50.00</Td>
                          <Td><a>Find More Like This</a></Td>

                          {/* <Td>
                            <Switch
                              checked={this.state.checkedA}
                              onChange={this.handleToggle('checkedA')}
                              aria-label="checkedA"
                            />
                          </Td>
                          <Td className="rowEditIcon">
                            <MailOutlineIcon />
                            <ShareIcon />
                            <DeleteForeverIcon />
                          </Td> */}

                        </Tr>
                        <Tr>
                          <Td>Denny</Td>
                          <Td>Connected</Td>
                          <Td>Non-Medical</Td>
                          <Td>0</Td>
                          <Td>-80.00</Td>
                          <Td><a>Find More Like This</a></Td>

                          {/* <Td>
                            <Switch
                              checked={this.state.checkedA}
                              onChange={this.handleToggle('checkedA')}
                              aria-label="checkedA"
                            />
                          </Td>
                          <Td className="rowEditIcon">
                            <MailOutlineIcon />
                            <ShareIcon />
                            <DeleteForeverIcon />
                          </Td> */}

                        </Tr>

                      </Tbody>
                    </Table>

                  </div>
                </TabContainer>
                <TabContainer dir={theme.direction}>Item Two 111</TabContainer>
                <TabContainer dir={theme.direction}>Item Three 111</TabContainer>
              </SwipeableViews>

              {fabs.map((fab, index) => (
                <Zoom
                
                  key={fab.color}
                  in={this.state.value === index}
                  timeout={transitionDuration}
                  style={{
                    transitionDelay: this.state.value === index ? transitionDuration.exit : 0
                  }}
                  unmountOnExit
                >
                  <Button variant="fab" className={fab.className} color={fab.color}>
                    {fab.icon}
                  </Button>
                </Zoom>
              ))}

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