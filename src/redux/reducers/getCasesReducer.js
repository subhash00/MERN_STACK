const getCases = (state = {
  totalCases: []
}, action) => {
  if (action.type === "GET_CASES") {

    state = { ...state, totalCases: action.payload }
  }

  return state;
};
export default getCases;
