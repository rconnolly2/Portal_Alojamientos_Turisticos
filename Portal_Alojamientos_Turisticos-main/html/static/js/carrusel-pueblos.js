function siguiente_pueblo() {
    const carousel = document.getElementById('carousel');
    const firstItem = carousel.firstElementChild;

    // Apply the animation class
    carousel.classList.add('slide-animation');

    // Remove the animation class after the animation ends
    setTimeout(() => {
      carousel.appendChild(firstItem);
      carousel.classList.remove('slide-animation');
    }, 400);
   

    
  };