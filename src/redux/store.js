import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import videoSagas from "../sagas/videoSagas";
import streamingSagas from "../sagas/streamingSagas";
import createSagaMonitor from "@clarketm/saga-monitor";


const defaultConfig = {
  level: "debug", // logging level
  verbose: true, // verbose mode
  color: "#03A9F4", // default color
  rootSagaStart: true, // show root saga start effect
  effectTrigger: true, // show triggered effects
  effectResolve: true, // show resolved effects
  effectReject: true, // show rejected effects
  effectCancel: true, // show cancelled effects
  actionDispatch: true // show dispatched actions
};


const config = {
  level: "log",
  effectTrigger: true,
  effectResolve: true,
  actionDispatch: true
}


const sagaMiddleware = createSagaMiddleware({ sagaMonitor:  createSagaMonitor(defaultConfig)});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

videoSagas.map(videoSaga => sagaMiddleware.run(videoSaga));
streamingSagas.map(streamingSaga=>sagaMiddleware.run(streamingSaga));

export default store;







