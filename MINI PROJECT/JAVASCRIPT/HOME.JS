var slideIndex = 1; // Start with the first slide
var interval = 3000; // Interval in milliseconds for automatic slide transition

// Function to transition to the next slide
function nextSlide() {
  slideIndex++;
  if (slideIndex > 5) {
    slideIndex = 1; // Reset to the first slide after the last slide
  }
  document.getElementById('s' + slideIndex).checked = true;
}

// Start the automatic slide show
var slideInterval = setInterval(nextSlide, interval);

// Stop the automatic slide show on hover
var slider = document.getElementById('slider');
slider.addEventListener('mouseover', function() {
  clearInterval(slideInterval);
});

// Resume the automatic slide show on mouseout
slider.addEventListener('mouseout', function() {
  slideInterval = setInterval(nextSlide, interval);
});


        // Using vanilla JavaScript
        document.querySelector('.Content-1').addEventListener('click', function() {
            document.querySelector('.hover-box').style.display = 'block';
            document.querySelector('.hover-box-text').textContent = 'Card content 1 goes here';
        });

        document.querySelector('.Content-2').addEventListener('click', function() {
            document.querySelector('.hover-box').style.display = 'block';
            document.querySelector('.hover-box-text').textContent = 'Card content 2 goes here';
        });

        document.querySelector('.Content-3').addEventListener('click', function() {
            document.querySelector('.hover-box').style.display = 'block';
            document.querySelector('.hover-box-text').textContent = 'Card content 3 goes here';
        });

        document.querySelector('.hover-box-close').addEventListener('click', function() {
            document.querySelector('.hover-box').style.display = 'none';
        });
