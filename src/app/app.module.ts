import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ClubModule } from '../infrastructure/configuration/club/club.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UiModule } from '../ui/ui.module';
import { DateTimeRepository } from '../infrastructure/datetime/repositories/dateTime.repository';
import { DateFnsAdapter } from '../infrastructure/datetime/adapters/dateFns.adapter';
import {
  NbButtonModule,
  NbLayoutModule,
  NbSidebarModule,
  NbThemeModule,
} from '@nebular/theme';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NbThemeModule.forRoot({ name: 'mtun' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    UiModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
    ClubModule,
  ],
  providers: [{ provide: DateTimeRepository, useClass: DateFnsAdapter }],
  bootstrap: [AppComponent],
})
export class AppModule {}
