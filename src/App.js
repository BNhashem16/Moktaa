import React, { useState } from "react";
import "./App.css";
import { QrScanner } from "@yudiel/react-qr-scanner";
import { Alert, AlertTitle } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  BarcodeBlackListComponent,
  barcodeExists,
  getBarcodeData,
} from "./BarcodeBlackListComponent";
function App() {
  const [qrResult, setQrResult] = useState(null);
  const { t } = useTranslation();
  const barcode = getBarcodeData(qrResult);
  // const barcodes = [
  //   "649528906526", // for testing
  // ];

  const handleBarcodeScan = (result) => {
    setQrResult(result);
  };

  const errorAlert = (
    <div>
      <Alert severity="error">
        <AlertTitle>{t("error")}</AlertTitle>
        {t("this_is_error_alert")} — <strong>{t("product_blacklist")}</strong>
      </Alert>

      {qrResult && qrResult !== null ? (
        <div>
          <div className="container">
            <div className="row">
              <div className="col">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Barcode</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Product Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{barcode.barcode}</td>
                      <td>{barcode.product_name}</td>
                      <td>
                        <img
                          width="100px"
                          height="100px"
                          src={barcode.product_image}
                          alt={barcode.product_name}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );

  const successAlert = (
    <Alert severity="success">
      <AlertTitle>{t("success")}</AlertTitle>
      {t("this_is_success_alert")} — <strong>{t("product_whitelist")}</strong>
    </Alert>
    );
    
    const renderAlert = () => {
        if (qrResult != null) {
            if (barcodeExists(qrResult)) {
                return errorAlert;
            } else if(!barcodeExists(qrResult)) {
                return successAlert;
            } else {
                return alert(qrResult + " " + barcodeExists(qrResult));
            }
        }
        return null;
    };
  return (
    <div className="qr-scanner">
      <QrScanner
        onDecode={handleBarcodeScan}
              onError={(error) => alert(error?.message)}
            //   onResult={(result) => alert(result?.text)}
          />
             {renderAlert()}
    </div>
  );
}

export default App;
