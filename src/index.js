import React from "react";
import ReactDOM from "react-dom";
import Counter from "./counter";
import {
  createStore,
  bindActionCreators
} from "redux";

import * as actions from "./actions";

import reducer from "./reducer";

const store = createStore(reducer);
const {
  dispatch
} = store;

const {
  inc,
  dec,
  rnd
} = bindActionCreators(actions, dispatch);

const update = () => {
  ReactDOM.render(<Counter counter={store.getState()} inc={inc} dec={dec} rnd={rnd} />, document.getElementById('root'));
};
update();
store.subscribe(update);

