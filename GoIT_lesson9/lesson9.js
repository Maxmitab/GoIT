function initMap() {
    var centerLatLng = new google.maps.LatLng(56.2928515, 43.7866641);
    var mapOptions = {
        center: centerLatLng,
        zoom: 8
    };
 
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
    // Добавляем маркер
    var marker = new google.maps.Marker({
        position: centerLatLng,              // Координаты расположения маркера. В данном случае координаты нашего маркера совпадают с центром карты, но разумеется нам никто не мешает создать отдельную переменную и туда поместить другие координаты.
        map: map,                            // Карта на которую нужно добавить маркер
        title: "Текст всплывающей подсказки" // (Необязательно) Текст выводимый в момент наведения на маркер
    });
}
google.maps.event.addDomListener(window, "load", initMap);