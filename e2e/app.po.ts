import { browser, by, element } from 'protractor';

export class StandaloneHeaderPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
