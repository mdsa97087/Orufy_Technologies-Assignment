import { FILTER_BY_SEARCH } from "./AppActionType";
import axios from "axios";

const getDataRequest = () => {
      return {
            type: "GET_DATA_REQUEST",
      };
};

const getDataSuccess = (payload: any) => {
      return {
            type: "GET_DATA_SUCCESS",
            payload,
      };
};

const getDataFailure = () => {
      return {
            type: "GET_DATA_FAILURE",
      };
};

//  ``````````````` API CALLING `````````````

export const getDataReducer: any = () => (dispatch: any) => {
      dispatch(getDataRequest())
      return axios.get(`http://localhost:8080/Decoration`)
            .then((res) => {
                  dispatch(getDataSuccess(res.data))
                  // console.log(res.data)
            }).catch((err: string) => {
                  dispatch(getDataFailure())
            })
};
export const filterBySearch = (search: any) => ({
      type: FILTER_BY_SEARCH,
      payload: search,

})