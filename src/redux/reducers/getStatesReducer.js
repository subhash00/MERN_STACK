const getStates = (state = {
    indStates: []
}, action) => {
    if (action.type === "GET_STATES") {

        state = { ...state, indStates: action.payload }
    }

    return state;
};
export default getStates;