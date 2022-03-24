import noUiSlider from "nouislider";

const rsPower = document.querySelector(".rs-power");
const inputPowerSlider = [document.querySelector(".input-power")];

if (rsPower) {
  noUiSlider.create(rsPower, {
    start: 20,
    connect: 'lower',
    step: 5,
    range: {
        'min': 250,
        'max': 5250
    }
  });
  
  rsPower.noUiSlider.on('update', function (values, handle) {
    inputPowerSlider[handle].value = Math.round(values[handle]);
  
    function setSliderHandle(i, value) {
      var r = [null, null];
      r[i] = value;
      rsPower.noUiSlider.set(r);
    }
  
    inputPowerSlider.forEach(function(input, handle) {
      input.addEventListener("change", function() {setSliderHandle(handle, this.value)});
    });
  });

  inputPowerSlider.forEach(function(input) {input.value = ""});
}