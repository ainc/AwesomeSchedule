define('awesome-schedule-front/helpers/contact-info', ['exports', 'ember'], function (exports, _ember) {
  exports.contactInfo = contactInfo;

  function contactInfo(params /*, hash*/) {
    return params;
  }

  exports['default'] = _ember['default'].Helper.helper(contactInfo);

  _ember['default'].Handlebars.helper('contactInfo', function (person) {
    return person.get('firstName') + ' ' + person.get('lastName') + '\n' + person.get('address') + '\n' + person.get('email') + '\n' + person.get('phoneNumber');
  });
});