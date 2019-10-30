import axios from "axios";
import { LINK_KO, LINK_OK } from "./types";

//Request an URL
export const requesturl = longUrl => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ longUrl });

  try {
    const res = await axios.post("/api/url/shorten", body, config);
    dispatch({
      type: LINK_OK,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: LINK_KO,
      payload: err.response.data.msg
    });
  }
};
