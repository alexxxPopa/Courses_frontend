import { createStore, applyMiddleware, combineReducers} from 'redux';
import CourseReducer from './reducer-search';
import ReduxPromise from 'redux-promise';

const rootReducer = combineReducers({
  courses: CourseReducer
});

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);

export const initStore = () => {
  return createStoreWithMiddleWare(rootReducer);
}