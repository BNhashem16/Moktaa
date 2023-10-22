import React, { useRef, useEffect } from 'react';
import jsQR from 'jsqr';

function BarcodeScanner() {
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;

        // Wait for the 'loadedmetadata' event to ensure the video is ready
        videoRef.current.addEventListener('loadedmetadata', () => {
          // Start capturing frames at a reduced frame rate
          setTimeout(captureFrame, 1000 / 15); // 15 FPS
        });
      } catch (error) {
        console.error("Error accessing the camera: ", error);
      }
    };

    startCamera();
  }, []);

  const captureFrame = () => {
    const video = videoRef.current;

    if (!video || !video.videoWidth || !video.videoHeight) {
      // Wait for the 'loadedmetadata' event to ensure the video is ready
      video.addEventListener('loadedmetadata', () => {
        setTimeout(captureFrame, 1000 / 15); // 15 FPS
      });
      return;
    }

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    detectBarcode(imageData);

    setTimeout(captureFrame, 1000 / 15); // 15 FPS
  };

  const detectBarcode = (imageData) => {
    const qrCode = jsQR(imageData.data, imageData.width, imageData.height);
    if (qrCode) {
      console.log('Detected barcode:', qrCode.data);
    }
  };

  return (
    <div>
      <video ref={videoRef} autoPlay={true}></video>
    </div>
  );
}

export default BarcodeScanner;
