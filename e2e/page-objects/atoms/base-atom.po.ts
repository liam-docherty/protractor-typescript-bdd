import { ElementFinder } from 'protractor';

export class BaseAtom {

  protected async hasClass(element: ElementFinder, className: string): Promise<boolean> {
    return await element.getAttribute('class').then(classes => classes.split(' ').indexOf(className) !== -1);
  }

}
