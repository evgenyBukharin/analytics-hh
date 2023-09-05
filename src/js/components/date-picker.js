import { Datepicker, DateRangePicker } from "vanillajs-datepicker";

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

const elem = document.querySelector(".hero__period");
const rangepicker = new DateRangePicker(elem, {
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

const startInput = document.querySelector(".hero__input-text-start");
const endInput = document.querySelector(".hero__input-text-end");
startInput.addEventListener("changeDate", () => {
	if (rangepicker.getDates("dd.mm.yyyy")[0] !== dates.startDate) {
		console.log("new date " + rangepicker.getDates("dd.mm.yyyy")[0], "old date = " + dates.startDate);
		console.log("new start date");
	}
});
endInput.addEventListener("changeDate", () => {
	if (rangepicker.getDates("dd.mm.yyyy")[1] !== dates.endDate) {
		console.log("new date " + rangepicker.getDates("dd.mm.yyyy")[1], "old date = " + dates.endDate);
		console.log("new end date");
	}
});
