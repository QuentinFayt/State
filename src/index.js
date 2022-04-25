import React from "react";
import ReactDOM from "react-dom";
import Counter from "components/Counter";
import Colors from "components/Colors";

const App = () => (
    <div>
        <Counter/>
        <Colors/>
    </div>
);

ReactDOM.render(<App/>, document.getElementById("root"));