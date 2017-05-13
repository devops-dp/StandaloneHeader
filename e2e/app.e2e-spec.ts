import { StandaloneHeaderPage } from './app.po';

describe('standalone-header App', () => {
  let page: StandaloneHeaderPage;

  beforeEach(() => {
    page = new StandaloneHeaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
