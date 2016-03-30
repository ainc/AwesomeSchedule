define("awesome-schedule-front/controllers/calendar", ["exports"], function (exports) {
    exports["default"] = Ember.Controller.extend({
        wrapper: 'calendarWrapper'
    });

    $.ajax({
        type: "POST",
        url: "/api/test"
    });
});