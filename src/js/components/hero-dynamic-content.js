import axios from "axios";
import { Datepicker, DateRangePicker } from "vanillajs-datepicker";

// datepicker global settings
(function () {
	Datepicker.locales.en = {
		days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
		daysShort: ["Вск", "Пон", "Втр", "Ср", "Чт", "Птн", "Сбт"],
		daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
		months: [
			"Январь",
			"Февраль",
			"Март",
			"Апрель",
			"Май",
			"Июнь",
			"Июль",
			"Август",
			"Сентябрь",
			"Октябрь",
			"Ноябрь",
			"Декабрь",
		],
		monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"],
		today: "Сегодня",
		clear: "Очистить",
		titleFormat: "MM yy",
		format: "dd.mm.yyyy",
		weekStart: 0,
	};
})();

const heroList = document.querySelector(".hero__list");

const dashboardTemplate = `
	<div class="hero__container-vacancies">
		<div class="hero__vacancies">
			<h4 class="hero__title-vacancies">Должности</h4>
			<svg
				class="hero__icon-vacancy"
				xmlns="http://www.w3.org/2000/svg"
				width="21"
				height="18"
				viewBox="0 0 21 18"
				fill="none"
			>
				<path
					d="M11.366 17.5C10.9811 18.1667 10.0189 18.1667 9.63398 17.5L0.54071 1.75C0.155809 1.08333 0.636934 0.249998 1.40673 0.249998L19.5933 0.25C20.3631 0.25 20.8442 1.08333 20.4593 1.75L11.366 17.5Z"
					fill="#142647"
				/>
			</svg>
			<ul class="list-reset hero__list-vacancies">
				<li class="hero__item-vacancy hero__item-vacancy-active" data-vacancy="Менеджер по продажам">
					<span class="hero__text-vacancy">Менеджер по продажам</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="19"
						height="19"
						viewBox="0 0 19 19"
						class="hero__icon-mark"
						fill="none"
					>
						<path
							d="M13.623 0C16.8435 0 19 2.261 19 5.624V13.3864C19 16.739 16.8435 19 13.623 19H5.3865C2.166 19 0 16.739 0 13.3864V5.624C0 2.261 2.166 0 5.3865 0H13.623ZM13.471 6.65C13.148 6.327 12.616 6.327 12.293 6.65L8.3695 10.5735L6.707 8.911C6.384 8.588 5.852 8.588 5.529 8.911C5.206 9.234 5.206 9.7565 5.529 10.089L7.79 12.3405C7.9515 12.502 8.1605 12.578 8.3695 12.578C8.588 12.578 8.797 12.502 8.9585 12.3405L13.471 7.828C13.794 7.505 13.794 6.9825 13.471 6.65Z"
							fill="#126797"
						/>
					</svg>
				</li>
				<li class="hero__item-vacancy" data-vacancy="Проектный менеджер">
					<span class="hero__text-vacancy">Проектный менеджер</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="19"
						height="19"
						viewBox="0 0 19 19"
						class="hero__icon-mark"
						fill="none"
					>
						<path
							d="M13.623 0C16.8435 0 19 2.261 19 5.624V13.3864C19 16.739 16.8435 19 13.623 19H5.3865C2.166 19 0 16.739 0 13.3864V5.624C0 2.261 2.166 0 5.3865 0H13.623ZM13.471 6.65C13.148 6.327 12.616 6.327 12.293 6.65L8.3695 10.5735L6.707 8.911C6.384 8.588 5.852 8.588 5.529 8.911C5.206 9.234 5.206 9.7565 5.529 10.089L7.79 12.3405C7.9515 12.502 8.1605 12.578 8.3695 12.578C8.588 12.578 8.797 12.502 8.9585 12.3405L13.471 7.828C13.794 7.505 13.794 6.9825 13.471 6.65Z"
							fill="#126797"
						/>
					</svg>
				</li>
				<li class="hero__item-vacancy" data-vacancy="Маркетолог">
					<span class="hero__text-vacancy">Маркетолог</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="19"
						height="19"
						viewBox="0 0 19 19"
						class="hero__icon-mark"
						fill="none"
					>
						<path
							d="M13.623 0C16.8435 0 19 2.261 19 5.624V13.3864C19 16.739 16.8435 19 13.623 19H5.3865C2.166 19 0 16.739 0 13.3864V5.624C0 2.261 2.166 0 5.3865 0H13.623ZM13.471 6.65C13.148 6.327 12.616 6.327 12.293 6.65L8.3695 10.5735L6.707 8.911C6.384 8.588 5.852 8.588 5.529 8.911C5.206 9.234 5.206 9.7565 5.529 10.089L7.79 12.3405C7.9515 12.502 8.1605 12.578 8.3695 12.578C8.588 12.578 8.797 12.502 8.9585 12.3405L13.471 7.828C13.794 7.505 13.794 6.9825 13.471 6.65Z"
							fill="#126797"
						/>
					</svg>
				</li>
				<li class="hero__item-vacancy" data-vacancy="HR специалист">
					<span class="hero__text-vacancy">HR специалист</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="19"
						height="19"
						viewBox="0 0 19 19"
						class="hero__icon-mark"
						fill="none"
					>
						<path
							d="M13.623 0C16.8435 0 19 2.261 19 5.624V13.3864C19 16.739 16.8435 19 13.623 19H5.3865C2.166 19 0 16.739 0 13.3864V5.624C0 2.261 2.166 0 5.3865 0H13.623ZM13.471 6.65C13.148 6.327 12.616 6.327 12.293 6.65L8.3695 10.5735L6.707 8.911C6.384 8.588 5.852 8.588 5.529 8.911C5.206 9.234 5.206 9.7565 5.529 10.089L7.79 12.3405C7.9515 12.502 8.1605 12.578 8.3695 12.578C8.588 12.578 8.797 12.502 8.9585 12.3405L13.471 7.828C13.794 7.505 13.794 6.9825 13.471 6.65Z"
							fill="#126797"
						/>
					</svg>
				</li>
			</ul>
		</div>
	</div>
	<div class="hero__container-item">
		<div class="hero__item-inner">
			<div class="hero__candidates">
				<div class="hero__row">
					<h2 class="hero__title-candidates hero__title-candidates-new"></h2>
					<h4 class="hero__subtitle">новых кандидатов</h4>
				</div>
				<div class="hero__row">
					<h2 class="hero__title-candidates hero__title-candidates-center">
						<span class="hero__title-candidates-active"></span
						><span class="hero__title-candidates-all"></span>
					</h2>
					<h4 class="hero__subtitle">активных кандидатов</h4>
				</div>
			</div>
			<div class="hero__age">
				<h2 class="hero__title-graph">
					<span class="hero__title-graph-value hero__title-graph-value-age"></span
					><span class="hero__title-graph-countable"></span>
				</h2>
				<h4 class="hero__subtitle hero__subtitle-graph">средний возраст</h4>
				<div class="hero__graph"></div>
			</div>
			<div class="hero__salary">
				<h2 class="hero__title-graph">
					<span class="hero__title-graph-value hero__title-graph-value-salary"></span>тыс.
				</h2>
				<h4 class="hero__subtitle hero__subtitle-graph">ожидания по ЗП</h4>
				<div class="hero__graph"></div>
			</div>
		</div>
		<div class="hero__interview">
			<div class="hero__period" id="date_period">
				<input
					class="hero__input-text hero__input-text-start"
					type="text"
					id="start"
					name="start"
					readonly
				/>
				<span class="hero__text-dash"></span>
				<input
					class="hero__input-text hero__input-text-end"
					type="text"
					id="end"
					name="end"
					readonly
				/>
			</div>
			<h3 class="hero__title-interview"></h3>
			<h4 class="hero__subtitle hero__subtitle-interview">собеседования назначено</h4>
			<button class="btn-reset hero__button-remove">Удалить</button>
		</div>
	</div>
`;

function updateContent(
	dashboardId,
	ageData,
	salaryData,
	avgAge,
	avgSalary,
	activeCandidates,
	activeCandidatesAl,
	commitedMeetings
) {
	const dashboard = document.getElementById(dashboardId);
	const ageGraph = dashboard.querySelector(".hero__age .hero__graph");
	const salaryGraph = dashboard.querySelector(".hero__salary .hero__graph");
	const newCandidatesEl = dashboard.querySelector(".hero__title-candidates-new");
	const activeCandidatesEl = dashboard.querySelector(".hero__title-candidates-active");
	const activeCandidatesAllEl = dashboard.querySelector(".hero__title-candidates-all");
	const ageValueEL = dashboard.querySelector(".hero__title-graph-value-age");
	const ageValueCountableEL = dashboard.querySelector(".hero__title-graph-countable");
	const salaryValueEl = dashboard.querySelector(".hero__title-graph-value-salary");
	const interviewsEl = dashboard.querySelector(".hero__title-interview");

	ageValueEL.innerHTML = avgAge;
	ageValueCountableEL.innerHTML = declOfNum(avgAge, ["лет", "года", "лет"]);
	salaryValueEl.innerHTML = Math.round(avgSalary / 1000);
	newCandidatesEl.innerHTML = "+ " + calcSum(Object.values(ageData));
	activeCandidatesEl.innerHTML = activeCandidates;
	activeCandidatesAllEl.innerHTML = "/" + activeCandidatesAl;
	interviewsEl.innerHTML = commitedMeetings;
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
	let twoBiggest = findTwoBiggest(Object.values(data));
	let objValuesSum = calcSum(Object.values(data));
	graphContainer.innerHTML = [];
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
			if (!twoBiggest.includes(repeated)) {
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

function generateUniqueId() {
	return Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36);
}

function drawNewDashboard() {
	let newDashboard = document.createElement("li");
	newDashboard.classList = "hero__item hero__dashboard";
	newDashboard.innerHTML = dashboardTemplate;
	let dashboardId = generateUniqueId();
	newDashboard.setAttribute("id", dashboardId);
	newDashboard.querySelector(".hero__button-remove").addEventListener("click", () => {
		document.getElementById(dashboardId).remove();
	});
	const periodContainer = newDashboard.querySelector(".hero__period");
	let dates = configureDatePicker(periodContainer);
	configureVacanciesList(newDashboard);
	heroList.appendChild(newDashboard);

	if (document.querySelectorAll(".hero__dashboard").length <= 1) {
		getAnalyticsData(dashboardId, { dates: [dates.startDate, dates.endDate] });
	}
}

function configureDatePicker(periodContainer) {
	const rangepicker = new DateRangePicker(periodContainer, {
		autohide: true,
		format: "dd.mm.yyyy",
	});
	let d = new Date();
	let dates = {
		startDate: d.setMonth(d.getMonth() - 1),
		endDate: Date.now(),
	};

	rangepicker.setDates(dates.startDate, dates.endDate);

	dates.startDate = rangepicker.getDates("dd.mm.yyyy")[0];
	dates.endDate = rangepicker.getDates("dd.mm.yyyy")[1];

	const startInput = periodContainer.querySelector(".hero__input-text-start");
	const endInput = periodContainer.querySelector(".hero__input-text-end");
	startInput.addEventListener("changeDate", () => {
		if (rangepicker.getDates("dd.mm.yyyy")[0] !== dates.startDate) {
			dates.startDate = rangepicker.getDates("dd.mm.yyyy")[0];
			getAnalyticsData(periodContainer.closest(".hero__dashboard").getAttribute("id"), {
				dates: rangepicker.getDates("dd.mm.yyyy"),
			});
		}
	});
	endInput.addEventListener("changeDate", () => {
		if (rangepicker.getDates("dd.mm.yyyy")[1] !== dates.endDate) {
			dates.endDate = rangepicker.getDates("dd.mm.yyyy")[1];
			getAnalyticsData(periodContainer.closest(".hero__dashboard").getAttribute("id"), {
				dates: rangepicker.getDates("dd.mm.yyyy"),
			});
		}
	});
	return dates;
}

function configureVacanciesList(dashboard) {
	const vacanciesBtns = dashboard.querySelectorAll(".hero__vacancies");
	vacanciesBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			btn.classList.toggle("hero__vacancies-opened");
		});
	});

	const vacanciesList = dashboard.querySelector(".hero__list-vacancies");
	vacanciesList.addEventListener("click", (event) => {
		event.stopPropagation();
	});

	const vacanciesItems = dashboard.querySelectorAll(".hero__item-vacancy");
	vacanciesItems.forEach((btn) => {
		btn.addEventListener("click", (event) => {
			event.stopPropagation();
			btn.classList.toggle("hero__item-vacancy-active");
		});
	});
}

const minusButton = document.querySelector(".hero__button-minus");
minusButton.addEventListener("click", () => {
	let dashboards = document.querySelectorAll(".hero__dashboard");
	dashboards[dashboards.length - 1].remove();
});

const plusButton = document.querySelector(".hero__button-plus");
plusButton.addEventListener("click", () => {
	drawNewDashboard();
});

function getAnalyticsData(dashboardId, requestPayload) {
	let vacanciesElems = document.getElementById(dashboardId).querySelectorAll(".hero__item-vacancy-active");
	let vacanciesArr = [];
	vacanciesElems.forEach((vacancy) => {
		vacanciesArr.push(vacancy.getAttribute("data-vacancy"));
	});
	axios
		.post("http://localhost:3000/analyticsData", {
			startDate: requestPayload.dates[0],
			endDate: requestPayload.dates[1],
			vacancies: vacanciesArr,
		})
		.then((r) => {
			updateContent(
				dashboardId,
				r.data.ageData,
				r.data.salaryData,
				r.data.avgAge,
				r.data.avgSalary,
				r.data.activeCandidates,
				r.data.activeCandidatesAll,
				r.data.commitedMeetings
			);
		})
		.catch((e) => {
			console.log(e);
		});
}

function findTwoBiggest(myArray) {
	return myArray.sort((a, b) => b - a).slice(0, 2);
}

function hideBefore(dashboard) {
	dashboard.querySelector(".hero__container-item").classList.add("hero__container-item-hidden");
}

drawNewDashboard();
