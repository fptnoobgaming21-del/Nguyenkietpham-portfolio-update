// Cover-direction switcher and image viewer for the Chói case study.
var stages = [
  ['01 / Portrait-led sleeve', 'A figure at the center.', 'The front cover places a pink-haired figure, with an apple balanced on her head, inside a circle of waves. The back cover turns the same scene into a framed track list.', 'assets/portrait.webp', 'Portrait-led Chói sleeve laid flat: back cover with track list on the left, front cover with a pink-haired figure on the right'],
  ['02 / Landscape-led sleeve', 'The scene as the subject.', 'A red sun rises behind a great wave and cherry blossoms. On the back, the 11 tracks sit in a tall framed panel, flanked by vertical text panels.', 'assets/landscape.webp', 'Landscape-led Chói sleeve laid flat: framed track list on the back, a red sun, great wave and cherry blossoms on the front'],
  ['03 / Record labels', 'The system at its smallest size.', 'Side A lists tracks 1 to 5 and Side B tracks 6 to 11, with the same wave, blossoms, title and vertical panels scaled down to fit around the spindle hole.', 'assets/labels.webp', 'Two circular Chói record labels: Side A on the left with tracks 1 to 5, Side B on the right with tracks 6 to 11'],
  ['04 / Printed vinyl', 'Holding it in your hands.', 'Printed sleeves with records show whether the colors, borders and lettering survive the move from screen to a physical object.', 'assets/collection.webp', 'Both Chói sleeves on a table, each with a black record and matching label']
];
document.querySelectorAll('[data-stage]').forEach(function (b) {
  b.addEventListener('click', function () {
    var s = stages[Number(b.dataset.stage)];
    document.querySelectorAll('[data-stage]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
    document.getElementById('stage-label').textContent = s[0];
    document.getElementById('stage-title').textContent = s[1];
    document.getElementById('stage-copy').textContent = s[2];
    var img = document.getElementById('stage-image');
    img.src = s[3]; img.alt = s[4];
    document.getElementById('stage-zoom').dataset.image = s[3];
  });
});
var dialog = document.getElementById('lightbox');
var lastZoom = null;
document.querySelectorAll('.zoom').forEach(function (b) {
  b.addEventListener('click', function () {
    var big = dialog.querySelector('img');
    big.src = b.dataset.image;
    big.alt = b.querySelector('img').alt;
    lastZoom = b;
    dialog.showModal();
  });
});
dialog.querySelector('.close').addEventListener('click', function () { dialog.close(); });
dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
dialog.addEventListener('close', function () { if (lastZoom) lastZoom.focus(); });
