$(function() {

  let activePopover = null;

  // initialize calendar with options
  $('#calendar').fullCalendar({

    defaultView: 'agendaWeek',
    height: 'parent',
    nowIndicator: true,
    navLinks: true,

    customButtons: {
      myToday: {
        text: 'today',
        click: function() {
          $('#calendar').fullCalendar('today');
          $('#datepicker').datepicker('clearDates');
        },
      },
    },

    header: {
      left: 'myToday prev,next title',
      right: 'agendaDay,agendaWeek,month',
    },

    eventSources: [],

    eventRender: function(event, element) {
      $(element).click(function(e) {
        e.stopPropagation();

        if (activePopover === element) {
          return;
        } else if (activePopover) {
          activePopover.popover('hide');
        }

        activePopover = element;

        //TODO: Create popover
        element.popover({
          title: event.title,
          content: $('#lecture-popover-content'),
          trigger: 'manual',
        }).popover('show');
      });
    },

    viewRender: function() {
      if (activePopover) {
        $('.popover').remove();
      }
    },

  });

  $('#course-filters').on('show.bs.collapse', function() {
    $('#courses-chevron').
        removeClass('fa-chevron-left').
        addClass('fa-chevron-down');
  }).on('hide.bs.collapse', function() {
    $('#courses-chevron').
        removeClass('fa-chevron-down').
        addClass('fa-chevron-left');
  });

  $('#event-filters').on('show.bs.collapse', function() {
    $('#event-chevron').
        removeClass('fa-chevron-left').
        addClass('fa-chevron-down');
  }).on('hide.bs.collapse', function() {
    $('#event-chevron').
        removeClass('fa-chevron-down').
        addClass('fa-chevron-left');
  });

  $('#datepicker').datepicker({
    todayHighlight: true,
    maxViewMode: 0,
  }).on('changeDate', function(event) {
    if (event.date) {
      $('#calendar').fullCalendar('gotoDate', event.date.toISOString());
      $(this).find('.active').removeClass(('active'));
    }
  });

  $('.datepicker-switch').addClass('today');

  $(document).click(function(event) {
    if (activePopover && !$(event.target).parent().hasClass('popover')) {
      activePopover.popover('hide');
      activePopover = null;
    }
  });

  updateEvents();

});


function updateEvents() {
  let calendar = $('#calendar');

  let courseFilters = $.map($('#course-filters input:checked'), val => val.value);
  let eventFilters = $.map($('#event-filters input:checked'), val => val.value);

  calendar.fullCalendar('removeEventSources');

  $.each(courseFilters, function(i, val) {
    calendar.fullCalendar('addEventSource', function(start, end, timezone, callback) {
      for (i in events) {
        let source = events[i];

        if (source.id === val) {

          // Reduce events to filtered ones
          let filtered = source.events.reduce((filtered, event) => {
            if (eventFilters.includes(event.type)) {
              event.color = source.color;
              filtered.push(event);
            }
            return filtered;
          }, []);

          callback(filtered);
        }
      }
    });
  });
}