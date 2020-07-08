import { Pipe, PipeTransform } from '@angular/core';
import { StyleTemplateService } from '../services/style-template.service';


@Pipe({
  name: 'styleAggregator'
})
export class StyleAggregatorPipe implements PipeTransform {

  constructor(
    private styleTemplate: StyleTemplateService
  ) { }

  transform(value: any, switchOn = true, args?: any): any {
    if (switchOn) {
      return this.styleTemplate.getStyleTemplateByTemplateName(value);
    }

    return {};
  }
}
