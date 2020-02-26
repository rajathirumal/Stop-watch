window.addEventListener("load", () => {
  const session_display = document.getElementById("session-display");
  const time_display = document.getElementById("time-display");
  const start_btn = document.getElementById("start-btn");
  const reset_btn = document.getElementById("reset-btn");
  var stop_reset;

  function start_countdown(time) {
    time = time.split(":");
    var min = time[0];
    var sec = time[1];

    stop_reset = setInterval(() => {
      if (sec == 0) {
        min -= 1;
        sec = 60;
      }
      sec -= 1;

      if (time == "0:00") {
        time_display.innerHTML = " ";
        session_display.style.fontWeight = "bold";
        session_display.innerHTML = "Session end";
        if (session_display.textContent === "Session end")
          clearInterval(stop_reset);
        return;
      }

      if (min.toString().length < 2) {
        time = min + ":" + sec;
      }

      if (sec.toString().length < 2) {
        time = min + ":0" + sec;
      }

      if (min == 0 && sec < 11) {
        if (sec % 2 == 0) time_display.style.color = "red";
        else time_display.style.color = "green";
      }

      //   console.log(time, typeof time);
      time_display.innerHTML = time;
    }, 1000);
  }

  start_btn.addEventListener("click", () => {
    time_display.style.color = "black";
    start_countdown("2:00");
    // console.log("start-btn");
  });

  reset_btn.addEventListener("click", () => {
    time_display.innerHTML = "2:00";
    time_display.style.color = session_display.style.color = "black";
    session_display.innerHTML = "Session ends in ";
    clearInterval(stop_reset);
    // console.log("reset-btn");
  });
});
