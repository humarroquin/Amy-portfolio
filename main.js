const sliderContainer = document.querySelector('.work__slider');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const images = document.querySelectorAll('.slider-img');

btnNext.addEventListener('click', () => {
  sliderContainer.style.scrollBehavior = 'smooth';
  sliderContainer.scrollLeft += 570;
});

btnPrev.addEventListener('click', () => {
  sliderContainer.style.scrollBehavior = 'smooth';
  sliderContainer.scrollLeft -= 570;
});

// Center the middle image
const centerMiddleImage = () => {
  const middleIndex = Math.floor(images.length / 2);
  const middleImage = images[middleIndex];

  // Calculate position to center the middle image
  const offset =
    middleImage.offsetLeft -
    sliderContainer.clientWidth / 2 +
    middleImage.clientWidth / 2;

  // Set scroll position to the calculated offset
  sliderContainer.scrollLeft = offset;
};

// Call the function once the page loads
window.addEventListener('load', centerMiddleImage);
