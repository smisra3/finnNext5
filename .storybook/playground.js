import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
export default class EditorPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      currentState: props.code 
    };
  }
 
  componentDidCatch(error) {
    this.setState({
      hasError: true,
      error: error,
      currentState: this.state.previousState
    });
  }

  changeHandler = val => {
    let previousState = this.state.currentState;
    this.setState({
      hasError: false,
      currentState: val,
      previousState
    });
  };

  render() {
    return (
      <LiveProvider
        code={this.state.hasError ? this.state.currentState : this.props.code}
        scope={this.props.scope}
      >
        <div className="react-live-editor-wrap">
          <span>Edit code below for live preview</span>
          <LiveEditor onChange={this.changeHandler} />
        </div>
        <div className="react-live-error-wrap">
          {this.state.hasError ? (
            <div className="react-live-error" style={{ whiteSpace: 'normal' }}>
              Error Occurred.
              <strong>
                [<em>Editor reset with previous state.</em>]
              </strong>
              <br />
              <br />
              <span>{this.state.error.toString()}</span>
            </div>
          ) : (
            ''
          )}
          <LiveError />
        </div>
        <LivePreview />
      </LiveProvider>
    );
  }
}