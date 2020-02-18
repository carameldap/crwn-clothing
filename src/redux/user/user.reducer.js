//object represent initial state
const INITIAL_STATE = {
  currentUser: null
};

//require a default value to pass state
const userReducer = (state = INITIAL_STATE, action) => {
  //switch statement to return actual state based on action
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
