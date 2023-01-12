import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // canActivate: [ProtectedGuard],
    loadChildren: () =>
      import('./app-shell/app-shell.module').then(m => m.AppShellModule)
  },
  // {
  //   path: 'auth',
  //   // canActivate: [PublicGuard],
  //   loadChildren: ()=> import('')
  // },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
