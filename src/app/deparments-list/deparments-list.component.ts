import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-deparments-list',
  template: `
    <ul>
      <li *ngFor="let department of departments" (click)="onSelect(department)">
        <span [class.selected]="isSelected(department.id)" >{{department.name}}</span>
      </li>
      </ul>
  `,
  styles: []
})
export class DeparmentsListComponent implements OnInit {
  selectedID;
  departments = [
    {id: 1, name: 'angular'},
    {id: 2, name: 'vue'},
    {id: 3, name: 'react'},
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedID = parseInt(params.get('id'));
    });
  }

  onSelect(department) {
    // c1: using route absolute  this.router.navigate(['/departments', department.id]);
    this.router.navigate([department.id], {relativeTo: this.route});
  }

  isSelected(id) {
    return id === this.selectedID;
  }
}
