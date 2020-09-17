/**
 * @author Gevorg Avetisyan on 9/16/2020.
 */
import { Action } from '@ngrx/store';
import {Tutorial} from '../models/tutorial.model';

export const ADD_TUTORIAL       = '[TUTORIAL] Add';
export const REMOVE_TUTORIAL    = '[TUTORIAL] Remove';
export const LOAD_TUTORIALS = '[TUTORIAL] Load Tutorials';
export const LOAD_TUTORIALS_SUCCESS = '[TUTORIAL]  Load Tutorials Success';

export class AddTutorial implements Action {
  readonly type = ADD_TUTORIAL;

  constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
  readonly type = REMOVE_TUTORIAL;

  constructor(public payload: number) {}
}

export class LoadTutorials {
  readonly type = LOAD_TUTORIALS;
}

export class LoadTutorialSuccess {
  readonly type = LOAD_TUTORIALS_SUCCESS;

  constructor(public payload: Tutorial[]) {}
}

export type Actions = AddTutorial | RemoveTutorial | LoadTutorials | LoadTutorialSuccess;

