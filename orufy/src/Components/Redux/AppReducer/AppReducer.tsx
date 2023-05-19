import { FILTER_BY_SEARCH } from "./AppActionType";

const initState = {
  data: [],
  search: "",
  isLoading: false,
  isError: false,
  sort: "default",
  brand: "",
  category: "",
  price: "",
};

const AppReducer = (state = initState, action: any) => {
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

    //          ```````````  SORT ACCORDING TO PRICE   ````````````

    case "SORT_BY_PRICE":
      return {
        ...state,
        sort: action.payload,
      };

    //          ```````````  FILTER BY BRAND  AND CATEGORY   ```````````

    case "FILTER_BRAND":
      return {
        ...state,
        brand: action.payload,
      };

    case "FILTER_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    case "FILTER_PRICE":
      return {
        ...state,
        price: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default AppReducer;
