// First separate folder is created in state for reducers (reducer means methods that actually updating state value)
// reducer function is created which take two parameters state (with default value is 0) and action (which is send by action creator)

const reducer = (state = 0, action) => {
  if (action.type === "deposite") { // if deposite then add amount of payload
    return state + action.payload;
  } else if (action.type === "withdraw") { // if withdraw then substract the amount of payload
    return state - action.payload;
  } else { // if type is nothing then return state value
    return state;
  }
};

export default reducer;