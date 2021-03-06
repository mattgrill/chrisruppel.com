// JS is able to start executing.
;document.documentElement.classList.add('js');

// Listen for fonts
var oswaldLight = new FontFaceObserver('Oswald', {weight: 300});
var oswaldRegular = new FontFaceObserver('Oswald', {weight: 400});

window.Promise.all([oswaldLight.check(), oswaldRegular.check()])
  .then(function () {
    document.documentElement.classList.remove('wf-loading');
    document.documentElement.classList.add('wf-oswald');
  });
