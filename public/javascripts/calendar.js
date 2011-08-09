$(document).ready(function() {
    $('#calendar').fullCalendar({
	editable: true,
	events: "/data",
	dayClick: function(date, allDay, jsEvent, view) {
	    $('#dialog ul').empty();
	    $.each($('#calendar').fullCalendar('clientEvents', function(event) {
		if((event.start.valueOf() == date.valueOf()) ||
		   (event.start <= date && event.end >= date)) {
		    return true;
		}
		return false;
	    }),function (){
		$('#dialog ul').append(
		    $('<li></li>').text(this.title)
		);
	    });
	    $('#dialog').dialog('open');
	},
	eventClick: function(event){
	    alert(event.title);
	}
//						      eventDrop: function(event, delta) {
//							  alert(event.title + ' was moved ' + delta + ' days\n' +
//								'(should probably update your database)');
//						      },
			
//						      loading: function(bool) {
//							  if (bool) $('#loading').show();
//							  else $('#loading').hide();
//						      }
						  });
});

$(function (){
      $('#dialog').dialog({
	  width: 200,
	  height: 300,
	  autoOpen: false,
	  modal: true
      })
});