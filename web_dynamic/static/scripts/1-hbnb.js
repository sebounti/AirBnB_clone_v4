$(document).ready(function() {
  var amenityIDs = {};

  $('input[type="checkbox"]').change(function() {
      var amenityID = $(this).data('id');

      if ($(this).prop('checked')) {
          amenityIDs[amenityID] = true;
      } else {
          delete amenityIDs[amenityID];
      }

      var selectedAmenities = Object.keys(amenityIDs).join(', ');
      $('.amenities h4').text(selectedAmenities);
  });
});
