function initMap() {
    // The location of Uluru
    const uluru = { lat: 50.064839, lng: 14.407820 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;

  $(document).ready(function(){
      $('.slider').slick(
        {
          arrows:true,
          dots:true,
        }
      );
  });
  