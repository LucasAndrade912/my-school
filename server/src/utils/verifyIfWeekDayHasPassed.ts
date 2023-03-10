export function verifyIfWeekDayHasPassed(weekDay: number) {
	const today = new Date().getDay()
	return today > weekDay
}