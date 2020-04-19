import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import Divider from '@material-ui/core/Divider';

import {
  changeSidenavToolbarBackground,
  changeSidenavToolbarText,
  changeSidenavPaletteType,

  changeContentToolbarBackground,
  changeContentToolbarText,
  changeContentPaletteType,

  changePrimaryPaletteBackground,
  changePrimaryPaletteText,
  changeSecondaryPaletteBackground,
  changeSecondaryPaletteText
} from '../../actions/theme.actions';

import scss from './theming.module.scss';
import ColorPicker from './color-picker.component';

const Theming = (props) => {
  const {
    theme
  } = props;

  return (
    <div>
      
    
    </div>
  );
};

function mapStateToProps(state) {
  return {
    theme: state.theme,
    layout: state.layout
  };
}

Theming.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  changeSidenavToolbarBackground: PropTypes.func.isRequired,
  changeSidenavToolbarText: PropTypes.func.isRequired,
  changeSidenavPaletteType: PropTypes.func.isRequired,
  changeContentToolbarBackground: PropTypes.func.isRequired,
  changeContentToolbarText: PropTypes.func.isRequired,
  changeContentPaletteType: PropTypes.func.isRequired,
  changePrimaryPaletteBackground: PropTypes.func.isRequired,
  changePrimaryPaletteText: PropTypes.func.isRequired,
  changeSecondaryPaletteBackground: PropTypes.func.isRequired,
  changeSecondaryPaletteText: PropTypes.func.isRequired
};

export default compose(connect(mapStateToProps, {
  changeSidenavToolbarBackground,
  changeSidenavToolbarText,
  changeSidenavPaletteType,
  changeContentToolbarBackground,
  changeContentToolbarText,
  changeContentPaletteType,
  changePrimaryPaletteBackground,
  changePrimaryPaletteText,
  changeSecondaryPaletteBackground,
  changeSecondaryPaletteText
}))(Theming);
