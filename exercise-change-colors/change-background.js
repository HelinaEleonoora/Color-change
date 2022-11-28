(function (document) {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('button');
    const input = document.querySelector('#bgColor');

    function changeBackground() {
      document.body.style.backgroundColor = input.value;
    }

    button.addEventListener('click', changeBackground);
  });

}(document));
