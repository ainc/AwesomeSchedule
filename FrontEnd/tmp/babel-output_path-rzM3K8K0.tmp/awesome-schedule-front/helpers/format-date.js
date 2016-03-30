define('awesome-schedule-front/helpers/format-date', ['exports', 'ember'], function (exports, _ember) {
  exports.formatDate = formatDate;

  var moment = require('moment');

  function formatDate(params /*, hash*/) {
    return params;
  }

  _ember['default'].Handlebars.registerBoundHelper('currentDate', function () {

    return moment().format('LL');
  });
  exports['default'] = _ember['default'].Helper.helper(formatDate);
});