const net = new brain.NeuralNetwork();
const data = [
  { input: { r: 0, g: 0, b: 0 }, output: [1] },
  { input: { r: 1, g: 1, b: 1 }, output: [0] },
  {
    input: {
      r: 0.06027757024543989,
      g: 0.6854099296535978,
      b: 0.7968115116870629,
    },
    output: [1],
  },
  {
    input: {
      r: 0.06393938736202798,
      g: 0.7661314157392085,
      b: 0.28626580406803637,
    },
    output: [0],
  },
  {
    input: {
      r: 0.3095985363035547,
      g: 0.5125864172326873,
      b: 0.3677361693018475,
    },
    output: [1],
  },
  {
    input: {
      r: 0.751742495881363,
      g: 0.9575374626740882,
      b: 0.9541577999783326,
    },
    output: [0],
  },
  {
    input: {
      r: 0.571904131696648,
      g: 0.45370245820603605,
      b: 0.8799756798179188,
    },
    output: [0],
  },
  {
    input: {
      r: 0.07844680615849331,
      g: 0.5873766406678795,
      b: 0.07710296751977719,
    },
    output: [1],
  },
  {
    input: {
      r: 0.052434627227370356,
      g: 0.8130686054720595,
      b: 0.002369387923306654,
    },
    output: [0],
  },
  { input: { r: 0, g: 0, b: 0 }, output: [1] },
  { input: { r: 1, g: 1, b: 1 }, output: [0] },
  {
    input: {
      r: 0.06027757024543989,
      g: 0.6854099296535978,
      b: 0.7968115116870629,
    },
    output: [1],
  },
  {
    input: {
      r: 0.06393938736202798,
      g: 0.7661314157392085,
      b: 0.28626580406803637,
    },
    output: [0],
  },
  {
    input: {
      r: 0.3095985363035547,
      g: 0.5125864172326873,
      b: 0.3677361693018475,
    },
    output: [1],
  },
  {
    input: {
      r: 0.751742495881363,
      g: 0.9575374626740882,
      b: 0.9541577999783326,
    },
    output: [0],
  },
  {
    input: {
      r: 0.571904131696648,
      g: 0.45370245820603605,
      b: 0.8799756798179188,
    },
    output: [0],
  },
  {
    input: {
      r: 0.07844680615849331,
      g: 0.5873766406678795,
      b: 0.07710296751977719,
    },
    output: [1],
  },
  {
    input: {
      r: 0.052434627227370356,
      g: 0.8130686054720595,
      b: 0.002369387923306654,
    },
    output: [0],
  },
  {
    input: {
      r: 0.8147242558649828,
      g: 0.8959574639200738,
      b: 0.21819377042838473,
    },
    output: [0],
  },
  {
    input: {
      r: 0.4123538411633365,
      g: 0.5143246491814035,
      b: 0.45327980732067474,
    },
    output: [1],
  },
  {
    input: {
      r: 0.7560689701588581,
      g: 0.12842817111124227,
      b: 0.48351676513748587,
    },
    output: [1],
  },
  {
    input: {
      r: 0.9774907385500655,
      g: 0.03810257102716452,
      b: 0.19600507701551462,
    },
    output: [1],
  },
  {
    input: {
      r: 0.3692362780751468,
      g: 0.03636829829429011,
      b: 0.5037617493645021,
    },
    output: [1],
  },
  {
    input: {
      r: 0.8161870656914456,
      g: 0.2071415656250215,
      b: 0.7493757429219572,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6282586054983839,
      g: 0.8269109487063759,
      b: 0.11098628446825787,
    },
    output: [0],
  },
  {
    input: {
      r: 0.6370459109546149,
      g: 0.16284735072425405,
      b: 0.9443666317518644,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6738932677371223,
      g: 0.032426396871302776,
      b: 0.07979794621619796,
    },
    output: [1],
  },
  {
    input: {
      r: 0.7285143911710645,
      g: 0.22013587797263856,
      b: 0.7661198703664804,
    },
    output: [1],
  },
  {
    input: {
      r: 0.7175406570504295,
      g: 0.7534014821540225,
      b: 0.9177561540209302,
    },
    output: [0],
  },
  {
    input: {
      r: 0.273514559568665,
      g: 0.992738047067854,
      b: 0.7586087556945431,
    },
    output: [0],
  },
];

net.train(data);

const colorEl = document.getElementById("color");
const guessEl = document.getElementById("guess");
const whiteButton = document.getElementById("white-button");
const blackButton = document.getElementById("black-button");
const printButton = document.getElementById("print-button");

let color;
setRandomColor();

function print() {
  console.log(JSON.stringify(data));
}

printButton.addEventListener("click", print);

whiteButton.addEventListener("click", () => {
  chooseColor(1);
});

blackButton.addEventListener("click", () => {
  chooseColor(0);
});

function chooseColor(value) {
  data.push({
    input: color,
    output: [value],
  });
  setRandomColor();
}

function setRandomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random(),
  };
  const guess = net.run(color)[0];
  guessEl.style.color = guess > 0.5 ? "#FFF" : "#000";
  colorEl.style.backgroundColor = `rgba(${color.r * 255}, ${color.g * 255}, ${
    color.b * 255
  })`;
}
