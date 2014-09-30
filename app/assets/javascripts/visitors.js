$(document).ready(function() {
    $('#test').select2({
        minimumInputLength: 3,
        placeholder: 'Search',
        ajax: {
            url: "https://api.spotify.com/v1/search",
            dataType: 'json',
            quietMillis: 100,
            data: function(q, page) {
                return {
                    type: "track",
                    q: q
                };
            },
            results: function(data, page ) {
                return { results: data.tracks.items }
            }
        },
        formatResult: function(item) { 
            return "<div class='select2-user-result'>" + item.artists.name + " - " + item.name + "</div>"; 
        },
        formatSelection: function(item) { 
            return item.artists.name + " - " + item.name; 
        },
        initSelection : function (element) {
            var elementText = $(element).attr('data-init-text');
        }
    });

    var test = $('#test')
    $(test).change(function() {
      var data = $(test).select2('data')
      var name = data.name;
      var uri = data.uri;

      console.log(data);
      console.log(name);
      console.log(uri);

      widget_html = '<iframe src="https://embed.spotify.com/?uri=' + uri + '" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'


      $('#selected-song').html(widget_html);
      $('#save-cta').toggleClass('hide');

      $('form#new_track #track_name').val(name);
      $('form#new_track #track_uri').val(uri);

      return false;

    });
});
