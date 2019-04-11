// import /* we need our action types here*/ "../actions";
import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "../actions";
const initialState = {
  characters: [],
  isFetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
    
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    console.log(state)
    return {
      ...state,
      error: null,
      isFetching: true        
    };

    case FETCH_DATA_SUCCESS:
    console.log(state)

    return {
      ...state,
      characters: action.payload
    };

    case FETCH_DATA_FAILURE:
    console.log(state)

    return {
      ...state,
      error: action.payload
    }
    default:
      return state;
  }
};
