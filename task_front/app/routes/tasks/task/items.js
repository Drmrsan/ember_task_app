import Ember from 'ember';

export default Ember.Route.extend({

	actions: {
		createItem(){
			console.log("Item Created!");
			var self = this;
			var title = self.get('title');

			var newItem = this.store.createRecord('item', {
				title: title
			});
			
			newItem.save();

			this.setProperties({
				title: ''
			});
		}
	}
});
