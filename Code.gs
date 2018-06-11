function onOpen() {
  SpreadsheetApp.getUi()
  .createMenu('Advanced')
  .addItem('Create a Doc', 'showDialog')
  .addItem('Build','bFields')
  .addToUi();
}


function showDialog(){
var html = HtmlService.createHtmlOutputFromFile('picker');
  html.setSandboxMode(HtmlService.SandboxMode.IFRAME)
  .setWidth(800)
  .setHeight(600);
  SpreadsheetApp.getUi()
  .showModalDialog(html, 'Create Maker');
}


function bFields(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("list");
  sheet.deleteRows(2,sheet.getLastRow());
var gContents = DriveApp.getFoldersByName('_Templates').next().getFilesByType(MimeType.GOOGLE_DOCS);
  while(gContents.hasNext()){  
    var file = gContents.next();
    var data = [file.getId(), file.getName(),"","https://docs.google.com/document/d/"+file.getID()+"/edit"];
    sheet.appendRow(data);
      
  }
}

function removeDup(array){

  var index = {};
  
}

function firstApp(){
var welcomemessage = "Hello World";
  for (var x = 0; x<10;x++){
    Logger.log(welcomemessage);
  }
}

function getFolder(){
DriveApp.getFolderById('1PL4i-aXSQEczBIqSsbDWqxmjW-kbRn2O');
}

function createFilesInFolder() {
  // This names the folder
  var folder = DriveApp.getFolderById('1PL4i-aXSQEczBIqSsbDWqxmjW-kbRn2O');

 //This creates a file in the folder
  var file = folder.createFile('My File.txt', 
                               'Lorem ipsum', 
                               MimeType.PLAIN_TEXT);
  var id = file.getId();
  var name = file.getName()
  Logger.log(name);
}
