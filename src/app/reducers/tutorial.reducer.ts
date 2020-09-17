/**
 * @author Gevorg Avetisyan on 9/16/2020.
 */
import {Tutorial} from '../models/tutorial.model';
import * as TutorialActions from '../actions/tutorial.actions';

const initialState: Tutorial = {
  name: 'Initial Tutorial',
  url: 'http://google.com'
};

export function tutorialReducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];
    case TutorialActions.REMOVE_TUTORIAL: {
      const index = action.payload;
      state.slice(0, index);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    case TutorialActions.LOAD_TUTORIALS_SUCCESS: {
      return [...action.payload];
    }
    default:
      return state;
  }
}
