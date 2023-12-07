
//  function showing the current Date and time 
function showTime() {
  let currentTimeAndDate = dayjs();
  $('#current-time').text(currentTimeAndDate.format('DD MMM YYYY [at] hh:mm:ss A'));
}
showTime();

// updating the time every second 
setInterval(showTime, 1000);