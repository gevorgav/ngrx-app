/**
 * @author Gevorg Avetisyan on 9/16/2020.
 */
import {Injectable} from '@angular/core';
import {HttpTutorialService} from '../services/http.tutorial.service';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as TutorialActions from '../actions/tutorial.actions';
import {map, mergeMap} from 'rxjs/operators';
import {Tutorial} from '../models/tutorial.model';

@Injectable()
export class TutorialEffect {
  constructor(private actions$: Actions,
              private tutorialService: HttpTutorialService) {
  }

  @Effect()
  loadTutorials$: Observable<Action> = this.actions$.pipe(
    ofType<TutorialActions.Actions>(
      TutorialActions.LOAD_TUTORIALS
    ),
    mergeMap((action: TutorialActions.LoadTutorials) =>
      this.tutorialService.getTutorials().pipe(
        map(
          (tutorials: Tutorial[]) =>
            new TutorialActions.LoadTutorialSuccess(tutorials)
        )
      )
    )
  );
}
