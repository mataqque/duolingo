const TIME = 200;
const dictionary = {
	hola: 'hello',
	de_nada: "you're welcome",
	adiós: 'goodbye',
	leche: 'milk',
	té: 'tea',
	sí: 'yes',
	café: 'coffee',
	agua: 'water',
	café: 'coffee',
	hola: 'hello',
	azúcar: 'sugar',
	gracias: 'thank you',
	por_favor: 'please',
};

const succecions = {
	yes_or_no: ['Sí', 'o', 'no'],
	with_sugar_please: ['Con', 'azúcar', 'por', 'favor'],
	youre_welcome_goodbye: ['De', 'nada', 'adiós'],
	youre_welcome: ['De', 'nada'],
	yes: ['Sí'],
	coffee_and_tea_please: ['Café', 'y', 'té', 'por', 'favor'],
	with_milk: ['Con', 'leche'],
	yes_thank_you: ['Sí', 'gracias'],
	water_please: ['Agua', 'por', 'favor'],
	hello_julia: ['Hola', 'Julia'],
	coffee_or_tea: ['Café', 'o', 'té'],
	tea_please: ['Té', 'por', 'favor'],
	yes_coffee: ['Sí', 'café'],
	yes_water: ['Sí', 'agua'],
	coffee_and_tea: ['Café', 'y', 'té'],
	no_thank_you: ['No', 'gracias'],
	milk_or_water: ['Leche', 'o', 'agua'],
	milk_and_sugar: ['Leche', 'y', 'azúcar'],
	hello: ['Hola'],
	sugar: ['Azúcar'],
	with_milk_please: ['Con', 'leche', 'por', 'favor'],
	tea_and_coffee: ['Té', 'y', 'café'],
	coffee: ['Café'],
	no: ['No'],
	with_milk_and_sugar_please: ['Con', 'leche', 'y', 'azúcar', 'por', 'favor'],
	water: ['Agua'],
	hello_julia: ['Hola', 'Julia'],
	tea_or_coffee: ['Té', 'o', 'café'],
	goodbye: ['Adiós'],
	coffee_with_milk: ['Café', 'con', 'leche'],
	please: ['Por', 'favor'],
	coffe_please: ['Café', 'por', 'favor'],
	yes_thank_you: ['Sí', 'gracias'],
	coffee_please: ['café', 'por', 'favor'],
	thank_you_goodbye: ['Gracias', 'adiós'],
	yes_please: ['Sí', 'por', 'favor'],
	milk_please: ['Leche', 'por', 'favor'],
	coffee_with_milk_please: ['Café', 'con', 'leche', 'por', 'favor'],
	milk: ['Leche'],
	tea: ['Té'],
	azúcar: ['sugar'],
	thank_you: ['Gracias'],
};

const responses = {
	azúcar: ['sugar'],
	sugar: ['azucar'],
	thank_you: ["You're welcome!", "You're welcome."],
	thank_you_david: ["You're welcome, Emma!"],
	thank_you_fernanda: ["You're welcome, Maria."],
};

function getNameBetweenQuote(cadena) {
	let inicioComillas = cadena.indexOf('"');
	if (inicioComillas === -1) {
		return null; // No se encontraron comillas
	}
	let finComillas = cadena.indexOf('"', inicioComillas + 1);
	if (finComillas === -1) {
		return null; // No se encontró la segunda comilla de cierre
	}
	let palabraEntreComillas = cadena.substring(inicioComillas + 1, finComillas);
	return palabraEntreComillas;
}

function globalfunction() {
	var challengeDialogue = document.querySelector("[data-test='challenge challenge-dialogue']");
	var challengeAssist = document.querySelector("[data-test='challenge challenge-assist']");
	var challengeTranslate = document.querySelector("[data-test='challenge challenge-translate']");
	var challengeSelect = document.querySelector("[data-test='challenge challenge-select']");
	var challengeMatch = document.querySelector("[data-test='challenge challenge-match']");
	var iconsound = document.querySelectorAll('.fs-exclude')[1];
	var challengeSpeak = document.querySelector("[data-test='challenge challenge-speak']");

	const challenge_assist = () => {
		try {
			delayfunc(() => {
				const regex = /"([^"]*)"/;
				let frase = document.querySelector("[data-test='challenge challenge-assist'] [lang='es']");
				if (frase && frase.textContent) {
					frase = frase.textContent;
					const btns = challengeAssist.querySelectorAll("[role='radiogroup'] [data-test='challenge-choice'] [data-test='challenge-judge-text']");
					let word = frase.replace(' ', '_');
					btns.forEach(btn => {
						if (btn.textContent === dictionary[word]) {
							btn.click();
						}
					});
				} else {
					console.log('No hay frase para traducir challenge_assist');
				}
			}, TIME);
		} catch (error) {
			console.log(error);
		}
	};
	const _filloptions = () => {
		try {
			delayfunc(() => {
				let btnsfill = document.querySelectorAll('[data-test="word-bank"] > div');
				let regex = / /g;
				let regex2 = /[,.'!]/g;
				let dialog = document.querySelector('[data-test="challenge challenge-translate"] [dir="ltr"] [lang="en"]');
				if (dialog && dialog?.textContent) {
					dialog.textContent.replace('?', '').replace(regex, '_').replace(regex2, '').toLowerCase();
					succecions[dialog].forEach(wordfill => {
						btnsfill.forEach(btnfill => {
							if (wordfill == btnfill.textContent) {
								btnfill.click();
							}
						});
					});
				}
			}, 500);
		} catch (e) {
			console.log(e);
		}
	};
	const challenge_translate = () => {
		try {
			delayfunc(() => {
				function removeSpecialCharacter(cadena) {
					// Define una expresión regular para encontrar los caracteres especiales
					let expresionRegular = /[?,.;!"']/g;
					// Reemplaza los caracteres especiales con una cadena vacía
					let cadenaLimpia = cadena.replace(expresionRegular, '');
					return cadenaLimpia;
				}
				function replaceWhiteSpece(cadena, remplazo) {
					// Utiliza una expresión regular para encontrar todos los espacios en blanco
					let expresionRegular = /\s+/g;
					// Reemplaza todos los espacios en blanco con el carácter o cadena especificados
					let cadenaRemplazada = cadena.replace(expresionRegular, remplazo);
					return cadenaRemplazada;
				}
				const recursivity = () => {
					let frase = document.querySelector("[data-test='challenge challenge-translate'] [dir='ltr']");
					if (frase && frase?.textContent) {
						frase = frase?.textContent;
						let word = replaceWhiteSpece(removeSpecialCharacter(frase), '_').toLowerCase();
						const btns = document.querySelectorAll("[data-test='challenge challenge-translate'] [data-test='word-bank'] > div");

						succecions[word].forEach(txt => {
							btns.forEach(element => {
								if (element.textContent == txt) {
									element.querySelector('button').click();
								}
							});
						});
					} else {
						delayfunc(() => {
							alert('No hay frase para traducir challenge_translate ${frase}');
							recursivity();
						}, 30);
					}
				};
			}, 1000);
		} catch (e) {
			console.log(e);
		}
	};
	const challenge_match = () => {
		try {
			delayfunc(() => {
				listpeersEnglish = document.querySelectorAll('[dir="ltr"][lang="en"][translate="no"]');
				listpeersEspanish = document.querySelectorAll('[dir="ltr"][lang="es"][translate="no"]');
				listpeersEspanish.forEach(peer => {
					peer.click();
					let text = peer.querySelector('[data-test=challenge-tap-token-text]').textContent;
					listpeersEnglish.forEach(peerEnglish => {
						if (peerEnglish.querySelector('[data-test=challenge-tap-token-text]').textContent == dictionary[text]) {
							peerEnglish.click();
						}
					});
				});
			}, TIME);
		} catch (error) {
			console.log(error);
		}
	};
	const challenge_dialogue = () => {
		try {
			delayfunc(() => {
				let btnsDialog = document.querySelectorAll('[role=radiogroup] [data-test=challenge-choice]');
				let regex = / /g;
				let regex2 = /[,.'!]/g;

				let dialog = document
					.querySelectorAll('[data-test="challenge challenge-dialogue"] [dir="ltr"]')[0]
					.textContent.replace('Hablante 1:', '')
					.replace('?', '')
					.replace(regex, '_')
					.replace(regex2, '')
					.toLowerCase();
				btnsDialog.forEach(btnRecieved => {
					if (responses[dialog].includes(btnRecieved.querySelector('[data-test=challenge-judge-text]').textContent)) {
						btnRecieved.click();
					}
				});
			}, TIME);
		} catch (error) {
			console.log(error);
		}
	};
	const change_select = () => {
		delayfunc(() => {
			let text = document.querySelector("[data-test='challenge challenge-select'] [data-test='challenge-header']");
			if (text && text.textContent) {
				text = text?.textContent;
				const translate = dictionary[getNameBetweenQuote(text)];
				const options = document.querySelectorAll("[role='radiogroup'] > div");
				options.forEach(opt => {
					if (opt.querySelector("[dir='ltr'][lang='en']").textContent == translate) {
						opt.click();
					}
				});
			} else {
				alert('No hay frase para traducir change_select');
			}
		}, TIME);
	};
	const challenge_speak = () => {
		let whilebtn = setInterval(() => {
			let btn = document.querySelector("[data-test='player-skip']");
			if (btn) {
				btn.click();
				clearInterval(whilebtn);
			}
		}, 200);
	};
	const data = {
		challenge_assist: challenge_assist,
		_filloptions: _filloptions,
		challenge_dialogue: challenge_dialogue,
		challenge_translate: challenge_translate,
		challenge_match: challenge_match,
		change_select: change_select,
		challenge_speak: challenge_speak,
	};

	if (challengeAssist) data.challenge_assist();
	if (challengeTranslate) data.challenge_translate();
	if (challengeDialogue) data.challenge_dialogue();
	if (challengeSelect) data.change_select();
	if (challengeMatch) data.challenge_match();
	if (challengeSpeak) data.challenge_speak();
	if (iconsound) data._filloptions();
}

const delayfunc = (func, time) => {
	return new Promise(resolve => {
		let delay = setTimeout(() => {
			func();
			clearTimeout(delay);
			resolve();
		}, time);
	});
};
var changeleccion = false;
async function onClassChange(value) {
	if (value == 'false') {
		completeLeccion();
	}
	if (value == 'true') {
		globalfunction();
	}
}

async function completeLeccion() {
	await delayfunc(async () => {
		let button = document.querySelector("#session\\/PlayerFooter [data-test='player-next']");
		await delayfunc(() => {
			button.click();
		}, 50);
	}, 300);
}

async function asyncInfinite() {
	window.scrollTo(0, 0);
	let openBntMain = document.querySelector('[data-test="skill-path-level-0 skill-path-level-skill"]');
	if (openBntMain) {
		// if (true) {
		openBntMain.click();
		await delayfunc(() => {
			let btnMain = document.querySelector("[data-test='skill-path-state-legendary skill-path-unit-test-0']");
			btnMain.click();
		}, 500);
		await delayfunc(() => {
			let whilebutton = setInterval(() => {
				let button = document.querySelector("#session\\/PlayerFooter [data-test='player-next']");
				if (button) {
					const observer = new MutationObserver(mutations => {
						if (mutations[0].attributeName == 'aria-disabled') {
							onClassChange(button.ariaDisabled);
						}
					});
					observer.observe(button, {
						attributes: true,
						attributeFilter: ['aria-disabled'],
					});
					clearInterval(whilebutton);
					delayfunc(() => {
						globalfunction();
					}, 100);
				} else {
					console.error('doesnt find button next step');
				}
			}, 100);
		}, 3000);
	}
}

const boton = document.createElement('button');
boton.id = 'ejecutar';
boton.innerHTML = 'Ejecutar';
boton.style = 'border: 1px solid black;border-radius: 5px;z-index: 100;top: 1rem;position: fixed';
document.body.appendChild(boton);
boton.addEventListener('click', asyncInfinite);

const allfrase = [];
let recursive = setInterval(() => {
	let frase = document.querySelector('h3');
	if (frase) {
		if (allfrase[allfrase.length - 1] !== frase.textContent) {
			allfrase.push(frase.textContent);
		}
	}
}, 500);

function recursivity() {
	const data = [
		'[data-test="session-complete-slide"]',
		'[data-test="purchase-step-active"]',
		"img[src='https://d35aaqx5ub95lt.cloudfront.net/images/eab997f62389175bd43e8ea688bbf09d.svg']",
		'[data-test="daily-quest-progress-slide"]',
		'[data-test="daily-quest-reward-slide"]',
	];
	data.forEach(item => {
		const element = document.querySelector(item);
		if (element && item === '[data-test="session-complete-slide"]') {
			let button = document.querySelector("#session\\/PlayerFooter [data-test='player-next']");
			delayfunc(() => {
				button.click();
				boton.click();
			}, 1000);
		}
		if (element && item === '[data-test="purchase-step-active"]') {
			let button = document.querySelector('[data-test="plus-no-thanks"]');
			delayfunc(() => {
				button.click();
				boton.click();
			}, 1000);
		}
		if (element && item === "img[src='https://d35aaqx5ub95lt.cloudfront.net/images/eab997f62389175bd43e8ea688bbf09d.svg']") {
		}
		if (element && item === '[data-test="daily-quest-progress-slide"]') {
			let button = document.querySelector('[data-test="player-next"]');
			delayfunc(() => {
				button.click();
				boton.click();
			}, 1000);
		}
		if (element && item === '[data-test="daily-quest-reward-slide"]') {
			let button = document.querySelector('[data-test="player-next"]');
			delayfunc(() => {
				button.click();
				boton.click();
			}, 1000);
		}
	});
}

let revision = setInterval(recursivity, 1000);
