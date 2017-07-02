import { SystemMessagesPage } from './app.po';

describe('system-messages App', () => {
  let page: SystemMessagesPage;

  beforeEach(() => {
    page = new SystemMessagesPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
