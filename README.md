# 📊 Google Sheets Custom Popup Data Entry & CRM Form

A custom modal sidebar/popup data entry application built directly inside **Google Sheets** using **Google Apps Script**, **HTML5**, and **CSS3**. Designed for Back-Office Operations, Bookkeeping, and CRM Lead Intake to prevent accidental formula overwrites and preserve leading zeros in phone numbers.

## 🎯 Key Benefits for Business Operations
- **Zero Formatting Corruption:** Automatically prefixes phone numbers and invoice IDs as plain text (`'`) so leading zeros are never stripped.
- **Validation & Deduplication:** Validates required fields before appending clean rows to the master sheet.
- **Custom Menu Integration:** Adds a one-click `📋 CRM Data Entry` menu directly to the Google Sheets toolbar.

## 🛠️ Installation Steps
1. Open your Google Sheet and go to **Extensions > Apps Script**.
2. Paste the contents of `Code.gs` into the default script file.
3. Click `+` next to Files, select **HTML**, name it `Form`, and paste the contents of `Form.html`.
4. Reload your Google Sheet and click **CRM Operations > Open Data Entry Form**.
