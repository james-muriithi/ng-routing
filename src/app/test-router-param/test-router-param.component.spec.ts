import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRouterParamComponent } from './test-router-param.component';

describe('TestRouterParamComponent', () => {
  let component: TestRouterParamComponent;
  let fixture: ComponentFixture<TestRouterParamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRouterParamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRouterParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
