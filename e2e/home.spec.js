describe('home screen', function() {
  it('should show a welcome message', function() {
    browser.get('http://localhost:8080/');

    var welcome = element(by.id('welcome-message'));
    expect(welcome.getText()).toEqual('Welcome, Leanne Graham!');
  });
});