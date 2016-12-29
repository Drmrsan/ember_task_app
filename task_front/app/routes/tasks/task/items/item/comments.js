import Ember from 'ember';

export default Ember.Route.extend({
	renderTemplate(){
		this.render('tasks.task.items.item.comments', {
			into: 'tasks',
			outlet: 'commentsTemplate'
		})
	}
});
