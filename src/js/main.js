
//email validate ******************************************************************************

new JustValidate('.subscribe', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },

    mail: {
      required: true,
      email: true,
    },
  },

  tooltip: {
    fadeOutTime: 2000 // default value - 5000
},

messages: {

  mail: {
    email: 'Недопустимый формат',
    required: 'Обязательное поле',
  }
},

colorWrong: '#F06666',
});

new JustValidate('.callback__form', {
  rules: {
    name: {
      required: 'Обязательное поле',
      minLength: 'Минимум 2 символа'
    },

    mail: {
      required: true,
      email: true,
    },
  },

  tooltip: {
    fadeOutTime: 2000 // default value - 5000
},

messages: {
  name: {
    required: 'Обязательное поле',
    minLength: 'Минимум 2 символа'
  },


  mail: {
    email: 'Недопустимый формат',
    required: 'Обязательное поле',
  }
},

colorWrong: '#F06666',
});

//TABS projects ******************************************************************************

document.querySelectorAll('.proj-tabs__btn').forEach(function(e) {
  e.addEventListener('click', function(event) {
    const path = event.currentTarget.dataset.path;

    document.querySelectorAll('.proj__wrap').forEach(function(tubsBtn) {
      tubsBtn.classList.remove('proj__wrap--active');
      tubsBtn.classList.add('visually-hidden');
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('proj__wrap--active');
    document.querySelector(`[data-target="${path}"]`).classList.remove('visually-hidden');
  });
});

document.querySelectorAll('.proj-tabs__btn').forEach(function(e) {
  e.addEventListener('click', activate);
 })
 function activate(e) {
   document.querySelector('.proj-tabs__btn--active').classList.remove('proj-tabs__btn--active')
   e.target.classList.add('proj-tabs__btn--active')
  }

//TABS services ******************************************************************************

document.querySelectorAll('.serv-tabs__btn').forEach(function(e) {
  e.addEventListener('click', function(event) {
    const path = event.currentTarget.dataset.path;

    document.querySelectorAll('.serv__switch').forEach(function(tubsBtn2) {
      tubsBtn2.classList.remove('serv__switch--active');
      tubsBtn2.classList.add('visually-hidden');
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('serv__switch--active');
    document.querySelector(`[data-target="${path}"]`).classList.remove('visually-hidden');
  });
});

//popup close btn ******************************************************************************

document.querySelectorAll('.close-btn').forEach(function(e) {
  e.addEventListener('click', function(event) {
    this.closest('.contacts__popup').classList.toggle('is-open');
  });
});

//map ******************************************************************************

// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
  function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
    center: [55.76715,37.6315],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
    zoom: 15
  });

  myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
  myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
  myMap.controls.remove('rulerControl'); // удаляем контрол правил
  myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)


  // Создание геообъекта с типом точка (метка).
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [55.76953456898229,37.63998549999998] // координаты точки
    }
  });

  var myPlacemark = new ymaps.Placemark([55.76953456898229,37.63998549999998], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-mark.svg',
    iconImageSize: [12, 12],
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}
