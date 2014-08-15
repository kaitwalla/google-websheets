google-websheets
================

Take a Google Sheets document and easily feed it to [DataTables](http://www.datatables.net/) (without using Publish to Web)

##Background/info

We love Google Sheets — we have Google Apps for Business, we do almost all of work in the cloud, and as a publisher, we'd like to use the same tools for the work we present to the public.

Slight snag, that — our corporate policy does not allow using "Publish to Web" for any documents.

So, rather than have everyone store their projects in personal accounts (which we would either need to wrangle from them or lose when they leave), here's a handly little Google Apps Script that will allow you to free the sheets and use DataTables to make 'em all pretty and searchable.

The example file links to the Google jQuery CDN and the DataTables CDN for its Javascript and CSS. 

##Note on accounts

We're setting up a system where there's one account outside the wall that will be given ownership of docs by the people creating them — you could also copy this script over to each invididual account, but this seemed easiest.

##Usage

Take the code from `json_printer.gs` and paste it into a new [Google Apps Script](http://script.google.com) file. Go to Publish > Deploy as Web App. You will need to save a version of the script first, then change "who has access to the app" to "Anyone, even anonymous." Hit Publish.

In the script window, go to the Run menu and hit "test." The script will ask you to authorize it to manage your Sheets — you need to allow it. Now you're ready to go — just go back to Publish > Deploy as web app and copy the current web app URL.

Using the example script in `index.html`, paste the URL into the `url` property under `$.ajax`. Change the `var id` to the ID of the Google Sheet you're trying to implement, and you're ready to go.



Make sure you're including jQuery and DataTables before your script.
