/**
 * @author Gevorg Avetisyan on 9/16/2020.
 */
import {Tutorial} from './models/tutorial.model';

export interface AppState {
  readonly tutorial: Tutorial[];
}
