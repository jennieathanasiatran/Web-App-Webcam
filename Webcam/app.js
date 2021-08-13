// Consts
const camera = document.getElementById("webcam"),
	button = document.querySelector("button")

// Input the camera from device and get stream
const startWebcam = async () => {
	try {
		let stream = await navigator.mediaDevices.getUserMedia({
			video: true,
			audio: false,
		});
		camera.srcObject = stream;
	} catch (err) {
		alert(err);
	}
};

// Stop the Webcam
const stopWebcam = (source) => {
	try {
		const tracks = source.getTracks();
		tracks.forEach((track) => {
			track.stop();
		});
	} catch (err) {
		alert(err);
	}
};

// Turn on/off the webcam when clicking the button
button.onclick = () => {
	if (camera.srcObject.active) {
		confirm("Do you want to turn the webcam off?")
			? stopWebcam(camera.srcObject)
			: alert("Webcam is active");
	} else {
		confirm("Do you want to turn the webcam off?") 
        ? startWebcam() 
        : alert("Webcam is not active");
	}
};

// Webcam on by default
window.addEventListener("load", startWebcam);
