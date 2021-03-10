var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [12.934967899695316, 100.88260057763695], // Москва
        zoom: 15
    }, {
        searchControlProvider: 'yandex#search'
    }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [12.935159335769468, 100.88260089653483]
            },
            // Свойства.
            properties: {
                // Контент метки.
                hintContent: 'Hotel Hilton'
        },

          });
        myMap.geoObjects
          .add(myGeoObject)
        };
