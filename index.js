const dictionary = {
  hola: "hello",
  de_nada: "you're welcome",
  adiós: "goodbye",
  leche: "milk",
  té: "tea",
  sí: "yes",
  café: "coffee",
  agua: "water",
  café: "coffee",
  hola: "hello",
  azúcar: "sugar",
  gracias: "thank you",
  por_favor: "please",
};

const succecions = {
  yes_or_no: ["Sí", "o", "no"],
  with_sugar_please: ["Con", "azúcar", "por", "favor"],
  youre_welcome_goodbye: ["De", "nada", "adiós"],
  youre_welcome: ["De", "nada"],
  yes: ["Sí"],
  coffee_and_tea_please: ["Café", "y", "té", "por", "favor"],
  with_milk: ["Con", "leche"],
  yes_thank_you: ["Sí", "gracias"],
  water_please: ["Agua", "por", "favor"],
  hello_julia: ["Hola", "Julia"],
  coffee_or_tea: ["Café", "o", "té"],
  tea_please: ["Té", "por", "favor"],
  yes_coffee: ["Sí", "café"],
  yes_water: ["Sí", "agua"],
  coffee_and_tea: ["Café", "y", "té"],
  no_thank_you: ["No", "gracias"],
  milk_or_water: ["Leche", "o", "agua"],
  milk_and_sugar: ["Leche", "y", "azúcar"],
  hello: ["Hola"],
  sugar: ["Azúcar"],
  with_milk_please: ["Con", "leche", "por", "favor"],
  tea_and_coffee: ["Té", "y", "café"],
  coffee: ["Café"],
  no: ["No"],
  with_milk_and_sugar_please: ["Con", "leche", "y", "azúcar", "por", "favor"],
  water: ["Agua"],
  hello_julia: ["Hola", "Julia"],
  tea_or_coffee: ["Té", "o", "café"],
  goodbye: ["Adiós"],
  coffee_with_milk: ["Café", "con", "leche"],
  please: ["Por", "favor"],
  coffe_please: ["Café", "por", "favor"],
  yes_thank_you: ["Sí", "gracias"],
  coffee_please: ["café", "por", "favor"],
  thank_you_goodbye: ["Gracias", "adiós"],
  yes_please: ["Sí", "por", "favor"],
  milk_please: ["Leche", "por", "favor"],
  coffee_with_milk_please: ["Café", "con", "leche", "por", "favor"],
  milk: ["Leche"],
  tea: ["Té"],
};

const responses = {
  thank_you_david: "You're welcome, Emma!",
  thank_you_fernanda: "You're welcome, Maria.",
};

function globalfunction() {
  var recieved = document.querySelector("._21IEC._39MJv._2Hg6H");
  var listpeers = document.querySelectorAll("._2eHne:nth-child(1) div");

  var btns = document.querySelectorAll(
    "[role=radiogroup]  [data-test=challenge-judge-text]"
  );
  var btnsChallenge = document.querySelectorAll(
    "[role=radiogroup]  [data-test=challenge-choice]"
  );

  var iconsound = document.querySelectorAll(".fs-exclude")[1];

  const _columnoptions = () => {
    try {
      let regex = /"([^"]*)"/;
      let frase = document.querySelector("h1").textContent;
      let word = frase.match(regex)[1].replace(" ", "_");
      btns.forEach((btn) => {
        if (btn.textContent === dictionary[word]) {
          btn.click();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const _filloptions = () => {
    try {
      let btnsfill = document.querySelectorAll("._1yW4j button");
      let regex = / /g;
      let regex2 = /[,.'!]/g;
      let dialog = document
        .querySelectorAll("._11rtD > div > span")[1]
        .textContent.replace("?", "")
        .replace(regex, "_")
        .replace(regex2, "")
        .toLowerCase();
      succecions[dialog].forEach((wordfill) => {
        btnsfill.forEach((btnfill) => {
          if (wordfill == btnfill.textContent) {
            btnfill.click();
          }
        });
      });
    } catch (e) {
      console.log(e);
    }
  };

  const _challenge = () => {
    try {
      let regex = /"([^"]*)"/;
      let frase = document.querySelector("h1").textContent;
      let word = frase.match(regex)[1].replace(" ", "_");
      btnsChallenge.forEach((btn) => {
        if (btn.querySelector(".HaQTI")?.textContent === dictionary[word]) {
          btn.click();
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const _listpeers = () => {
    try {
      listpeersEnglish = document.querySelectorAll(
        "._2eHne:nth-child(2) div button"
      );
      listpeersEspanish = document.querySelectorAll(
        "._2eHne:nth-child(1) div button"
      );
      listpeersEspanish.forEach((peer) => {
        peer.click();
        let text = peer.querySelector(
          "[data-test=challenge-tap-token-text]"
        ).textContent;
        listpeersEnglish.forEach((peerEnglish) => {
          if (
            peerEnglish.querySelector("[data-test=challenge-tap-token-text]")
              .textContent == dictionary[text]
          ) {
            peerEnglish.click();
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const _recieved = () => {
    try {
      let btnsRecieved = document.querySelectorAll(
        "[role=radiogroup] [data-test=challenge-choice]"
      );
      let regex = / /g;
      let regex2 = /[,.'!]/g;
      let dialog = document
        .querySelector("._29e-M._39MJv._2Hg6H")
        .textContent.replace("Hablante 1:", "")
        .replace("?", "")
        .replace(regex, "_")
        .replace(regex2, "")
        .toLowerCase();
      btnsRecieved.forEach((btnRecieved) => {
        if (
          btnRecieved.querySelector("[data-test=challenge-judge-text]")
            .textContent == responses[dialog]
        ) {
          btnRecieved.click();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const data = {
    _columnoptions: _columnoptions,
    _filloptions: _filloptions,
    _challenge: _challenge,
    _listpeers: _listpeers,
    _recieved: _recieved,
  };

  if (btns.length > 0 && !recieved) {
    data._columnoptions();
  }
  if (iconsound && !recieved) {
    data._filloptions();
  }
  if (btnsChallenge.length > 0 && !recieved) {
    data._challenge();
  }

  if (listpeers.length > 0) {
    data._listpeers();
  }
  if (recieved) {
    data._recieved();
  }
}

const delayfunc = (func, time) => {
  return new Promise((resolve) => {
    let delay = setTimeout(() => {
      func();
      clearTimeout(delay);
      resolve();
    }, time);
  });
};
var changeleccion = false;
async function onClassChange(hasClass) {
  if (hasClass == false) {
    delayfunc(() => {
      completeLeccion();
    }, 600);
  }
  if (hasClass == true) {
    delayfunc(() => {
      globalfunction();
    }, 600);
  }
  // if (changeleccion != hasClass) {
  //   changeleccion = hasClass;
  //   await delayfunc(() => {
  //     completeLeccion();
  //   }, 1000);
  // }
}

async function completeLeccion() {
  await delayfunc(async () => {
    let button = document.querySelector("._3HhhB");
    await delayfunc(() => {
      button.click();
    }, 500);
  }, 1000);
}

async function asyncInfinite() {
  let openBntMain = document.querySelector("._2eeKH._2Q9Af");

  if (openBntMain) {
    // if (true) {
    openBntMain.click();
    await delayfunc(() => {
      let btnMain = document.querySelector(
        "._3HhhB._2NolF._275sd._1ZefG._3vvAC._3GYcV._12StQ"
      );
      btnMain.click();
    }, 1000);
    await delayfunc(() => {
      let button = document.querySelector("._3HhhB");
      if (button) {
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (
              mutation.type === "attributes" &&
              mutation.attributeName === "class"
            ) {
              const targetClass = "LhRk3";
              const hasClass = button.classList.contains(targetClass);
              if (hasClass) {
                onClassChange(hasClass);
              } else {
                onClassChange(hasClass);
              }
            }
          });
        });
        observer.observe(button, {
          attributes: true,
          attributeFilter: ["class"],
        });
      } else {
        alert("No se encontró el botón con la clase _3HhhB");
      }
    }, 6000);
    globalfunction();
  }
}

const boton = document.createElement("button");
boton.innerHTML = "Ejecutar";
boton.style =
  "border: 1px solid black;border-radius: 5px;z-index: 100;top: 1rem;position: fixed";
document.body.appendChild(boton);
boton.addEventListener("click", asyncInfinite);

const allfrase = [];
let recursive = setInterval(() => {
  let frase = document.querySelector("h3");
  if (frase) {
    if (allfrase[allfrase.length - 1] !== frase.textContent) {
      allfrase.push(frase.textContent);
    }
  }
}, 800);
