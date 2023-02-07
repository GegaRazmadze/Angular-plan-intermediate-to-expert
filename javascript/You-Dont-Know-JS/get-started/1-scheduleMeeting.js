const dayStart = "07:30";
const dayEnd = "17:45";

// ამოხსნა
String.prototype.toSeconds = function () {
  if (!this) return null;
  var hm = this.split(":");
  return +hm[0] * 60 * 60 + +hm[1] * 60;
};

const dayStartTime = dayStart.toSeconds();
const dayEndTime = dayEnd.toSeconds();
function scheduleMeeting(startTime, durationMinutes) {
  const startTimeInDate = startTime.toSeconds();
  const durationSecond = durationMinutes * 60;
  if (
    dayStartTime > startTimeInDate ||
    startTimeInDate > dayEndTime ||
    startTimeInDate + durationSecond > dayEndTime
  ) {
    return console.log(false);
  } else {
    return console.log(true);
  }
}

scheduleMeeting("7:00", 15); // false
scheduleMeeting("07:15", 30); // false
scheduleMeeting("7:30", 30); // true
scheduleMeeting("11:30", 60); // true
scheduleMeeting("17:00", 45); // true
scheduleMeeting("17:30", 30); // false
scheduleMeeting("18:00", 15); // false
