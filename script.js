const sounds = ["applause","boo","gasp","tada","victory","wrong"];
const buttons = document.getElementById("buttons")
let currentaudio = null;

sounds.forEach((sound) => {
	const btn = document.createElement("button");
	btn.classList.add("btn");
	btn.innerText = sound;
	btn.addEventListener("click", () => {
		stopSounds();

		const audio = document.createElement("audio");
		audio.src = `sounds/${sound}.mp3`;
		audio.setAttribute("controls","");
		document.body.appendChild(audio);
		audio.play();
		currentaudio = audio;
	});
	buttons.appendChild(btn);
});

const stop = document.createElement("button");
stop.classList.add("stop");
stop.innerText = "Stop";
stop.addEventListener("click", stopSounds);
buttons.appendChild(stop);

function stopSounds() {
	const audios = document.querySelectorAll("audio");
	audios.forEach((audio) => {
		audio.pause();
		audio.currentTime = 0;
		audio.remove();
	});
	currentaudio = null;
}

