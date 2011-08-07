$(document).ready(function() {
		      $('#calendar').fullCalendar({
						      editable: true,
						      events: "/data",
						      dayClick: function (date, allDay, jsEvent, view){
							  $('#dialog').dialog('open');
						      },
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