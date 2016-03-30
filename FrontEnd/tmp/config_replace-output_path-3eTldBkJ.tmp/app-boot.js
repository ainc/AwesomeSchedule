/* jshint ignore:start */

define('awesome-schedule-front/config/environment', ['ember'], function(Ember) {
  var prefix = 'awesome-schedule-front';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("awesome-schedule-front/app")["default"].create({"name":"awesome-schedule-front","version":"0.0.0+8608fd41"});
}

/* jshint ignore:end */
