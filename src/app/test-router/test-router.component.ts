import { Component, OnInit } from '@angular/core';
import { Quote } from '@angular/compiler';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-router',
  templateUrl: './test-router.component.html',
  styleUrls: ['./test-router.component.scss'],
})
export class TestRouterComponent implements OnInit {
  loading: Boolean = false;
  public quotes!: Quote;

  constructor(private testService: TestService) {}

  ngOnInit() {
    this.loading = true;
    this.testService.getData().subscribe((quotes) => {
      // this.quotes = quotes;
      this.loading = false;
    });
  }
}
