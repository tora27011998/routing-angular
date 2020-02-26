import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  departmentID;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentID = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.departmentID = parseInt(params.get('id'));
    })
  }

  goPrevious() {
    let previousID = this.departmentID - 1;
    // this.router.navigate(['/departments', previousID]);
    this.router.navigate(['../', previousID], {relativeTo: this.route});
  }

  goNext() {
    let nextID = this.departmentID + 1;
    // this.router.navigate(['/departments', nextID]);
    this.router.navigate(['../', nextID], {relativeTo: this.route});
  }

  goToDepartmentsList() {
    let selectedID = this.departmentID ? this.departmentID : null;
    // this.router.navigate(['/departments', {id: selectedID, test: 'testvalue'}]);
    this.router.navigate(['../', {id: selectedID}], {relativeTo: this.route});
  }

  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.route});
  }
}
