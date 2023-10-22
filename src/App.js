import React, { useState } from 'react';
import './App.css';
import BarcodeScanner from './BarcodeScanner';
import { QrScanner } from '@yudiel/react-qr-scanner';

function App() {
  const [qrResult, setQrResult] = useState(null);

  return (
    <div>
      <QrScanner
        onDecode={(result) => setQrResult(result)}
        onError={(error) => console.log(error?.message)}
      />
      {qrResult && <div>QR Result: {qrResult}</div>}
    </div>
  );
}

export default App;
