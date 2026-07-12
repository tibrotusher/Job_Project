// updatetimedate
function updateTimeDate() {
  const now = new Date();
  const element = (document.getElementById('time-date').innerText =
    now.toLocaleString());
}
setInterval(updateTimeDate, 1000);
