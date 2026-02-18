document.querySelector('button').addEventListener('click', () => {
  const container = document.querySelector('main');
  const left = document.querySelector('.left');
  const right = document.querySelector('.right');

  container.appendChild(right);
  container.appendChild(left);
});

tinymce.init({
  selector: '.left .mce-container',
});
