import { WorkspacePage } from './app.po';

describe('workspace App', function() {
  let page: WorkspacePage;

  beforeEach(() => {
    page = new WorkspacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
