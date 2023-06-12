import { info } from "console";
import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };

  //this is basically like updating state
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  //ideally send this to an error aggregator like Sentry
  componentDidCatch(error) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          This listing has an error. <Link to="/">Click here</Link> to go back
          to the home page.
        </h2>
      );
    }

    //this.props.children is a special prop that is passed to components automatically
    return this.props.children;
  }
}

export default ErrorBoundary;
