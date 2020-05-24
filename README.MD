# Brite Chart Custom Viz

## Current Status
- Currently returning a blank custom viz as the full library appears to call out to 3rd parties eg Fonts. If we can find a way to make the entire library run within the JS library, then it should work fine. 


### How to build 
1. Create a Google Cloud Storage Bucket 
2. Create a subfolder - eg brite
3. Copy the files to the Google Cloud Bucket subfolder ( you can use this command `gsutil cp -a public-read * gs://{YOUR CLOUDNAME}/brite/`)
4. Update the file references in the `manifest.json` file to point to the new locations in the new bucket. ( you can find them in the Google Cloud interface) it willl probably be `gs://{YOUR CLOUDNAME}/brite/`
5. Re-Copy the files to the Google Cloud Bucket subfolder ( including the new manifest references). You can use this command `gsutil cp -a public-read * gs://{YOUR CLOUDNAME}/brite/`)

### How to update the code
1. Make any changes you need to in the `briteSource.js' file. This is where your code lives
2. Compile the JS files into one file. You do this by merging it with the dscc.min.js file as well as any libraries followed by your new britesource.js changes. ( command in terminal is `cat dscc.min.js d3selection.js bar.min.js briteSource.js > brite.js`)


### How to see your Custom viz in your data studio report
1. create a new Datastudio report ( go to https://datastudio.google.com/reporting/) 
2. Add a sample data set - you can create a simple one using Google Sheets ( copy this one https://docs.google.com/spreadsheets/d/1KPgnVJGMHJc_i2zTXpSdg4r0RD9BoO85qw7anPWhupg/edit#gid=1037523648)
3. Click Add data source, then select sheets, then select the copy of the Google Sheet Above
4. Now it's time to add your custom viz - Click on the button in the toolbar ( next to "add a chart") that looks like a button with a plus sign and several shapes
5. Click Explore more
6. Click "Build your own vizualization"
7. Paste your Google Cloud bucket and folder name into the "Manifest path" text field and press submit. ( it should look like : `gs://{YOUR CLOUDNAME}/brite/`)