let slider = document.getElementById("slider");
let pageviews = document.querySelector(".page-views span");
let amount = document.querySelector("span.dollars");
let discount = document.getElementById("discount");
let views;
let num = 16;
console.log(amount);

// function to see if discount checkbox is checked/unchecked and if so apply/remove discount
function checkDiscount() {
	if (discount.checked) {
		if (num == 8 || num == 12 || num == 16 || num == 24 || num == 36) {
			num = (num * 75) / 100;
		}
	} else {
		if (num == 6 || num == 9 || num == 12 || num == 18 || num == 27) {
			num += num / 3;
		}
	}
	amount.textContent = `${num}.00`;
}
// display correct page views and price dependant on slider position
slider.oninput = calculatePageViews;
function calculatePageViews(e) {
	let sliderPosition = e.target.value;

	if (sliderPosition == 0) {
		views = "10K";
		num = 8;
	} else if (sliderPosition == 1) {
		views = "50K";
		num = 12.0;
	} else if (sliderPosition == 2) {
		views = "100K";
		num = 16.0;
	} else if (sliderPosition == 3) {
		views = "500K";
		num = 24.0;
	} else {
		views = "1M";
		num = 36.0;
	}
	checkDiscount();
	pageviews.textContent = views;
	amount.textContent = `${num}.00`;
}

// calculate 25% discount when monthly billing is checked
discount.addEventListener("click", checkDiscount);

//filling the range with color when thumb is moved
slider.addEventListener("input", function () {
	let x = slider.value;
	let percent = x * 25;
	let color = `linear-gradient(90deg, hsl(174, 76%, 80%) 0% ${percent}%, rgb(234, 238, 251) ${percent}% 100%)`;
	slider.style.background = color;
});
