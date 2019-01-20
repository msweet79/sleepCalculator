const getSleepHours = day => {
  if (day === 'Sunday') {
    return 9;
  } else if (day === 'Monday') {
    return 8;
  } else if (day === 'Tuesday') {
    return 8;
  } else if (day === 'Wednesday') {
    return 8;
  } else if (day === 'Thursday') {
    return 8;
  } else if (day === 'Friday') {
    return 8;
  } else if (day === 'Saturday') {
    return 1;
  } else {
    console.log('');
  }
}

const getActualSleepHours = () => {
  return getSleepHours('Sunday') + getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday');

}

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep')
  } else if (actualSleepHours > idealSleepHours) {
    let sleepDebt = actualSleepHours - idealSleepHours;
    console.log('You slept ' + sleepDebt + ' hour(s) too much!')
  } else if (actualSleepHours < idealSleepHours) {
    let sleepDebt = idealSleepHours - actualSleepHours;
    console.log('You need to sleep ' + sleepDebt + ' more hour(s).')
  } else {
    console.log('')
  }
}

calculateSleepDebt();
