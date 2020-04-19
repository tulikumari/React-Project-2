import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.core.css';
import scss from './compose-dialog.module.scss';
import Grid from '@material-ui/core/Grid';

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

class Index extends React.Component {
  state = {
    to: '',
    subject: '',
    content: ''
  };

  handleCancel = () => {
    this.props.onClose(null);
  };
  handleFormFieldChange = (prop, value) => {
    this.setState({ [prop]: value });
  }

  handleEntering = () => {
    this.setState({
      to: this.props.message.to,
      subject: this.props.message.subject,
      content: this.props.message.content
    });
  };

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={10} sm={6} md={6}>
          <h1 className="emailConnection">Email your Connection</h1>
          <div
            open={this.props.open}
            onClose={this.handleCancel}
            onEntering={this.handleEntering}
            aria-labelledby="new-mail-dialog"
          >
            <div id="new-mail-dialog">{this.props.title}</div>

            <div>
              <TextField
                autoFocus
                margin="dense"
                id="mail"
                label="To"
                type="email"
                value={this.state.to}
                onChange={e => this.handleFormFieldChange('to', e.target.value)}
                fullWidth
              />
              <TextField
                margin="dense"
                id="subject"
                label="Subject"
                type="text"
                value={this.state.subject}
                onChange={e => this.handleFormFieldChange('subject', e.target.value)}
                fullWidth
              />
              <div className="emailContent">
                <div className={scss['portal-quill']}>
                  <ReactQuill
                    className={scss['portal-quill__container']}
                    theme="snow"
                    modules={editorOptions.modules}
                    placeholder={editorOptions.placeholder}
                    value={this.state.content}
                    onChange={value => this.handleFormFieldChange('content', value)}
                    fullWidth
                  />
                </div>
              </div>
            </div>

            <div className="emailFormBtns">
              <Button color="primary"> Cancel </Button>
              <Button color="primary" autoFocus> Send </Button>
            </div>

          </div>
        </Grid>
      </Grid>
    );
  }
}

Index.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.shape({
    to: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired,
  onClose: PropTypes.func.isRequired
};

export default Index;
