import * as actionTypes from '../actionTypes/dataset';

const initialState = {
  data: {
    counts: {},
    guides: [],
    cities: [],
    experiences: [],
  },
  getRequestStatus: { isLoading: false, error: null },
};

const dataset = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DATASET_GET_PENDING:
      return {
        ...state,
        getRequestStatus: { isLoading: true, error: null },
      };
    case actionTypes.DATASET_GET_SUCCESS:
      return {
        ...state,
        data: action.data,
        getRequestStatus: { isLoading: false, error: null },
      };
    case actionTypes.DATASET_GET_FAILURE:
      return {
        ...state,
        getRequestStatus: { isLoading: true, error: action.error },
      };

    default:
      return state;
  }
};

export default dataset;
