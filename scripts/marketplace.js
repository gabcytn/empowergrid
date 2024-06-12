window.addEventListener('scroll', () => {
    let container = document.querySelectorAll('.fade-in');
  
    for (let i of container){
        let wHeight = window.innerHeight;
        let revealTop = i.getBoundingClientRect().top;
        let revealPoint = 180;
  
        if (revealTop < wHeight - revealPoint){
            i.classList.add('reveals')
        }
    }
  })