import {RouterModule, Routes} from '@angular/router';
import {TableComponent} from './components/table/table.component';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  { path: '', component: TableComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
