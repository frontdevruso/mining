import noUiSlider from "nouislider";

const rsDiameter = document.querySelector(".rs-Diameter");
const inputDiameterSliderFirst = document.querySelector(".input-diameter--first");
const inputDiameterSliderSecond = document.querySelector(".input-diameter--second");
const inputDiameterSliderLimitMin = document.querySelector(".range-slider--diameter .range-slider__limits .min");
const inputDiameterSliderLimitMax = document.querySelector(".range-slider--diameter .range-slider__limits .max");

const inputsDiameterSlider = [inputDiameterSliderFirst, inputDiameterSliderSecond];

if (rsDiameter) {
  noUiSlider.create(rsDiameter, {
    start: [1.2, 6],
    connect: true,
    step: 0.1,
    margin: 0.5,
    range: {
      min: [1.2],
      max: [6]
    }
  });
  
  rsDiameter.noUiSlider.on("update", function(values, handle) {
    inputsDiameterSlider[handle].value = values[handle];
  
    function setSliderHandle(i, value) {
      let r = [null, null];
      r[i] = value;
      rsDiameter.noUiSlider.set(r);
    }
  
    inputsDiameterSlider.forEach(function(input, handle) {
      input.addEventListener("change", function() {setSliderHandle(handle, this.value)});
    });
  });

  let rgx = /(?=\B(?:\d{3})+(?!\d))/g;
  inputsDiameterSlider.forEach(function(input) {input.value = ""});
  inputDiameterSliderLimitMin.innerHTML = Number(rsDiameter.noUiSlider.get()[0]).toFixed(1).toString().replace( rgx, ' ' ).replace('.', ',');
  inputDiameterSliderLimitMax.innerHTML = Number(rsDiameter.noUiSlider.get()[1]).toFixed(1).toString().replace( rgx, ' ' ).replace('.', ',');
}