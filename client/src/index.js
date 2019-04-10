import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {register} from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'tachyons';
import './index.css';

ReactDOM.render(<App />, document.getElementById("root"));
register();
