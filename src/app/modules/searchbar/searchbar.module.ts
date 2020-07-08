import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { GuestsComponent } from '../../component/guests/guests.component';
// import { TranslateWrapperService } from '../../services/translateWrapper.service';
import { DateRangePickerComponent } from '../../component/date-range-picker/date-range-picker.component';
// import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StyleAggregatorPipe } from '../../pipes/style-aggregator.pipe';
import { ClickService } from '../../services/click.service';
// import { InterfaceElementsModule } from '../interface-elements/interface-elements.module';
// import { TranslateModule } from '@ngx-translate/core';
// import { Dictionary } from '../../../store/repositories/dictionary/dictionary';

// import { ScoreMatchingService } from '../../../services/utils/score-matching.service';
// import { CheckButtonModule } from '../check-button/check-button.module';
// import { StyleAggregatorPipe } from '../../booking-engine/pipes/style-aggregator.pipe';

@NgModule({
  imports: [
    CommonModule,
    // InterfaceElementsModule,
    // TranslateModule,
    FormsModule,
    ReactiveFormsModule
    // CheckButtonModule,

  ],
  exports: [
    SearchbarComponent,

  ],
  declarations: [
    SearchbarComponent,
    GuestsComponent,
    DateRangePickerComponent
  ],
  providers: [
    // Dictionary,
    // TranslateWrapperService,
    // ScoreMatchingService,
    StyleAggregatorPipe,
    ClickService,
    // TranslateService
  ]
})
export class SearchbarModule {
}
