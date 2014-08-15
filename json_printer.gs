function doGet(request) {
  var doc = SpreadsheetApp.openById(request.parameters.id);
  var sheets = doc.getSheets();
  var sheet = sheets[0];
  var froze = sheet.getFrozenRows();
  var h = sheet.getLastRow();
  var l = sheet.getLastColumn();
  var headers = sheet.getRange(1,1,1,l).getValues();
  var obj = {};
  obj.columns = [];
  for (var i = 0; i < l; i++) {
    obj.columns.push(headers[0][i]);
  }
  obj.data = [];
  var data = sheet.getRange(1,1,h,l).getValues();
  for (var i = froze; i < h; i++) {
    var row = [];
    for (var j = 0; j < l; j++) {
      row.push(data[i][j]);
    }
    obj.data.push(row);
  }
  Logger.log(obj)
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}


function test() {
  var request = {};
  request.parameters = {};
  request.parameters.id = ''; //Your sheet ID
  doGet(request);
}