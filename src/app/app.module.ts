import { HttpClientModule } from '@angular/common/http';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from "@angular/elements";
import { BrowserModule } from '@angular/platform-browser';
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
// import { TrustedBrandModule } from '../trusted-brand/trusted-brand.module';
// import { TrustedBrandComponent } from '../trusted-brand/components/trusted-brand.component';
import { SearchbarModule } from './modules/searchbar/searchbar.module';
import { SearchbarComponent } from './modules/searchbar/searchbar/searchbar.component';
import { reducers } from './store/reducers';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SearchbarModule,
    StoreModule.forRoot(reducers),
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent, SearchbarComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const calendar = createCustomElement(SearchbarComponent, { injector: this.injector });
    if (!customElements.get('hf-calendar')) {
      customElements.define('hf-calendar', calendar);
    }

    const calendarApp = createCustomElement(AppComponent, { injector: this.injector });
    if (!customElements.get('hf-calendar-app')) {
      customElements.define('hf-calendar-app', calendarApp);
    }

  }
}
