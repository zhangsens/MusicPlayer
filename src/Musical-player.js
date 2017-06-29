var channel = 2;
var length = 22050;
var sampleRate = 44100;
var volume = 1;

var animationFrame = window.requestAnimationFrame;
var audio = document.querySelector("#audio") || document.querySelector("video");
var audio2 = document.querySelector("#audio2");
audio.volume = volume;
var audioCtx = new AudioContext();

var source = audioCtx.createMediaElementSource(audio); //use for audio and video
var source2 = audioCtx.createMediaElementSource(audio2);
// var source = audioCtx.createMediaStreamSource(); //use for input
var gainNode = audioCtx.createGain();
var analyser = audioCtx.createAnalyser();
gainNode.gain.value = 1;
source.connect(gainNode);
source2.connect(gainNode);
gainNode.connect(analyser);
analyser.connect(audioCtx.destination);


var audioSource = audioCtx.createBufferSource();
var buffer = audioCtx.createBuffer(channel, length, sampleRate);
audioSource.buffer = buffer;
var array = new Uint8Array(buffer);


const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

function animation() {
    analyser.getByteTimeDomainData(array);
    console.log(array);
    animationFrame(animation)
}
animationFrame(animation);