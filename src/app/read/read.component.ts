import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Tutorial} from '../models/tutorial.model';
import {AppState} from '../app.state';
import {Store} from '@ngrx/store';
import * as TutorialActions from '../actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  tutorials$: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new TutorialActions.LoadTutorials());
    this.tutorials$ = this.store.select('tutorial');
    this.store.select('tutorial').subscribe(res => {
      res.push({name: 'asdasd', url: '1'});
    });
  }

  delTutorial(index: number) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }
}

