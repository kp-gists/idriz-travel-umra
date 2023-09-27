export const allMonths = [
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
  'December',
];

export const convertDate = (date: string) => {
  if (!date) return '1/1/2000';

  const input = new Date(date);

  const formattedTravelDate = new Intl.DateTimeFormat('sq-AL', {
    day: 'numeric',
    month: 'long',
  }).format(input);

  return formattedTravelDate;
};
