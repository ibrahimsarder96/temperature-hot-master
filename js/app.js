let API_KEY = `3d806d02199db103c36bf9f5e3f2fe94`

let searchTemperature = () => {
  const city = document.getElementById('city-name').value.toLowerCase();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  fetch (url)
  .then(res => res.json())
  .then(data => displayTemperature(data))
}
const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
  if(!temperature.name){
    alert('No found result');
    return;
  }
  setInnerText('city', temperature.name);
  setInnerText('temperature', temperature.main.temp);
  setInnerText('condition', temperature.weather[0].main);
  //--set display img icon
  const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const imgIcon = document.getElementById('img-icon');
  imgIcon.setAttribute('src', url);
  console.log(temperature)
}