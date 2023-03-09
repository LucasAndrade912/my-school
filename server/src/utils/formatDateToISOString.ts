export function formatDateToISOString(date: Date) {
	const formattedDate = date
	formattedDate.setUTCHours(0, 0, 0, 0)
	return formattedDate.toISOString()
}