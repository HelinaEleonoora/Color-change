(function (document) {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const inputBgColorPage = document.querySelector('#bgColorPage');
    const inputColorPage = document.querySelector('#colorPage');

    inputBgColorPage.addEventListener('input', function () {
      let bgColorPage = document.querySelector('output[for="bgColorPage"]').innerText = this.value;
      document.body.style.backgroundColor = bgColorPage;
    });

    inputColorPage.addEventListener('input', function () {
      let colorPage = document.querySelector('output[for="colorPage"]').innerText = this.value;
      document.body.style.color = colorPage;
    });
  });

}(document));
