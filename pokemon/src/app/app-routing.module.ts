import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainerListComponent } from './trainer/trainer-list/trainer-list.component';
import { TrainerDetailComponent } from './trainer/trainer-detail/trainer-detail.component';

const routes: Routes = [
  { path: '', component: TrainerListComponent }, 
  { path: 'trainers', loadChildren: () => import('./trainer/trainer.module').then(m => m.TrainerModule)},
  { path: 'trainer/:id', component: TrainerDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
