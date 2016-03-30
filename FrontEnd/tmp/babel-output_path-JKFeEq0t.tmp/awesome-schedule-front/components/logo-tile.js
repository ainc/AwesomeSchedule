define('awesome-schedule-front/components/logo-tile', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    logoTile: 'logoTileWrapper',
    weekTile: 'weekTileWrapper',
    getDate: function getDate() {
      $.ajax({
        type: "POST",
        url: "/api/gimmieDatDate"
      }).done(function (value) {
        //Server returns a value and the client-side code displays it
        // Blaaaaah
      });
    }
  });
});