function createOnEditTrigger() {
  var ss = SpreadsheetApp.getActive();
  ScriptApp.newTrigger('onEditHandler')
    .forSpreadsheet(ss)
    .onEdit()
    .create();
}

function onEditHandler(e) {
  Logger.log('Edit event triggered: ' + JSON.stringify(e));
  if (e.range.columnStart === 4 && e.range.columnEnd === 4) {
    Logger.log('Checkbox column edited.');
    var isChecked = e.range.isChecked();
    Logger.log('Checkbox is checked: ' + isChecked);
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
  Logger.log('Data for processing: ' + values.join(', '));

  var isDataMissing = values.slice(0, 2).includes("");
  if (isDataMissing) {
    Logger.log('Data is missing in one of the first two required fields.');
    SpreadsheetApp.getUi().alert('Please fill in all required fields before generating a transcript.');
  } else {
    sheet.getRange(row, 5).setValue("Transcript In Progress");
    transcribeVideo(values, row);
  }
}

function transcribeVideo(values, rowIndex) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  var videoUrl = values[0]; 
  var name = values[1];
  var timestamp = values.length > 2 ? values[2] : ''; 

Logger.log("Testing output: " + spreadsheet + "," + sheet + "," + videoUrl + "," + name + "," + timestamp);

  try {
    var url = import.meta.env.url;
    var payload = JSON.stringify({
  
    });
    var options = {
      method: "post",
      contentType: "application/json",
      payload: payload
    };
    Logger.log('Sending transcription request: ' + payload);
    var response = UrlFetchApp.fetch(url, options);
    var responseData = JSON.parse(response.getContentText());
  }
    Logger.log('Received response: ' + JSON.stringify(responseData));
    if (responseData.transcriptPath) {
      sheet.getRange(rowIndex, 5).setValue(responseData.transcriptPath);
    } else {
      sheet.getRange(rowIndex, 5).setValue("Transcription completed but no path received.");
    }
  } catch (error) {
    Logger.log("Error transcribing video: " + error.toString());
    sheet.getRange(rowIndex, 5).setValue("Error: Failed to transcribe");
  } 
}
