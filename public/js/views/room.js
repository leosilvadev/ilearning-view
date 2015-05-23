define(
		['backbone', 
		 'views/chat-room', 
		 'views/tab-room',
		 'collections/chat-messages',
		 'models/chat-message',
		 'utils/template',
		 'utils/events',
		 'managers/tab-rooms',
		 'managers/chat-rooms'], 
		
		function(Backbone, ChatRoomView, TabRoomView, ChatMessageList, ChatMessage, template, events, TabRoomsManager, ChatRoomsManager){
	
	var RoomView = Backbone.View.extend({
		
		className: 'row room',
				
		events: {
			'click .btn-enter-room': 'enter'
		},
		
		enter: function(event){
			if ( ChatRoomsManager.isNotLoggedIn(this.model)) {
				$('.opened-room').removeClass('active-room');
				
				events.trigger('room:chat-new', this.model, function(){
					$('#modal-rooms').modal('hide');
				});
				
				events.trigger('room:tab-new', this.model, function(){
					$('#modal-rooms').modal('hide');
				});
			} else {
				$('#modal-rooms').modal('hide');
			}
		},
		
		destroy: function(){
			this.remove();
		},
		
		render: function(){
			template.html('_room', this.$el, this.model.attributes);
		}
		
	});
	
	return RoomView;

});