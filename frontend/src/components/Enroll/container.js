import React, { Component } from "react";
import Enroll from "./presenter";

// TODO: If the user is logged in, call API
class Container extends Component {

    render() {
        return <Enroll {...this.props} {...this.state} />;
    }
}

export default Container;
