import { CyclePojectPage } from './app.po';

describe('cycle-poject App', () => {
  let page: CyclePojectPage;

  beforeEach(() => {
    page = new CyclePojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
