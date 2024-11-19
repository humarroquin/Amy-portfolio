# Frontend Mentor - Single-page design portfolio solution

This is a solution to the [Single-page design portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-design-portfolio-2MMhyhfKVo).

![Design preview for the Single-page design portfolio coding challenge](./preview.jpg)

## Table of contents

- [Overview](#overview)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### Built with

- HTML
- Vanilla CSS
- Vanilla JS
- Desktop-first workflow

### What I learned

I learned how to find the index of the middle image in the slider container and place it in the center of the container when the page loads.

```js
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
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [How To Create Image Gallery In JavaScript | Horizontal Scrolling Using JavaScript](https://www.youtube.com/watch?v=gzXyRa7jwk4) - This video helped me gain a better understanding of how to create a simple slider. I didn't use all the ideas from the video but focused mainly on moving the slider container to the right and left when the buttons were clicked.
