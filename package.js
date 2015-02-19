Package.describe({
  name: "xolvio:github-fake",
  summary: "A fake for use in testing. Fakes the oauth calls amongst other APIs.",
  version: "0.0.4",
  git: "https://github.com/xolvio/meteor-github-fake",
  debugOnly: true
});

Package.on_use(function (api) {
  api.use('github', ['client', 'server']);
  api.use(['xolvio:http-interceptor@0.4.0'], ['server']);
  api.use(['iron:router@1.0.6'], ['server']);
  api.add_files('oauth-fake-client.js', 'client');
  api.add_files('github-fake.js', ['server']);
});