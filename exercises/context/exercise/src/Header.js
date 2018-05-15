import React from "react";

import {Consumer} from "./Context";

const Header = ({children}) => (
    <Consumer>
        {({ primaryColor }) => (
            <div className="header">{children}</div>)}
    </Consumer>
);

export default Header;
