import * as AuthApi from "../api/AuthRequest";
export const logIn = (formdata) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.logIn(formdata);
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};

export const signUp = (formdata) => async (dispatch) => {
    dispatch({ type: "AUTH_START" });
    try {
      const { data } = await AuthApi.signUp(formdata);
      dispatch({ type: "AUTH_SUCCESS", data: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "AUTH_FAIL" });
    }
  };

  export const logout=()=>async(dispatch)=>{
    dispatch({type:"LOG_OUT"})
  }
