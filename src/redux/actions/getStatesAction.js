export function getStatesAction() {

    return function (dispatch) {
        fetch("https://api.covid19india.org/data.json")
            .then(res => {
                return res.json();

            })
            .then(res => {
                // console.log(res)
                dispatch({ type: "GET_STATES", payload: res.statewise });
            })
            .catch(err => {
                console.log(err);
            })

    }

}
