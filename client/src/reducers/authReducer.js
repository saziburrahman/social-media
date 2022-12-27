const authReducer = (
  state = { authData: null, loading: false, error: false },
  action
) => {
  switch (action.type) {
    case "AUHT_START":
      return { ...state, loading: true, error: false };
    case "AUHT_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, error: false };
    case "AUHT_FAIL":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default authReducer;
