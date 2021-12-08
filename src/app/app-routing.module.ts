import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotebookComponent } from './features/notebook/notebook.component';
import { PageContentComponent } from './features/page-content/page-content.component';

const routes: Routes = [{
  path: '', component: NotebookComponent,
  children: [
    {path: 'page', component: PageContentComponent}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
