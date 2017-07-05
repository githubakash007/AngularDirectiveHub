import { AngularDirectiveHubPage } from './app.po';

describe('angular-directive-hub App', () => {
  let page: AngularDirectiveHubPage;

  beforeEach(() => {
    page = new AngularDirectiveHubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
