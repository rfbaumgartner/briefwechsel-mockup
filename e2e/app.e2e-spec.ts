import { BriefwechselMockupPage } from './app.po';

describe('briefwechsel-mockup App', () => {
  let page: BriefwechselMockupPage;

  beforeEach(() => {
    page = new BriefwechselMockupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
