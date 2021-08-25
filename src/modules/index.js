import { combineReducers } from 'redux';
import counter from './counter';
// import todos from './todos';

// 1. combineReducers 함수로 counter 모듈과 todos 모듈을 하나의 모듈로 합쳐
const rootReducer = combineReducers({
  counter
  // todos
});

// 2. rootReducer 라는 이름으로 export
export default rootReducer;