function tick() {
  var m = moment();
  document.getElementById("date_area").textContent = m.format("YYYY/MM/DD(ddd)");
  document.getElementById("time_area_h").textContent = m.format("HH");
  document.getElementById("time_area_m").textContent = m.format("mm");
  document.getElementById("time_area_s").textContent = m.format("ss");
  setTimeout(tick, 100);
}
if(navigator.userAgent.indexOf("Nintendo 3DS") > 0){
  document.body.className = "threeDS";
  window.scrollTo({
    top: screen.height,
    left: 28,
    behavior: "smooth"
  });
}
tick();
