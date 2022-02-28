let slider = document.getElementById("slider");
let pageviews = document.querySelector(".page-views span");
let amount = document.querySelector("span.dollars");
let discount = document.getElementById("yearly");
let monthly = document.getElementById("monthly");
let toggle = document.querySelector(".radio-switch");
let views;
let num = 16;

// function to see if discount checkbox is checked/unchecked and if so apply/remove discount and change background color
function checkDiscount() {
	if (discount.checked) {
		toggle.style.setProperty("--toggle-background", "#10d5c2");
		if (num == 8 || num == 12 || num == 16 || num == 24 || num == 36) {
			num = (num * 75) / 100;
		}
	} else {
		toggle.style.setProperty("--toggle-background", "#ced7ee");
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

// calculate 25% discount when yearly billing is checked
discount.addEventListener("click", checkDiscount);

// revert to full price if monthly billing is selected
monthly.addEventListener("click", checkDiscount);

//filling the range with color when thumb is moved
slider.addEventListener("input", function () {
	let x = slider.value;
	let percent = x * 25;
	let color = `linear-gradient(90deg, var(--soft-cyan) 0% ${percent}%, var(--light-grayish-blue) ${percent}% 100%)`;
	slider.style.background = color;
});
