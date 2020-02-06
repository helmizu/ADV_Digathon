import { ACTIONS } from '../../constants';

const initialState = {
  isLoading: false,
  data: []
};

export default function reducer(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case ACTIONS.LOADING:
      return {
        ...state,
        isLoading: true
      };
    case ACTIONS.LIST_OF_DEVELOPERS_FETCHED:
      return {
        ...state,
        isLoading: false,
        data
      };
    default:
      return state;
  }
}
