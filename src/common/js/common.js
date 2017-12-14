(function(global) {
  function remChange() {
    document.documentElement.style.fontSize = 40 * document.documentElement.clientWidth / 750 + 'px';
  }
  ;
  remChange();
  global.addEventListener('resize', remChange, false);
})(window);
