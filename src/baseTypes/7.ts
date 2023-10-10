/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

const enum DaysOfWeek {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7,
}

function isWeekend(day: DaysOfWeek): boolean {
  if (day === 6 || 7) {
    return false;
  } else {
    return true;
  }
}

console.log(isWeekend(DaysOfWeek.Saturday));
