# github-stub
A stub for use in testing Meteor apps. Stubs the oauth calls and allows you to fake stub more.

##Usage:

If you are using GitHub authentication, add this package like this:

`meteor add xolvio:github-stub`

Your app will no longer authenticate with GitHub in development mode and will authenticate with
a fake user even if you do not have an internet connection. This package does not affect production
as it is a `debugOnly` package.

This package is an example of how to use
[xolvio:http-interceptor](https://github.com/xolvio/meteor-http-interceptor) to test your app.

