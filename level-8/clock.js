// DESCRIPTION:
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
  //   hours must be less than 24, seconds less than 60 and minutes less than 60 to run this test
  if (s < 60 && m < 60 && h < 24) {
    s = s * 1000;
    m = m * 60000;
    h = h * 3600000;

    return s + m + h;
  }
}
