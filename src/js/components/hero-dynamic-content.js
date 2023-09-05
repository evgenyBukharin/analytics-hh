import axios from "axios";

const ageGraph = document.querySelector(".hero__age .hero__graph");
const salaryGraph = document.querySelector(".hero__salary .hero__graph");

const newCandidatesEl = document.querySelector(".hero__title-candidates-new");
const activeCandidatesEl = document.querySelector(".hero__title-candidates-active");
const activeCandidatesAllEl = document.querySelector(".hero__title-candidates-all");
const ageValueEL = document.querySelector(".hero__title-graph-value-age");
const ageValueCountableEL = document.querySelector(".hero__title-graph-countable");
const salaryValueEl = document.querySelector(".hero__title-graph-value-salary");
const interviewsEl = document.querySelector(".hero__title-interview");

let ageData = {};
let salaryData = {};
let avgAge = 0;
let avgSalary = 0;
axios
	.get("http://localhost:3000/analyticsData")
	.then((r) => {
		ageData = r.data.ageData;
		salaryData = r.data.salaryData;
		avgAge = r.data.avgAge;
		avgSalary = r.data.avgSalary;
		updateContent();
	})
	.catch((e) => {
		console.log(e);
	});

function updateContent() {
	ageValueEL.innerHTML = avgAge;
	ageValueCountableEL.innerHTML = declOfNum(avgAge, ["лет", "года", "лет"]);
	salaryValueEl.innerHTML = Math.round(avgSalary / 1000);
	newCandidatesEl.innerHTML = "+ " + calcSum(Object.values(ageData));
	activeCandidatesEl.innerHTML = 40;
	activeCandidatesAllEl.innerHTML = "/" + 67;
	interviewsEl.innerHTML = 52;
	drawGraph(ageGraph, ageData, "в возрасте", "лет");
	drawGraph(salaryGraph, salaryData, "зарплата", "тыс");
}

function calcSum(array) {
	let sum = 0;
	array.forEach((value) => {
		sum += value;
	});
	return sum;
}

function drawGraph(graphContainer, data, subtitle, lightSubtitle) {
	let objValuesSum = calcSum(Object.values(data));
	for (const key in data) {
		if (Object.hasOwnProperty.call(data, key)) {
			const repeated = data[key];
			let persentage = calcPersentage(repeated, objValuesSum);
			let column = document.createElement("div");
			column.innerHTML = `
				<div class="hero__bar"></div>
				<span class="hero__text-persentage">${persentage}%</span>
				<div class="hero__container-tooltip">
					<div class="hero__tooltip">
						<div class="hero__container-tooltip-inner">
							<h4 class="hero__title-tooltip">${repeated}</h4>
							<h4 class="hero__subtitle hero__subtitle-tooltip">${declOfNum(repeated, ["кандидат", "кандидата", "кандидатов"])}</h4>
						</div>
						<div class="hero__container-tooltip-transparent">
							<h4 class="hero__title-tooltip  hero__title-tooltip-light">${key}
							${lightSubtitle == "лет" ? declOfNum(key, ["лет", "года", "лет"]) : lightSubtitle}
							</h4>
							<h4 class="hero__subtitle hero__subtitle-tooltip">${subtitle}</h4>
						</div>
					</div>
					<img
						src="./img/tooltip-triangle.svg"
						class="image hero__icon-triangle"
						width="45"
						height="28"
						alt="Треугольник"
					/>
				</div>
			`;
			column.classList = "hero__column";
			column.style.height = persentage + "%";
			if (persentage < 50) {
				column.querySelector(".hero__bar").style.opacity = "0.8";
			}
			column.setAttribute("data-tooltip", key); /* временно */
			graphContainer.appendChild(column);
		}
	}
}

function calcPersentage(value, sum) {
	return Math.round((value * 100) / sum);
}

function declOfNum(n, text_forms) {
	n = Math.abs(n) % 100;
	var n1 = n % 10;
	if (n > 10 && n < 20) {
		return text_forms[2];
	}
	if (n1 > 1 && n1 < 5) {
		return text_forms[1];
	}
	if (n1 == 1) {
		return text_forms[0];
	}
	return text_forms[2];
}
