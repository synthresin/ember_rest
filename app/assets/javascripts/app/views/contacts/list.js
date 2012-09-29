SynthApp.ListContactsView = Ember.View.extend({
	templateName: 'app/templates/contacts/list',
	contactsBinding: 'SynthApp.contactsController',

	refreshListing: function() {
		SynthApp.contactsController.findAll();
	}
});