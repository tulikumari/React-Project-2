import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/ModeEdit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import green from '@material-ui/core/colors/green';
import Input from '@material-ui/core/Input';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.core.css';
import scss from '../dashboards/JobBoard/EmailYourConnection/compose-dialog.module.scss';
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
const editorOptions = {
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }]
      ]
    },
    placeholder: 'insert email content...'
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 450,
      },
    },
  };
  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];  
class FloatingActionButtonZoom extends React.Component {
    state = {
        value: 0,
        value2: 0,
        checkedA: true,
        age: '',
        name: [],
        checkedB: false,
        checkedF: true,
        checkedG: true
    };

    handleChange = event => {
        this.setState({ name: event.target.value });
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
          <div className="mt40"><b>Alzmiher Cure on the Horizon</b></div>
          <div className="mt20"><img className="mt5" src="../../assets/images/icons/5_1.png" alt="" title="" width="220" /></div>
          <div className="mt40"><b>Alzmiher Cure on the Horizon</b></div>
          <div className="mt20"><img className="mt5" src="../../assets/images/icons/5_2.png" alt="" title="" width="220" /></div>
          
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
