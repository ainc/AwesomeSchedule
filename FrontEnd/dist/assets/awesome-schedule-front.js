"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('awesome-schedule-front/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'awesome-schedule-front/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _awesomeScheduleFrontConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _awesomeScheduleFrontConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _awesomeScheduleFrontConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _awesomeScheduleFrontConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('awesome-schedule-front/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'awesome-schedule-front/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _awesomeScheduleFrontConfigEnvironment) {

  var name = _awesomeScheduleFrontConfigEnvironment['default'].APP.name;
  var version = _awesomeScheduleFrontConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('awesome-schedule-front/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('awesome-schedule-front/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('awesome-schedule-front/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'awesome-schedule-front/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _awesomeScheduleFrontConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_awesomeScheduleFrontConfigEnvironment['default'].APP.name, _awesomeScheduleFrontConfigEnvironment['default'].APP.version)
  };
});
define('awesome-schedule-front/initializers/export-application-global', ['exports', 'ember', 'awesome-schedule-front/config/environment'], function (exports, _ember, _awesomeScheduleFrontConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_awesomeScheduleFrontConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _awesomeScheduleFrontConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_awesomeScheduleFrontConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('awesome-schedule-front/router', ['exports', 'ember', 'awesome-schedule-front/config/environment'], function (exports, _ember, _awesomeScheduleFrontConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _awesomeScheduleFrontConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define("awesome-schedule-front/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "awesome-schedule-front/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "id", "title");
        var el2 = dom.createTextNode("Under Development");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [3, 0], [3, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

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
  require("awesome-schedule-front/app")["default"].create({"name":"awesome-schedule-front","version":"0.0.0+ae9a28e4"});
}

/* jshint ignore:end */
//# sourceMappingURL=awesome-schedule-front.map