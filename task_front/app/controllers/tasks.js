import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createTask(){
			var self = this;
			var name = self.get('name');

			var newTask = this.store.createRecord('task', {
				name: name
			});

			newTask.save();

			this.setProperties({
				name: ''
			});
		}
	}
});
