import { formatDateToISOString } from './formatDateToISOString'

export function getDateFromWeekDay(weekDay: number) {
	const today = new Date()
	const timeZone = today.getTimezoneOffset() / 60
	today.setHours(today.getHours() - timeZone)

	const additionalDay = weekDay - today.getDay()

	const date = new Date(today)
	date.setDate(new Date().getDate() + additionalDay)

	return formatDateToISOString(date)
}