import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppShellRoutingModule } from './app-shell-routing.module';
import { AppShellComponent } from './components/app-shell/app-shell.component';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';

@NgModule({
  declarations: [
    AppShellComponent,
    ContentWrapperComponent
  ],
  imports: [CommonModule, AppShellRoutingModule]
})
export class AppShellModule {}
