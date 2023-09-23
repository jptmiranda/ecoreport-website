import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';

const MONTHS = [
	'Janeiro',
	'Fevereiro',
	'Março',
	'Abril',
	'Maio',
	'Junho',
	'Julho',
	'Agosto',
	'Setembro',
	'Outubro',
	'Novembro',
	'Dezembro'
];

const months = (config?: { count: number; section?: any; startsOn: number }) => {
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
};

export const getMonthText = (month: number) => {
	return MONTHS[month];
};

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};
