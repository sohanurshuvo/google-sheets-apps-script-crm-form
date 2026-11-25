function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('📋 CRM Operations')
    .addItem('Open Data Entry Form', 'showEntryForm')
    .addToUi();
}

function showEntryForm() {
  const html = HtmlService.createHtmlOutputFromFile('Form')
    .setWidth(420)
    .setHeight(480);
  SpreadsheetApp.getUi().showModalDialog(html, 'Client & Back-Office Data Entry');
}

function saveRecord(formData) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const timestamp = new Date();
  // Prefix phone with apostrophe to preserve leading zeros
  const safePhone = "'" + String(formData.phone).trim();

  sheet.appendRow([
    timestamp,
    formData.fullName.trim(),
    formData.company.trim(),
    formData.email.trim().toLowerCase(),
    safePhone,
    formData.serviceCategory,
    parseFloat(formData.amount || 0),
    'New'
  ]);

  return { success: true, message: 'Record saved successfully!' };
}
