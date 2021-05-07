export function calculateAge() {
  const today = new Date();

  const birthday = {
    day: 13,
    month: 3,
    year: 1998,
  };

  const currentDate = {
    day: today.getDate(),
    month: today.getMonth(),
    year: today.getFullYear(),
  };

  const isAprilAndPastCurrentDate =
    currentDate.month === birthday.month && currentDate.day >= birthday.day;

  const isPastCurrentDateMonth = currentDate.month > birthday.month;

  const isPastBirthday = isAprilAndPastCurrentDate || isPastCurrentDateMonth;

  const yearDiff = currentDate.year - birthday.year;

  if (isPastBirthday) {
    return yearDiff;
  }
  return yearDiff - 1;
}
