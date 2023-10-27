import CountryBarcodes from "./CountryBarcodes";

export const barcodeExists = (barcodeToCheck) => {
    if (barcodeToCheck === undefined) {
        return false; 
    }

    let countryOfBarcode = barcodeToCheck?.slice(0, 3);
    let countryBarcodes = CountryBarcodes();
    
    if (countryOfBarcode && countryBarcodes.some(countryBarcodes => countryBarcodes.code == countryOfBarcode)) {
        return true;
    }
    
    return false;
};


export const findBarcode = (code) => {
    let barcodeToFind = code?.slice(0, 3);

    let barcodes = CountryBarcodes();
    
    if (barcodeToFind && barcodes.some(barcodes => barcodes.code == barcodeToFind)) {
        return barcodes.find(barcodes => barcodes.code == barcodeToFind);
    } else {
        return {
            code: "",
            name: "",
        };
    }
}

// get error message for barcode
export const getBarcodeErrorMessage = (barcodeToFind) => {
    const barcodeExists = findBarcode(barcodeToFind);
    console.log(barcodeExists);
    if (barcodeExists) {
        return "this barcode is belongs to " + barcodeExists.name;
    }
}