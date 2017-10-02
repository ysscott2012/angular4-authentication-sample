import { AuthenticationSamplePage } from './app.po';

describe('authentication-sample App', () => {
  let page: AuthenticationSamplePage;

  beforeEach(() => {
    page = new AuthenticationSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
