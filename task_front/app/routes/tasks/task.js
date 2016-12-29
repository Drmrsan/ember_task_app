import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		return this.store.findRecord('task', params.task_id);
	},

	// renderTemplate(){
	// 	this.render('tasks.task.items.item', {
	// 		into: 'task',
	// 		outlet: 'taskItemBody'
	// 	})
	// },

	actions: {
		editTask(){
			console.log("Task Edited!");
		},

		deleteTask(){
			console.log("Task Deleted!");
		}
	}
});
