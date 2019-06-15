import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/index";
import { Provider } from "react-redux";
import { createStore } from "redux";
//import rootReducer from "./redux/reducers";

//const store = createStore(rootReducer);

ReactDOM.render(<App />, document.getElementById("root"));
