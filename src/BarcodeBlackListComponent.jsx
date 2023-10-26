const  spriteImage = './assets/products/sprite.jpg';
const  NescafeGoldPacketImage = './assets/products/nescafe_gold.jpg';

const barcodes = [
    {
        "barcode": "6221031490569",
        "product_name": "Chipsy Forno",
        "product_image": spriteImage,
    },

    {
        "barcode": "6221007083160",
        "product_name": "Cimo Cono",
        "product_image": spriteImage,
    },

    {
        "barcode": "8445290212863",
        "product_name": "Nescafe Gold Jar",
        "product_image": spriteImage,
    },

    {
        "barcode": "6221007022183",
        "product_name": "Nescafe Gold Packet",
        "product_image": NescafeGoldPacketImage,
    },

    {
        "barcode": "6221033177239",
        "product_name": "Heinz Mayonize",
        "product_image": spriteImage,
    },

    {
        "barcode": "4601674084288",
        "product_name": "Heinz Ketchup",
        "product_image": spriteImage,
    },
    {
        "barcode": "5449000266248",
        "product_name": "sprite",
        "product_image": spriteImage,
    },
];


export const BarcodeBlackListComponent = () => barcodes;
export const barcodeExists = (barcodeToCheck) => {
  if (barcodeToCheck === undefined) {
    return false; // Return false if barcodeToCheck is undefined
  }
  
  return barcodes.some(barcode => barcode.barcode === barcodeToCheck);
};

export const getBarcodeData = (barcodeFromUser) => {
  const foundBarcode = barcodes.find(barcode => barcode.barcode === barcodeFromUser);
  return foundBarcode || { barcode: null, product_name: null, product_image: null };
};