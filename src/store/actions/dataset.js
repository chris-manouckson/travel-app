import * as actionTypes from '../actionTypes/dataset';

export const datasetGetPending = () => ({
  type: actionTypes.DATASET_GET_PENDING,
});

export const datasetGetSuccess = (data) => ({
  type: actionTypes.DATASET_GET_SUCCESS,
  data,
});

export const datasetGetFailure = (error) => ({
  type: actionTypes.DATASET_GET_FAILURE,
  error,
});
