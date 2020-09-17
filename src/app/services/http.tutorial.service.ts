/**
 * @author Gevorg Avetisyan on 9/16/2020.
 */
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Tutorial} from '../models/tutorial.model';

@Injectable({
  providedIn: 'root'
})
export class HttpTutorialService {
  constructor() {
  }

  getTutorials(): Observable<Tutorial[]> {
    return of([{name: '1', url: '1.1'}, {name: '2', url: '2.1'}]);
  }
}
