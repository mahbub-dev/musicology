const btn = document.getElementById("btn");
var isfalse = true;
const showHide = () => {
	const toggleLink = document.getElementById("nav_link");
	if (isfalse === true) {
		isfalse = false;
		toggleLink.style.display = "block";
	} else {
		isfalse = true;
		toggleLink.style.display = "none";
	}
};
console.log(isfalse);
$(window).scroll(function () {
	var a = 0;
	var oTop = $("#counter").offset().top - window.innerHeight;
	console.log($("#counter").offset().top);
	if (a == 0 && $(window).scrollTop() > oTop) {
		$(".counter").each(function () {
			var $this = $(this),
				countTo = $this.attr("data-count");
			$({
				countNum: $this.text(),
			}).animate(
				{
					countNum: countTo,
				},

				{
					duration: 2000,
					easing: "swing",
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
						//alert('finished');
					},
				}
			);
		});
		a = 1;
	}
});

//   for subscribe button
const subscribe = document.getElementById("subscribe");
const input = document.getElementById("email");
const output = document.getElementById("eventText");

subscribe.addEventListener("click", (d) => {
	d.preventDefault();
	if (input.value == "".replace(/\s+/g, "").trim()) {
		alert("Please enter your email");
	} else {
		function displayText() {
			output.style.display = "block";
			output.innerHTML = "Thanks For Subscribing Us";
			input.value = "";
		}
		setTimeout(displayText, 1000);
		function displayNone() {
			output.style.display = "none";
		}
		setTimeout(displayNone, 4000);
	}
});

// rendering component
const data1 = [
	{
		title: "AMERICA",
		desc: "Lorem ipsum dolor sit amet.consecteturadipicing elit",
		image: "./assets/img/2nd.png",
	},
	{
		title: "ASIA",
		desc: "Lorem ipsum dolor sit amet.consecteturadipicing elit",
		image: "./assets/img/3rd.png",
	},
	{
		title: "Australia",
		desc: "Lorem ipsum dolor sit amet.consecteturadipicing elit",
		image: "./assets/img/4th.png",
	},
];

const displayData = (data) => {
	const cpr = document.getElementById("cpr");
	let component = "";
	data.map((item) => {
		return (component += `<div class="img1">
			<img src=${item.image} alt="img" width="100%" />
			 <div class="text"> <h2>${item.title}</h2> 
			 <p>${item.desc}</p>
		</div>
	</div>`);
	});
	cpr.innerHTML = component;
};
displayData(data1);

// pricing data rendering
const data2 = [
	{
		plan: "Basic",
		price: "$150.00",
	},
	{
		plan: "PROFESIONAL",
		price: "$200.00",
	},
	{
		plan: "ULTIMATE",
		price: "$250.00",
	},
];
const priceDisplay = (data) => {
	const crp = document.getElementById("price");
	let price = "";
	data.map((item) => {
		return (price =
			price +
			`<div class="pricing">
						<img src="./assets/img/iconp.png" alt="price" />
						<h3>${item.plan}</h3>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Nesciunt, doloremque?
						</p>
						<button>${item.price}</button>
					</div>
		`);
	});
	crp.innerHTML = price;
};
priceDisplay(data2);
