HttpInterceptor = Package['xolvio:http-interceptor'].HttpInterceptor;
HttpInterceptor.registerInterceptor('https://github.com', Meteor.absoluteUrl('fake.github.com'));
HttpInterceptor.registerInterceptor('https://api.github.com', Meteor.absoluteUrl('fake.api.github.com'));


Router.route('fake.github.com/login/oauth/authorize', function () {
  var parameters = _fixIronRouterBug(this.request.query);
  this.response.writeHead(301, {'Location': parameters.redirect_uri + '?code=a1b2c3d4e5f6g7h8i9j0' + '&state=' + parameters.state});
  this.response.end();
}, {where: 'server'});

Router.route('fake.github.com/login/oauth/access_token', function () {
  var cannedResponse = {
    'access_token': 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0',
    'token_type': 'bearer',
    'scope': 'user:email'
  };
  this.response.writeHead(200, {
    'Content-Type': 'application/json; charset=utf-8'
  });
  this.response.end(JSON.stringify(cannedResponse));
}, {where: 'server'});

Router.route('fake.api.github.com/user', function () {
  var cannedResponse = {
    'login': 'gh_fake',
    'id': 1234567,
    'name': 'Github Fake',
    'email': 'github-fake@example.com'
  };
  this.response.writeHead(200, {
    'Content-Type': 'application/json; charset=utf-8'
  });
  this.response.end(JSON.stringify(cannedResponse));
}, {where: 'server'});


_fixIronRouterBug = function (query) {
  if (query.redirect_uri.indexOf('http:/') !== -1 && query.redirect_uri.indexOf('http://') === -1) {
    query.redirect_uri = query.redirect_uri.replace('http:/', 'http://')
  }
  return query;
};