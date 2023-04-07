jQuery(document).ready(function() {
    jQuery('.skillbar').each(function() {
      jQuery(this).find('.skillbar-bar').animate({
        width: jQuery(this).attr('data-percent')
      }, 4000);
    });
  });

  let i = 0;
  let target = document.getElementById("anim-typewriter");
  let text = target.innerHTML;
  text = text.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&sol;/g, "/");
  console.log(text);
  target.innerHTML = ' ';
  let speed = 75; //speed duration of effect in millisec

  typeWriter(); //to call function
  function typeWriter() {
      if (i < text.length) {
          target.innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
      }
  }

  var vsOpts = {
    slides: document.querySelectorAll('.v-slide'),
    list: document.querySelector('.v-slides'),
    duration: 0.3,
    lineHeight: 50
  }
  
  var vSlide = gsap.timeline({
    paused: true,
    repeat: -1
  });
  
  vsOpts.slides.forEach(function(slide, i) {
    // Create a label
    let label = "slide" + i;
    vSlide.add(label);
    
    // Move the whole word
    if(i > 0) {
      vSlide.to(vsOpts.list, {
        duration: vsOpts.duration,
        y: i * -1 * vsOpts.lineHeight
      }, label);
  
      // Move each letter
      let letters = new SplitText(slide, {type:"chars"}).chars;
      vSlide.from(letters, {
        duration: vsOpts.duration,
        y: 50,
        stagger: vsOpts.duration / 10
      }, label);
      
      // Add some blank space before the next animation
      vSlide.to(letters, {
        duration: vsOpts.duration,
        y: -50,
        stagger: vsOpts.duration / 10
      }, "+=1");
    }
  })

vSlide.play();

const carouselItems = document.querySelector('.carousel-items');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

prevButton.addEventListener('click', () => {
  carouselItems.scrollBy({
    left: -250,
    behavior: 'smooth'
  });
});

nextButton.addEventListener('click', () => {
  carouselItems.scrollBy({
    left: 250,
    behavior: 'smooth'
  });
});
