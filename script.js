
// Minimal JS for smooth scrolling (if links are added) and simple front-end interactivity
document.addEventListener('DOMContentLoaded', function(){
  // Add smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
  });
});
