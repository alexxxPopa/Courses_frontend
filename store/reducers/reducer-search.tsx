import { SEARCH_COURSE } from '../actions/index';

export default function(state =[], action): Array<Object> {
  switch(action.type) {
    case SEARCH_COURSE:
      return  [ action.payload.data, ...state ];
  }
  return state;
}