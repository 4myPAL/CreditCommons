function doGet() {
  var app = UiApp.createApplication().setTitle("**List Name**").setStyleAttribute("margin", "1em auto").setStyleAttribute('width', '95%');
  app.add(app.createHTML("**List Name**").setStyleAttributes({fontFamily: "Georgia, serif", fontWeight: "bold", color: "#384C80", fontSize: "2em", marginBottom: ".1em"}));
  
  var panel= app.createVerticalPanel();
    
  //get the contacts
  var contacts = ContactsApp.getContactsByGroup(ContactsApp.getContactGroup("**Contact Group Name**"));
   
  //sort the contacts
  var tempcontacts = new Array(contacts.length-1);
  for (i=0; i<contacts.length; i++) {
    tempcontacts[i] = new Array(6);
    try {tempcontacts[i][0] = contacts[i].getGivenName();} catch(err) {tempcontacts[i][0] =''};
    try {tempcontacts[i][1] = contacts[i].getFamilyName();} catch(err) {tempcontacts[i][1] =''};
    try {tempcontacts[i][2] = contacts[i].getEmails()[0].getAddress();} catch(err) {tempcontacts[i][2] =''};
    try {tempcontacts[i][3] = contacts[i].getPhones(ContactsApp.Field.HOME_PHONE)[0].getPhoneNumber();} catch(err) {tempcontacts[i][3] =''};
    try {tempcontacts[i][4] = contacts[i].getPhones(ContactsApp.Field.WORK_PHONE)[0].getPhoneNumber();} catch(err) {tempcontacts[i][4] =''};
    try {tempcontacts[i][5] = contacts[i].getPhones(ContactsApp.Field.MOBILE_PHONE)[0].getPhoneNumber();} catch(err) {tempcontacts[i][5] =''};
    try {tempcontacts[i][6] = contacts[i].getAddresses()[0].getAddress();} catch(err) {tempcontacts[i][6] =''};
  }
  
 var sorted_contacts = ArrayLib.sort(tempcontacts,0,true);
 
  
  //Create grid to hold the contacts data, styles set <table> inline styles
  var grid = app.createGrid(sorted_contacts.length+1,6)
      .setBorderWidth(1)
      .setCellPadding(5)
      .setCellSpacing(0)
      .setStyleAttributes({marginBottom: "3em", borderCollapse: "collapse", borderBottom: "5px solid #D1E2FF", borderTop: "5px solid #D1E2FF", borderLeft: "0px solid #fff", borderRight: "0px solid #fff"});
 
  
  //Create the header row
  var myHeaderStyles = {fontFamily: "Verdana, sans-serif", fontWeight: "bold", color: "#384C80"};
  grid.setWidget(0, 0, app.createLabel('Name').setStyleAttributes(myHeaderStyles))
    .setWidget(0, 1, app.createLabel('Email').setStyleAttributes(myHeaderStyles))
    .setWidget(0, 2, app.createLabel('Home').setStyleAttributes(myHeaderStyles))
    .setWidget(0, 3, app.createLabel('Work').setStyleAttributes(myHeaderStyles))
    .setWidget(0, 4, app.createLabel('Mobile').setStyleAttributes(myHeaderStyles))
    .setWidget(0, 5, app.createLabel('Address').setStyleAttributes(myHeaderStyles))
  
  var myHeaderBorderStyles = {borderCollapse: "collapse", borderBottom: "1px solid #D1E2FF", borderTop: "5px solid #D1E2FF", borderLeft: "0px solid #fff", borderRight: "0px solid #fff"};
  
  //apply styles to all header cells
  for (i=0; i<6; i++) { grid.setStyleAttributes(0, i, myHeaderBorderStyles); }
  
  //Define styles in variables
  var myLabelStyles = {fontFamily: "Verdana, sans-serif", color: "#2E2E2E"};
  var abcCellBorderStyles = {borderCollapse: "collapse", borderBottom: "1px solid #D1E2FF", borderTop: "1px solid #D1E2FF", borderLeft: "0px solid #fff", borderRight: "0px solid #fff"};
    
  //Write all the contacts in grid/table
  for (var i=0; i<sorted_contacts.length; i++){
    
    //Display the first name + surname or just the surname
    if(sorted_contacts[i][0]!='') grid.setWidget(i+1, 0, app.createLabel(sorted_contacts[i][0]+' '+sorted_contacts[i][1]).setStyleAttributes(myLabelStyles));
    else
    grid.setWidget(i+1, 0, app.createLabel(sorted_contacts[i][1]).setStyleAttributes(myLabelStyles));
    
    //Display the rest of the fields
    grid.setWidget(i+1, 1, app.createLabel(sorted_contacts[i][2]).setStyleAttributes(myLabelStyles));
    grid.setWidget(i+1, 2, app.createLabel(sorted_contacts[i][3]).setStyleAttributes(myLabelStyles));
    grid.setWidget(i+1, 3, app.createLabel(sorted_contacts[i][4]).setStyleAttributes(myLabelStyles));
    grid.setWidget(i+1, 4, app.createLabel(sorted_contacts[i][5]).setStyleAttributes(myLabelStyles));
    grid.setWidget(i+1, 5, app.createLabel(sorted_contacts[i][6]).setStyleAttributes(myLabelStyles));
    
    //Apply styles to all the cells
    for (var j=0; j<6; j++) { grid.setStyleAttributes(i+1, j, abcCellBorderStyles); }
   
  }
  
  //add the grid/table to the panel
  panel.add(grid);
  
  //add the panel to the application
  app.add(panel);
  return app;
}

