import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestRouterComponent } from './test-router/test-router.component';
import { TestRouterParamComponent } from './test-router-param/test-router-param.component';

const routes: Routes = [
  {
    path: 'test',
    component: TestRouterComponent,
  },
  {
    path: 'test-param/:id',
    component: TestRouterParamComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
