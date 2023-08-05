const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

function months(config?: { count: number; section?: any; startsOn: number }) {
	let count = config?.count || 12;
	const section = config?.section;
	const values = [];

	if (config?.startsOn) {
		count += config.startsOn;
	}

	for (let i = config?.startsOn || 0; i < count; ++i) {
		let value = MONTHS[Math.ceil(i) % 12];
		values.push(value.substring(0, section));
	}

	return values;
}

const getMonthText = (month: number) => {
	return MONTHS[month];
};

export default {
	months,
	getMonthText
};
