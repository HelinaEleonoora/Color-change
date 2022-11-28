(function (document) {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const inputBgColorPage = document.querySelector('#bgColorPage');
    const inputColorHeading = document.querySelector('#colorHeading');

    inputBgColorPage.addEventListener('input', function () {
      bgColorPage = document.querySelector('output[for="bgColorPage"]').innerText = this.value;
      document.body.style.backgroundColor = bgColorPage;
    });

    inputColorHeading.addEventListener('input', function () {
      colorHeading = document.querySelector('output[for="colorHeading"]').innerText = this.value;
      document.querySelector('h1').style.color = colorHeading;
    });
  });

}(document));
