import { NotificationAppPage } from './app.po';

describe('notification-app App', function() {
  let page: NotificationAppPage;

  beforeEach(() => {
    page = new NotificationAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
