import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "../../reducers";

function configureStore(initalState = {}) {
  const store = createStore(reducer, initalState, devToolsEnhancer({}));
  return store;
}
export default configureStore;
