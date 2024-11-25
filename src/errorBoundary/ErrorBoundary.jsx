import { Component } from "react";

class ErrorBoundary extends Component {
   constructor(props) {
      super(props);
      this.state = { hasError: false }
   }

   static getDerivedStateFromError() {
      return {
         hasError: true
      }
   }

   componentDidCatch(err, errInfo) {
      console.log(err, errInfo)
   }

   render() {
     if (this.state.hasError) {
      return <h3>The error has found</h3>
     } else {
      return this.props.children;
     }
   }
}

export default  ErrorBoundary;