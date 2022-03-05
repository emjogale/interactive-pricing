# Frontend Mentor - Interactive pricing component

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-card-t0m8PIyY8).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Here are the different page view ranges and the corresponding monthly price totals:

- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month

If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.

### Screenshot

![](./images/screenshot.png)

### Links

- Solution URL: [github.com/emjogale/maker-landing-page](https://github.com/emjogale/interactive-pricing)
- Live Site URL: [https://interactive-pricing-gr8tpwpyp-emjogale.vercel.app](https://interactive-pricing-gr8tpwpyp-emjogale.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

- creating a custom range slider. This was a big challenge and required a lot of googling and reading around the topic.
- [Here is a codepen I created while working on the slider design](https://codepen.io/emjogale/pen/yLPVYXv)
- that layouts can look VERY different on different screens. This made me completely rethink the layout I had gone for.
- Not to have more than one label for a switch - Grace Snow pointed this out to me and kindly sent a link to one of her projects which gave an example of an accessible toggle
- How to change the properties of a psuedo element using CSS custom properties. I needed to work out how to do this in order to change the colour of the toggle-switch if the discount is applied

### Continued development

- how to refactor the Javascript, as I think it is quite clumsy at the moment
- how to make the slider responsive - if used with a screen reader it should give a custom value to tel the user how many pageviews equate to the different prices
- finish up layout corrections having added in accessible toggle

### Useful resources

- [Creating A Custom Range Input That Looks Consistent Across All Browsers](https://www.smashingmagazine.com/2021/12/create-custom-range-input-consistent-browsers/?utm_source=CSS-Weekly&utm_campaign=Issue-490&utm_medium=email#comments-create-custom-range-input-consistent-browsers) this is an excellent resource which clearly explains the steps required to style a custom slider for a consistent cross-browser result
- [Accessible toggle example by Grace Snow](https://www.frontendmentor.io/solutions/accessible-toggle-in-html-css-and-js-with-explanatory-notes-Z6gD3qfGl)
- [How to Change Look & Feel of Pseudo Elements using JavaScript and CSS Custom Properties](https://blog.shhdharmen.me/how-to-change-look-and-feel-of-pseudo-elements-using-javascript-and-css-custom-properties)

## Author

- Frontend Mentor - [@emjogale](https://www.frontendmentor.io/profile/emjogale)
- Twitter - [@emmagale2635](https://www.twitter.com/emmagale2635)
