import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {
  
  data!: Object;
  loading!: boolean;
  o!:Observable<Object>;

  constructor() { }

  ngOnInit(): void {
  }

}
