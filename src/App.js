import React, { useState } from "react";
import "./App.css";
import { QrScanner } from "@yudiel/react-qr-scanner";
import { Alert, AlertTitle } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  barcodeExists,
  getBarcodeData,
} from "./BarcodeBlackListComponent";
function App() {
  const [qrResult, setQrResult] = useState(null);
  const { t } = useTranslation();
  // const barcodes = [
  //   "649528906526", // for testing
  // ];

  const handleBarcodeScan = (result) => {
    setQrResult(result);

  };

  const errorAlert = (
    <Alert severity="error">
      <AlertTitle>{t("error")}</AlertTitle>
      {t("this_is_error_alert")} — <strong>{t("product_blacklist")}</strong>
      {qrResult && qrResult !== null ? (
        <div>
          <p>Barcode: {qrResult}</p>
          <p>Product Name: {getBarcodeData(qrResult).product_name}</p>
        </div>
      ) : null}
    </Alert>
  );

  const successAlert = (
    <Alert severity="success">
      <AlertTitle>{t("success")}</AlertTitle>
      {t("this_is_success_alert")} — <strong>{t("product_whitelist")}</strong>
    </Alert>
  );

  return (
    <div className="qr-scanner">
      <QrScanner
        onDecode={handleBarcodeScan}
        onError={(error) => console.log(error?.message)}
      />
      {qrResult && qrResult !== null
        ? barcodeExists(qrResult)
          ? errorAlert
          : successAlert
        : null}
        {/* <Alert severity="success">
  <AlertTitle>Success</AlertTitle>
  This is a success alert — <strong>check it out!</strong>
</Alert>

<Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  This is an error alert — <strong>check it out!</strong>
</Alert> */}
    </div>
  );
}

export default App;
