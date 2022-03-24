import noUiSlider from "nouislider";

const rsDepth = document.querySelector(".rs-Depth");
const inputDepthSliderFirst = document.querySelector(".input-depth--first");
const inputDepthSliderSecond = document.querySelector(".input-depth--second");
const inputDepthSliderLimitMin = document.querySelector(".range-slider--depth .range-slider__limits .min");
const inputDepthSliderLimitMax = document.querySelector(".range-slider--depth .range-slider__limits .max");

const inputsDepthSlider = [inputDepthSliderFirst, inputDepthSliderSecond];

if (rsDepth) {
  noUiSlider.create(rsDepth, {
    start: [60, 1600],
    connect: true,
    step: 5,
    margin: 200,
    range: {
      min: [60],
      max: [1600]
    }
  });
  
  rsDepth.noUiSlider.on("update", function(values, handle) {
    inputsDepthSlider[handle].value = Math.round(values[handle]);
  
    function setSliderHandle(i, value) {
      var r = [null, null];
      r[i] = value;
      rsDepth.noUiSlider.set(r);
    }
  
    inputsDepthSlider.forEach(function(input, handle) {
      input.addEventListener("change", function() {setSliderHandle(handle, this.value)});
    });
  });
  
  inputsDepthSlider.forEach(function(input) {input.value = ""});
  inputDepthSliderLimitMin.innerHTML = Number(Math.round(rsDepth.noUiSlider.get()[0]));
  inputDepthSliderLimitMax.innerHTML = Number(Math.round(rsDepth.noUiSlider.get()[1]));
}