import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createItem(id){
			console.log("Item Created!");
			var self = this;
			var title = self.get('title');
			var body = self.get('body');
			var task = this.store.peekRecord('task', 1);

			var newItem = this.store.createRecord('item', {
				title: title,
				body: body,
				task_id: task
			});
			
			newItem.save();

			this.setProperties({
				title: ''
			});
		}
	}
});
