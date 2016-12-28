import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tasks', function() {
    this.route('task', { path: ':task_id'}, function() {
      this.route('items', function() {
        this.route('item', { path: ':item_id'}, function() {
          this.route('comments');
        });
      });
    });
  });
});

export default Router;
