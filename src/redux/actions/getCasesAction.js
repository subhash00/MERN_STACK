export function getCasesAction() {
  
  return function (dispatch) {
    fetch("https://api.covid19india.org/data.json")
      .then(res => {
        return res.json();

      })
      .then(res => {
        // console.log(res)
        dispatch({ type: "GET_CASES", payload: res.cases_time_series });
      })
      .catch(err => {
        console.log(err);
      })

  }

}
