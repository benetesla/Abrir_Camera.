async function init() {
    const video = document.querySelector('video');
    try {
        const mediaStream = await navigator
            .mediaDevices.getUserMedia({ video: true });
        const canvas = document.querySelector("canvas");
        const canvasStream = canvas.captureStream();
        const canvasStreamTrack = canvasStream.getTracks()[0];
        mediaStream.addTrack(canvasStreamTrack);
        video.srcObject = mediaStream;
    } catch (err) {
        console.log(err)
    }
}