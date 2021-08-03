const $climate = document.getElementById("climate");
const $consumption = document.getElementById("consumption");

$climate.onclick = () => {
  document.body.style.background =
    "url('https://i1.faceprep.in/prograd-junior/climate-change-bg.png')";
  document.body.style.backgroundSize = "100% 100%";
  $climate.style.backgroundColor = "#2F80ED";
  $consumption.style.backgroundColor = "transparent";
  document.getElementById("frame").src =
    "https://www.theworldcounts.com/embed/challenges/21?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
  document.getElementById("save").innerHTML =
    "That global temperatures are increasing is beyond any doubt. ";
};
$consumption.onclick = () => {
  document.body.style.background =
  "url('https://images.unsplash.com/photo-1473654729523-203e25dfda10?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')";
  document.body.style.backgroundSize = "100% 100%";
  $climate.style.backgroundColor = "transparent";
  $consumption.style.backgroundColor = "#27AE60";
  document.getElementById("save").innerHTML =
    "A whopping 750 billion tons of ice is melting every year due to global warming.";
  document.getElementById("frame").src =
    "https://www.theworldcounts.com/embed/challenges/22?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
};