import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { TreeModule } from 'primeng/tree';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { AppComponent } from './app.component';
import { ObservableComponent } from './components/observables/observable/observable.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { IntroComponent } from './components/observables/intro/intro.component';
import { CreateComponent } from './components/observables/create/create.component';
import { ItemListComponent } from './common/item-list/item-list.component';
import { FromEventComponent } from './components/observables/from-event/from-event.component';
import { OperatorsComponent } from './components/observables/operators/operators.component';
import { MapComponent } from './components/observables/map/map.component';
import { FilterOperatorComponent } from './components/observables/filter-operator/filter-operator.component';
import { TapOperatorComponent } from './components/observables/tap-operator/tap-operator.component';
import { InnerObservableComponent } from './components/innerObservables/inner-observable/inner-observable.component';
import { SwitchMapComponent } from './components/innerObservables/switch-map/switch-map.component';
import { MergeMapComponent } from './components/innerObservables/merge-map/merge-map.component';
import { ConcatMapComponent } from './components/innerObservables/concat-map/concat-map.component';
import { ExhaustMapComponent } from './components/innerObservables/exhaust-map/exhaust-map.component';
import { SubjectComponent } from './components/subjects/subject/subject.component';
import { SubjectIntroComponent } from './components/subjects/subject-intro/subject-intro.component';
import { BehaviorSubjectComponent } from './components/subjects/behavior-subject/behavior-subject.component';
import { HeaderComponent } from './common/header/header.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { OrderTableComponent } from './common/order-table/order-table.component';
import { ReplaySubjectComponent } from './components/subjects/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './components/subjects/async-subject/async-subject.component';
import { BaseComponent } from './common/base/base.component';
import { UnsubscribeObsComponent } from './components/unsubscribe/unsubscribe-obs/unsubscribe-obs.component';
import { ChildOneComponent } from './components/unsubscribe/child-one/child-one.component';
import { ChildTwoComponent } from './components/unsubscribe/child-two/child-two.component';
import { ChildThreeComponent } from './components/unsubscribe/child-three/child-three.component';
import { ChildFourComponent } from './components/unsubscribe/child-four/child-four.component';
import { OtherOperatorsComponent } from "./components/observables/other-operators/other-operators.component";
import { TakeOperatorsComponent } from './components/observables/take-operators/take-operators.component';
import { FirstLastOperatorsComponent } from './components/observables/first-last-operators/first-last-operators.component';
import { SkipOperatorsComponent } from './components/observables/skip-operators/skip-operators.component';
import { ScanReduceOperatorsComponent } from './components/observables/scan-reduce-operators/scan-reduce-operators.component';
import { RetryOperatorsComponent } from './components/observables/retry-operators/retry-operators.component';



@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    SidebarComponent,
    IntroComponent,
    CreateComponent,
    ItemListComponent,
    FromEventComponent,
    OperatorsComponent,
    MapComponent,
    FilterOperatorComponent,
    TapOperatorComponent,
    InnerObservableComponent,
    SwitchMapComponent,
    MergeMapComponent,
    ConcatMapComponent,
    ExhaustMapComponent,
    SubjectComponent,
    SubjectIntroComponent,
    BehaviorSubjectComponent,
    HeaderComponent,
    DashboardComponent,
    OrderTableComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    BaseComponent,
    UnsubscribeObsComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildThreeComponent,
    ChildFourComponent,
    OtherOperatorsComponent,
    TakeOperatorsComponent,
    FirstLastOperatorsComponent,
    SkipOperatorsComponent,
    ScanReduceOperatorsComponent,
    RetryOperatorsComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    TreeModule,
    ButtonModule,
    AccordionModule,
    InputTextModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
