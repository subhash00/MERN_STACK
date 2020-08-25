export function getMahaAction() {

  return function (dispatch) {
    fetch("https://api.covid19india.org/data.json")
      .then(res => {
        return res.json();

      })
      .then(res => {
        // console.log(res)
        const stateData = Object.values(res.statewise).find(x => x.state === 'Maharashtra');
        dispatch({ type: "GET_MAHA", payload: stateData });
      })
      .catch(err => {
        console.log(err);
      })

  }

}

export function getDelhiAction() {

  return function (dispatch) {
    fetch("https://api.covid19india.org/data.json")
      .then(res => {
        return res.json();

      })
      .then(res => {
        // console.log(res)
        const stateData = Object.values(res.statewise).find(x => x.state === 'Delhi');
        dispatch({ type: "GET_DELHI", payload: stateData });
      })
      .catch(err => {
        console.log(err);
      })

  }

}

export function getIndiaAction() {

  return function (dispatch) {
    fetch("https://api.covid19india.org/data.json")
      .then(res => {
        return res.json();

      })
      .then(res => {
        // console.log(res)
        const Data = Object.values(res.statewise).find(x => x.state === 'Total');
        dispatch({ type: "GET_INDIA", payload: Data });
      })
      .catch(err => {
        console.log(err);
      })

  }

}
