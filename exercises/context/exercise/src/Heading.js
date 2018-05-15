import React from "react";

import {Consumer} from "./Context";

const Heading = ({children}) => (
    <Consumer>
        {({ primaryColor }) => (
            <h1 className="heading">
                {children}
            </h1>)}
    </Consumer>
);

export default Heading;
