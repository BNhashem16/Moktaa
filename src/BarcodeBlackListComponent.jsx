const barcodes = [
    {
        "barcode": "6221031490569",
        "barcode_format": "EAN_13",
        "product_name": "Chipsy Forno",
        "product_image": "https://www.tesco.com/groceries/en-GB/products/296681279",
        "product_price": "£1.00",
        "product_description": "Chipsy Forno 150g",
    },

    {
        "barcode": "6221007083160",
        "barcode_format": "EAN_13",
        "product_name": "Cimo Cono",
        "product_image": "https://www.tesco.com/groceries/en-GB/products/296681279",
        "product_price": "£1.00",
        "product_description": "Cimo Cono 150g",
    },

    {
        "barcode": "8445290212863",
        "barcode_format": "EAN_13",
        "product_name": "Nescafe Gold Jar",
        "product_image": "https://www.tesco.com/groceries/en-GB/products/296681279",
        "product_price": "£1.00",
        "product_description": "Nescafe Gold Packet 150g",
    },

    {
        "barcode": "6221007022183",
        "barcode_format": "EAN_13",
        "product_name": "Nescafe Gold Packet",
        "product_image": "https://www.tesco.com/groceries/en-GB/products/296681279",
        "product_price": "£1.00",
        "product_description": "Nescafe Gold Jar 150g",
    },

    {
        "barcode": "6221033177239",
        "barcode_format": "EAN_13",
        "product_name": "Heinz Mayonize",
        "product_image": "https://www.tesco.com/groceries/en-GB/products/296681279",
        "product_price": "£1.00",
        "product_description": "Heinz Mayonize 150g",
    },

    {
        "barcode": "4601674084288",
        "barcode_format": "EAN_13",
        "product_name": "Heinz Ketchup",
        "product_image": "https://www.tesco.com/groceries/en-GB/products/296681279",
        "product_price": "£1.00",
        "product_description": "Heinz Ketchup 150g",
    },
];


export const BarcodeBlackListComponent = () => barcodes;
export const barcodeExists = (barcodeToCheck) => barcodes.some(barcode => barcode.barcode === barcodeToCheck);

export const getBarcodeData = (barcodeToCheck) => barcodes.find(barcode => barcode.barcode === barcodeToCheck);