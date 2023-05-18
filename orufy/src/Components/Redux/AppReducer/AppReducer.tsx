import { FILTER_BY_SEARCH } from "./AppActionType";

    
    const initState = {
      data: [],
      search: "",
      isLoading: false,
      isError: false,
    };
    
    const AppReducer = (state = initState, action:any) => {
      const { type, payload } = action;
      switch (type) {
        case "GET_DATA_REQUEST":
          return {
            ...state,
            isLoading: true,
          };
    
        case "GET_DATA_SUCCESS":
          return {
            ...state,
            isLoading: false,
            data: payload,
          };
    
        case "GET_DATA_FAILURE":
          return {
            ...state,
            isLoading: false,
            isError: true,
          };
    
        //    ``````````````  FITER BY TITLE PART ```````````
    
        case FILTER_BY_SEARCH:
          return {
            ...state,
            isLoading: false,
            search: payload,
          };
    
    
        default: {
          return state;
        }
      }
    };
    
    export default AppReducer;
    