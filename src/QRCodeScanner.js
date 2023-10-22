import React, { useRef, useEffect } from 'react';

const QRCodeScanner = () => {
  const videoRef = useRef();

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    startCamera();
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay={true} />
    </div>
  );
};

export default QRCodeScanner;
