import { loadingBarReducer } from "react-redux-loading-bar";
import { combineReducers, Reducer } from "redux";
import { PersistConfig, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducers } from '@saul/redux-store';
export interface IRootReducerState {
  loadingBar: Reducer<any>,
}

const persistorOptions: PersistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'appReducer',
  ]
};

const rootReducer = combineReducers<(Action: any) => IRootReducerState>({
  loadingBar: loadingBarReducer,
  ...reducers
});
const persistedReducer = persistReducer(persistorOptions, rootReducer);

export default persistedReducer;

