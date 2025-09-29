(function(){
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#primary-nav');
  if(!navToggle || !nav){
    return;
  }
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', (!isOpen).toString());
    nav.classList.toggle('is-open', !isOpen);
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if(nav.classList.contains('is-open')){
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded','false');
      }
    });
  });
})();

