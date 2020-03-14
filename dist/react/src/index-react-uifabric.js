'use strict';

import React from "react";
import ReactDOM from "react-dom";

import * as Fabric from "office-ui-fabric-react";

import {ChromePicker} from 'react-color';
// import * as ReactMosaic from 'react-mosaic-component';

// import "@blueprintjs/core/lib/css/blueprint.css"

//If you don't need rendering to strings comment out the following line
import ReactDOMServer from "react-dom/server";

//Export the base React packages to the Window object for GWT to access
window.React = React;
window.ReactDOM = ReactDOM;

//If you don't need rendering to strings comment out the following line
window.ReactDOMServer = ReactDOMServer;

window.Fabric = Fabric;

window.ChromePicker = ChromePicker;
// window.ReactMosaic = ReactMosaic;
