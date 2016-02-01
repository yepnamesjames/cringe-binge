import { CHANGE_CARDVIEW } from '../constants/CardViewActionTypes';

const initialState = 'updates';

export default function cardview(state = initialState, action) {
  switch (action.type) {
  case CHANGE_CARDVIEW:
    return action.cardView;
  default:
    return state;
  }
}
