var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

fetch('https://bacit.info/hwr/20210926134925-47352fbdecddd9a754001f4e4abbf40f.json')
    .then(response => response.json())
    .then(data => console.log(data));
