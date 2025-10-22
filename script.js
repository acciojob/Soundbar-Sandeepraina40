// your JS code here. If required.
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttons = document.getElementById("buttons");

let currentAudio = null; // Track the currently playing audio

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSounds();

    // Create an <audio> element and add it to the DOM
    const audio = document.createElement("audio");
    audio.src = `sounds/${sound}.mp3`;
    audio.setAttribute("controls", ""); // optional, for testing visibility
    document.body.appendChild(audio);

    audio.play();
    currentAudio = audio;
  });

  buttons.appendChild(btn);
});

// Create Stop button
const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText = "Stop";
stopBtn.addEventListener("click", stopSounds);
buttons.appendChild(stopBtn);

// Function to stop and remove all audio elements
function stopSounds() {
  const audios = document.querySelectorAll("audio");
  audios.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
    audio.remove(); // remove from DOM so tests reset properly
  });
  currentAudio = null;
}
