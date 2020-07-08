import { Injectable } from '@angular/core';
import { TemplatesModel } from '../constants/template.constants';

@Injectable({
  providedIn: 'root'
})
export class StyleTemplateService {

  private styles: TemplatesModel = {};

  constructor() {
  }

  loadStyles(templates: TemplatesModel) {
    this.styles = templates;
  }

  getStyleTemplateByTemplateName(templateName: string): Object {
    return typeof this.styles[templateName] !== 'undefined' ? this.styles[templateName].style : {};
  }
}
