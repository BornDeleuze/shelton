import EmberRouter from '@ember/routing/router';
import config from 'shelton/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('meristem', { path: '/' });
  this.route('about');
  this.route('contact');
  this.route('work');
});
