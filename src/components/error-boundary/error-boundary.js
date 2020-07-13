import React from 'react';
import PropTypes from 'prop-types';
import Note from '../note/note';
import * as Sentry from '@sentry/browser';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    const { setExtra } = this.props;
    this.setState({ error });
    Sentry.withScope((scope) => {
      // set tag to allow us to filter this event in Sentry
      scope.setTag('alertType', 'ErrorBoundary');
      // set extra error info
      scope.setExtra('errorInfo', errorInfo);
      // if available, include additional details
      if (setExtra) {
        // push each key/value from setExtraObject as an extra scope
        Object.keys(setExtra).forEach((key) => {
          const value = setExtra[key];
          if (key && value) scope.setExtra(key, value);
        });
      }
      Sentry.captureException(error);
    });
  }

  render() {
    const { hasError, error } = this.state;
    if (hasError) {
      return (
        <Note theme="error" title="Something went wrong">
          <p>
            We sent the error to the team. Please refresh the page to try again.
          </p>
          <details>
            <summary className="cursor-pointer">Error details</summary>
            {error && error.message && (
              <pre>
                <code>{error.message}</code>
              </pre>
            )}
          </details>
        </Note>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  /** Each key/value will be added as extra context to the Sentry issue. */
  setExtra: PropTypes.object
};
