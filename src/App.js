import React, { useState } from "react";
import "./App.css";
import BarcodeScanner from "./BarcodeScanner";
import { QrScanner } from "@yudiel/react-qr-scanner";
import { Alert, AlertTitle } from "@mui/material";
import { useTranslation } from "react-i18next";
function App() {
  const [qrResult, setQrResult] = useState(null);
  const { t } = useTranslation();
  const barcodes = [
    "649528906526", // for testing
    "6221031490569", // chipsy forno
    "6221007083160", // cimo cono
    "6221007022183", // Nescafe gold packet
    "8445290212863", // Nescafe gold jar
    "6221033177239", // Heinz mionize
    "4601674084288", // Heinz ketchup
  ];

  const handleBarcodeScan = (result) => {
    setQrResult(result);

    if (barcodes.includes(result)) {
      <Alert severity="error">
        <AlertTitle>{t("error")}</AlertTitle>
        {t("this_is_error_alert")} — <strong>{t("product_blacklist")}</strong>
      </Alert>;
      // alert(`Barcode ${result} exists in the array!`);
    } else {
      <Alert severity="success">
        <AlertTitle>{t("success")}</AlertTitle>
        {t("this_is_success_alert")} — <strong>{t("product_whitelist")}</strong>
      </Alert>;
      // console.log(`Barcode ${result} does not exist in the array.`);
    }
  };

  return (
    <div>
      <QrScanner
        onDecode={handleBarcodeScan}
        onError={(error) => console.log(error?.message)}
      />
      {qrResult && <div>QR Result: {qrResult}</div>}
    </div>
  );
}

export default App;
