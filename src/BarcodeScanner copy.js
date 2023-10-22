import React, { useRef, useEffect } from 'react';
import jsQR from "jsqr";
function BarcodeScanner() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Function to start the camera and capture frames
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error("Error accessing the camera: ", error);
      }
    };

    startCamera();

    // Function to capture and process frames
    const captureFrame = async () => {
      const video = videoRef.current;
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      // Process the frame and detect barcodes
      const barcode = await detectBarcode(imageData);

      if (barcode) {
        console.log('Detected barcode:', barcode);
      }

      // Continue capturing frames
      requestAnimationFrame(captureFrame);
    };

    // Start capturing frames when the video is playing
    videoRef.current.addEventListener('play', () => {
      requestAnimationFrame(captureFrame);
    });
  }, []);

  const detectBarcode = async (imageData) => {
    // Use a barcode detection library (jsqr in this case) to decode barcodes
    const qrCode = jsQR(imageData.data, imageData.width, imageData.height);
    if (qrCode) {
      return qrCode.data;
    }
    return null;
  };

  return (
    <div>
      <video ref={videoRef} autoPlay={true}></video>
    </div>
  );
}

export default BarcodeScanner;
