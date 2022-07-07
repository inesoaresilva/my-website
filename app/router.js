import EmberRouter from '@ember/routing/router';
import config from 'my-website/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about-me');
  this.route('contact');
  this.route('blog');
  this.route('posts', function () {
    this.route('post', { path: ':id' });
    this.route('category', { path: 'category/:category' });
  });
});
