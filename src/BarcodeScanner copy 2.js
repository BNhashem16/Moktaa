import React, { useState, useEffect } from 'react';
import Quagga from 'quagga';

function BarcodeScanner() {
  const [detectedBarcode, setDetectedBarcode] = useState(null);

  useEffect(() => {
    Quagga.init({
      inputStream: {
        name: 'Live',
        type: 'LiveStream',
        target: document.querySelector('#barcode-scanner'), // This should be an HTML element to render the video stream
        constraints: {
          width: 640,
          height: 480,
          facingMode: 'environment', // Use the rear camera
        },
      },
      decoder: {
        readers: ['ean_reader', 'code_128_reader'], // Barcode types to scan
      },
    }, (err) => {
      if (err) {
        console.error(err);
        return;
      }

      Quagga.start();

      Quagga.onDetected((data) => {
        setDetectedBarcode(data.codeResult.code);
      });
    });

    return () => {
      Quagga.stop();
    };
  }, []);

  return (
    <div>
      <div id="barcode-scanner"></div>
      <p>Detected Barcode: {detectedBarcode}</p>
    </div>
  );
}

export default BarcodeScanner;
