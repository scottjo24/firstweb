const code = [38,38,40,40,37,39,37,39,66,65]; // Konami code
let input = [];

window.addEventListener('keydown', e => {
  input.push(e.keyCode);
  if (input.toString().includes(code.toString())) {
    alert('💀 Secret unlocked!');
    document.body.style.background = '#111';
    document.body.style.color = '#0f0';
    input = [];
  }
});
