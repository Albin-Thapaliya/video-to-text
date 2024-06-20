function createOnEditTrigger() {
  var ss = SpreadsheetApp.getActive();
  ScriptApp.newTrigger('onEditHandler')
    .forSpreadsheet(ss)
    .onEdit()
    .create();
}

function onEditHandler(e) {
  if (e.range.columnStart === 4 && e.range.columnEnd === 4) {
    var isChecked = e.range.isChecked();
    if (isChecked !== null) {
      if (isChecked) {
        processRowData(e.range.getRow());
      }
    }
  }
}

function processRowData(row) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getRange(row, 1, 1, 3);
  var values = range.getValues()[0];
  var isDataMissing = values.slice(0, 2).includes("");
  if (isDataMissing) {
    SpreadsheetApp.getUi().alert('Please fill in all required fields before generating a transcript.');
  } else {
    sheet.getRange(row, 5).setValue("Transcript In Progress");
    transcribeVideo(values, row);
  }
}

function transcribeVideo(values, rowIndex) {
}
