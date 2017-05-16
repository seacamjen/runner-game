import { RunnerPage } from './app.po';

describe('runner App', () => {
  let page: RunnerPage;

  beforeEach(() => {
    page = new RunnerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
