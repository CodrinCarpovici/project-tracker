
function showTime() {
  let currentTimeAndDate = dayjs();
  $('#current-time').text(currentTimeAndDate.format('DD MMM YYYY [at] hh:mm:ss A'));
}
showTime();

setInterval(showTime, 1000);