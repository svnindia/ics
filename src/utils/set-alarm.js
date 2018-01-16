import setDate from './set-date'

function setDuration ({
  weeks,
  days,
  hours,
  minutes,
  seconds
}) {
  let formattedString = 'P'
  formattedString += weeks ? `${weeks}W` : ''
  formattedString += days ? `${days}D` : ''
  formattedString += 'T'
  formattedString += hours ? `${hours}H` : ''
  formattedString += minutes ? `${minutes}M` : ''
  formattedString += seconds ? `${seconds}S` : ''

  return formattedString
}

export default function setAlarm(attributes = {}) {
  const {
    action,
    repeat,
    description,
    duration,
    attachType,
    attach,
    trigger,
    summary
  } = attributes

  let formattedString = 'BEGIN:VALARM\r\n'
  formattedString += `ACTION:${action}\r\n`
  formattedString += repeat ? `REPEAT:${repeat}\r\n` : ''
  formattedString += description ? `DESCRIPTION:${description}\r\n` : ''
  formattedString += duration ? `DURATION:${setDuration(duration)}\r\n` : ''
  formattedString += attach ? `ATTACH;${attachType}:${attach}\r\n` : ''
  formattedString += trigger ? `TRIGGER;VALUE=DATE-TIME:${setDate(trigger)}\r\n` : ''
  formattedString += summary ? `SUMMARY:${summary}\r\n` : ''
  formattedString += 'END:VALARM\r\n'

  return formattedString
}

// Example:  A duration of 15 days, 5 hours, and 20 seconds would be:

// P15DT5H0M20S

// A duration of 7 weeks would be:

// P7W