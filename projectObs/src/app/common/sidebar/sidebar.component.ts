import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public treeData:any=[];
  constructor(private router: Router) {
    this.treeData = [
  {
    label: 'Angular Observable',
    data: 'Documents Folder',
    expanded: true,
    url: '/observable',
    children: [
      {
        label: 'Observable',
        url: 'observable/intro'
      },
      {
        label: 'Create Observable',
        url: 'observable/create'
      },
      {
        label: 'Pipe Method And Operators',
        url: 'observable/operators'
      },
      {
        label: 'SwitchMap, MergeMap ...',
        url: 'observable/innerObservable'
      },
      {
        label: 'Other Operators',
        url: 'observable/otherOperators'
      },
      {
        label: 'UnSubscribe',
        url: 'observable/unsubscribe'
      },
    ]
  },
  {
    label: 'Subjects',
    url: '/subject',
    children: [
      {
        label: 'Subject',
        url: 'subject/intro'
      }

    ]
  }
];
  }


  onNodeSelect(event: any) {
    this.router.navigate([event.node.url]);
  }

}
