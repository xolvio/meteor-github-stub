# github-fake
A fake for use in testing Meteor apps. Fakes the oauth calls amongst other APIs.

##Usage:

If you are using GitHub authentication, add this package like this:

`meteor add xolvio:github-fake`

Your app will no longer authenticate with GitHub in development mode and will authenticate with
a fake user even if you do not have an internet connection. This package does not affect production
as it is a `debugOnly` package.

This package is an example of how to use
[xolvio:http-interceptor](https://github.com/xolvio/meteor-http-interceptor) to test your app.

