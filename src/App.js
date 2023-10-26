import React, { useEffect, useState } from "react";
import "./App.css";
import { QrScanner } from "@yudiel/react-qr-scanner";
import { Alert, AlertTitle } from "@mui/material";
import { useTranslation } from "react-i18next";
<<<<<<< HEAD
import { barcodeExists, getBarcodeData } from "./BarcodeBlackListComponent";
=======
import {
  BarcodeBlackListComponent,
  barcodeExists,
  getBarcodeData,
} from "./BarcodeBlackListComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OfflineMessage from "./OfflineMessage";
<<<<<<< HEAD
>>>>>>> abbd5b04970f28d1c1838a597622d497f16f070f
=======
>>>>>>> abbd5b04970f28d1c1838a597622d497f16f070f
function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

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
<<<<<<< HEAD
<<<<<<< HEAD
    console.log(
      qrResult,
      "qrResult",
      barcodeExists(qrResult),
      "barcodeExists(qrResult)"
    );
=======
>>>>>>> abbd5b04970f28d1c1838a597622d497f16f070f
=======
>>>>>>> abbd5b04970f28d1c1838a597622d497f16f070f
    if (qrResult != null) {
      if (barcodeExists(qrResult) === true) {
        return errorAlert;
      } else {
        return successAlert;
      }
    }
    return null;
  };
  return (
    <div className="qr-scanner">
      <QrScanner
        onDecode={handleBarcodeScan}
        // onResult={handleBarcodeScan}
<<<<<<< HEAD
<<<<<<< HEAD
        onError={(error) => console.log(error)}
      />
=======
=======
>>>>>>> abbd5b04970f28d1c1838a597622d497f16f070f
        // onError={(error) =>
        //   console.log(error)}
      />
      {isOnline ? (
        // Your main application content here
        <p>Your app content goes here.</p>
      ) : (
        <OfflineMessage />
      )}
<<<<<<< HEAD
>>>>>>> abbd5b04970f28d1c1838a597622d497f16f070f
=======
>>>>>>> abbd5b04970f28d1c1838a597622d497f16f070f
      {renderAlert()}
    </div>
  );
}

export default App;
