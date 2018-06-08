$(function() {

  let activePopover = null;

  // calendar

  $('#calendar').fullCalendar({

    defaultView: 'agendaWeek',
    height: 'parent',
    nowIndicator: true,
    navLinks: true,
    allDayText: "",

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

    eventRender: function(event, element) {
      $(element).click(function(e) {
        e.stopPropagation();

        if (activePopover === element) {
          return;
        } else if (activePopover) {
          activePopover.popover('hide');
        }

        let url = '/events/' + event.course + '/' + event.id;

        $.get({url, cache: false}, function(html) {
          activePopover = element;
          element.popover({
            title: event.title,
            content: html,
            trigger: 'manual',
            html: true,
          }).popover('show');
        });
      });
    },

    viewRender: function() {
      if (activePopover) {
        $('.popover').remove();
      }
    },

  });

  // calendar filters

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

  // datepicker

  $('#datepicker').datepicker({
    todayHighlight: true,
    maxViewMode: 0,
  }).on('changeDate', function(event) {
    if (event.date) {
      $('#calendar').fullCalendar('gotoDate', event.date.toISOString());
    }
  });

  $('.datepicker-switch').addClass('today');

  $(document).click(function(event) {
    if (activePopover && !$(event.target).parents('.popover').length) {
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

  let query = 'courses=' + courseFilters.join(',') +
      '&events=' + eventFilters.join(',');

  // Get event data from server
  $.get('/events?' + query, function(data) {
    calendar.fullCalendar('removeEventSources');
    data.forEach(function(source) {
      source.events.forEach(value => {
        value.color = source.color;
        value.course = source.id;
      });
      calendar.fullCalendar('addEventSource', source.events);
    });
  });
}