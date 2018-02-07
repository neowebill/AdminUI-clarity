import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule'
  },
  {
    path: 'clusters',
    loadChildren: 'app/clusters/clusters.module#ClustersModule'
  },
  {
    path: 'hardware',
    loadChildren: 'app/hardware/hardware.module#HardwareModule'
  },
  {
    path: 'mobile',
    loadChildren: 'app/mobile/mobile.module#MobileModule'
  },
  {
    path: 'users',
    loadChildren: 'app/users/users.module#UsersModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
