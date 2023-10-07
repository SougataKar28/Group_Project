function generateBarcode () {
    JsBarcode('#barcode', localStorage.getItem("reg"), {
        format: 'code128',
        width: 5,
        height: 30,
        displayValue: true,
    });
}