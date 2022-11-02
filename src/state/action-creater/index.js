
export const dipositMoney = (ammount) => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload: ammount,
    });
  };
}

export const withdrawMoney = (ammount)=> {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: ammount,
    });
  };
}
