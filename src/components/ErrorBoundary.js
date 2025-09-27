import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledErrorBoundary = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: 50vh;
  text-align: center;
  color: var(--light-slate);

  h2 {
    color: var(--green);
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 30px;
    max-width: 500px;
    line-height: 1.5;
  }

  button {
    ${({ theme }) => theme.mixins.smallButton};
  }
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Portfolio Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <StyledErrorBoundary>
          <h2>Something went wrong</h2>
          <p>
            Don't worry, this happens sometimes. The error has been logged and I'm working to fix it.
            In the meantime, you can try refreshing the page or contact me directly.
          </p>
          <button onClick={() => window.location.reload()}>
            Refresh Page
          </button>
        </StyledErrorBoundary>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;