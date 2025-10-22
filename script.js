//your JS code here. If required.
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttons = document.getElementById("buttons");
sounds.forEach((sound) => {
	const btn = document.createElement("button");
	btn.classList.add("btn");
	btn.innerText = sound;

	btn.addEventListener("click", () => {
		stopSounds();
		const audio  = new Audio(`sounds${sound}.mp3`);
		audio.play();
	});
	buttons.appendChild(btn);
});

const Stopbtn = document.createElement("button");
Stopbtn.classList.add("Stop");
Stopbtn.innertext = "Stop";
stopBtn.addEventListener("click", stopSounds);
buttons.appendChild(stopBtn);

function stopSounds() {
	 const audios = document.querySelectorAll("audio");
  audios.forEach((a) => a.pause());
}


