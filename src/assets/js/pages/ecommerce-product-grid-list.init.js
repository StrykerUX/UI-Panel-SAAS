const slider = document.getElementById("product-price-range");
if (slider) {
  noUiSlider.create(slider, {
    start: [200, 1299],
    step: 1,
    margin: 0,
    connect: !0,
    behaviour: "tap-drag",
    range: { min: 0, max: 1500 },
    format: wNumb({ decimals: 0, prefix: "$ " }),
  });
  const a = document.getElementById("minCost"),
    b = document.getElementById("maxCost");
  slider.noUiSlider.on("update", function (e, n) {
    n ? (b.value = e[n]) : (a.value = e[n]);
  }),
    a.addEventListener("change", function () {
      slider.noUiSlider.set([null, this.value]);
    }),
    b.addEventListener("change", function () {
      slider.noUiSlider.set([null, this.value]);
    });
}
