function dataloop_tabledata()
{
  //Runs the "Orders_C" tested application.
  TestedApps.Orders_C.Run(1, true);
  Project.Variables.dataloop_order.Iterator.Reset();
  for(; !Project.Variables.dataloop_order.Iterator.IsEOF();)
  {
    //Moves the mouse cursor to the menu item specified and then simulates a single click.
    Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
    //Clicks the 'Customer' object.
    Aliases.Orders.OrderForm.Group.Customer.Click(72, 9);
    //Enters the text KeywordTests.dataloop_tabledata.Variables.dataloop_order("CusName_dataloop") in the 'Customer' text editor.
    Aliases.Orders.OrderForm.Group.Customer.SetText(Project.Variables.dataloop_order.Iterator.Value("CusName_dataloop"));
    //Clicks the 'Street' object.
    Aliases.Orders.OrderForm.Group.Street.Click(77, 7);
    //Enters the text KeywordTests.dataloop_tabledata.Variables.dataloop_order("Street") in the 'Street' text editor.
    Aliases.Orders.OrderForm.Group.Street.SetText(Project.Variables.dataloop_order.Iterator.Value("Street"));
    //Clicks the 'State' object.
    Aliases.Orders.OrderForm.Group.State.Click(71, 12);
    //Enters the text KeywordTests.dataloop_tabledata.Variables.dataloop_order("State") in the 'State' text editor.
    Aliases.Orders.OrderForm.Group.State.SetText(Project.Variables.dataloop_order.Iterator.Value("State"));
    //Clicks the 'City' object.
    Aliases.Orders.OrderForm.Group.City.Click(59, 3);
    //Enters the text KeywordTests.dataloop_tabledata.Variables.dataloop_order("City") in the 'City' text editor.
    Aliases.Orders.OrderForm.Group.City.SetText(Project.Variables.dataloop_order.Iterator.Value("City"));
    //Clicks the 'Zip' object.
    Aliases.Orders.OrderForm.Group.Zip.Click(41, 17);
    //Enters the text KeywordTests.dataloop_tabledata.Variables.dataloop_order("Zip") in the 'Zip' text editor.
    Aliases.Orders.OrderForm.Group.Zip.SetText(Project.Variables.dataloop_order.Iterator.Value("Zip"));
    //Clicks the 'CardNo' object.
    Aliases.Orders.OrderForm.Group.CardNo.Click(67, 4);
    //Enters the text KeywordTests.dataloop_tabledata.Variables.dataloop_order("CardNo") in the 'CardNo' text editor.
    Aliases.Orders.OrderForm.Group.CardNo.SetText(Project.Variables.dataloop_order.Iterator.Value("CardNo"));
    //Clicks the 'ButtonOK' button.
    Aliases.Orders.OrderForm.ButtonOK.ClickButton()
    //Moves the mouse cursor to the menu item specified and then simulates a single click.
    //Aliases.Orders.MainForm.MainMenu.Click("File|Save As...");
    //Enters the text KeywordTests.dataloop_tabledata.Variables.filename in the 'ComboBox' text editor.
    //Aliases.Orders.dlgSaveAs.DUIViewWndClassName.Explorer_Pane.FloatNotifySink.ComboBox.SetText(Project.Variables.filename);
    //Clicks the 'Edit' object.
    //Aliases.Orders.dlgSaveAs.DUIViewWndClassName.Explorer_Pane.FloatNotifySink.ComboBox.Edit.Click(57, 7);
    //Clicks the 'btnSave' button.
    //Aliases.Orders.dlgSaveAs.btnSave.ClickButton();
    Project.Variables.dataloop_order.Iterator.Next();
  }
}