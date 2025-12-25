function updateTime()
{
    let a = new Date();
    console.log(a);
    document.getElementById("time").textContent = a.toLocaleTimeString();
}
  setInterval (updateTime, 1000);
  updateTime();