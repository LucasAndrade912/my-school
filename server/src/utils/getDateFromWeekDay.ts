import { formatDateToISOString } from './formatDateToISOString'

export function getDateFromWeekDay(weekDay: number) {
	const today = new Date()
	const additionalDay = weekDay - today.getDay()

	const date = new Date(today)
	date.setDate(new Date().getDate() + additionalDay)

	const timeZone = date.getTimezoneOffset() / 60
	date.setHours(date.getHours() - timeZone)

	return formatDateToISOString(date)
}