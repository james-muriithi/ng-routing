import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-router-param',
  templateUrl: './test-router-param.component.html',
  styleUrls: ['./test-router-param.component.scss'],
})
export class TestRouterParamComponent implements OnInit {

  constructor(private route: ActivatedRoute, private testService: TestService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
    });
    
  }
}
