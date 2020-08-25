const getMaha = (state = {
  indStates: []
}, action) => {
  if (action.type === "GET_MAHA") {

    state = { ...state, indStates: action.payload }
  }

  return state;
};

const getDelhi = (state = {
  indStates: []
}, action) => {
  if (action.type === "GET_DELHI") {

    state = { ...state, indStates: action.payload }
  }

  return state;
};

const getIndia = (state = {
  ind: []
}, action) => {
  if (action.type === "GET_INDIA") {

    state = { ...state, ind: action.payload }
  }

  return state;
};

export { getMaha, getDelhi, getIndia };
