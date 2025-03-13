import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './components/observables/observable/observable.component';
import { IntroComponent } from './components/observables/intro/intro.component';
import {CreateComponent} from "./components/observables/create/create.component";
import {OperatorsComponent} from "./components/observables/operators/operators.component";
import {InnerObservableComponent} from "./components/innerObservables/inner-observable/inner-observable.component";
import {SubjectComponent} from "./components/subjects/subject/subject.component";
import {SubjectIntroComponent} from "./components/subjects/subject-intro/subject-intro.component";
import {UnsubscribeObsComponent} from "./components/unsubscribe/unsubscribe-obs/unsubscribe-obs.component";
import {OtherOperatorsComponent} from "./components/observables/other-operators/other-operators.component";

const routes: Routes = [
  { path: 'observable', component: ObservableComponent ,
    children: [
      {
        path: 'intro', // Child route 1
        component: IntroComponent
      },
      {
        path: 'create', // Child route 1
        component: CreateComponent
      },
      {
        path: 'operators', // Child route 1
        component: OperatorsComponent
      },
      {
        path: 'innerObservable', // Child route 1
        component: InnerObservableComponent
      },
      {
        path: 'otherOperators', // Child route 1
        component: OtherOperatorsComponent
      },
      {
        path: 'unsubscribe', // Child route 1
        component: UnsubscribeObsComponent
      },
      {
        path: '', // Default child route
        redirectTo: 'intro', // Redirect to child1 by default
        pathMatch: 'full'
      }
    ]

  },
  { path: 'subject', component: SubjectComponent ,
    children: [
      {
        path: 'intro', // Child route 1
        component: SubjectIntroComponent
      }
      ]
  },
  { path: '', redirectTo: 'obserable', pathMatch: 'full' },
  { path: '**', component: ObservableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
