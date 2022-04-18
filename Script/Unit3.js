function newOrder()
{
  //Runs the "Orders_C" tested application.
  TestedApps.Orders_C.Run(1, true);
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
  //Drags the 'OrderForm' object.
  Aliases.Orders.OrderForm.Drag(57, 19, -99, 71);
  //Selects the 'ScreenSaver' item of the 'ProductNames' combo box.
  Aliases.Orders.OrderForm.Group.ProductNames.ClickItem("ScreenSaver");
  //Sets the value of the UpDown control 'Quantity' to 2.
  Aliases.Orders.OrderForm.Group.Quantity.wValue = 2;
  //Clicks the 'Price' object.
  Aliases.Orders.OrderForm.Group.Price.Click(38, 7);
  //Enters the text '$100' in the 'Price' text editor.
  Aliases.Orders.OrderForm.Group.Price.SetText("$100");
  //Clicks the 'Discount' object.
  Aliases.Orders.OrderForm.Group.Discount.Click(15, 6);
  //Enters the text '10%' in the 'Discount' text editor.
  Aliases.Orders.OrderForm.Group.Discount.SetText("10%");
  //Enters '[Tab]' in the 'Discount' object.
  Aliases.Orders.OrderForm.Group.Discount.Keys("[Tab]");
  OCR.Recognize(Aliases.Orders.OrderForm.Group).BlockByText("Screen").Click();
  //Sets the date '5/6/2009' in the 'Date' date/time picker.
  Aliases.Orders.OrderForm.Group.Date.wDate = "5/6/2009";
  //Clicks the 'Customer' object.
  Aliases.Orders.OrderForm.Group.Customer.Click(62, 13);
  //Enters the text 'loan' in the 'Customer' text editor.
  Aliases.Orders.OrderForm.Group.Customer.SetText("loan");
  //Clicks the 'Street' object.
  Aliases.Orders.OrderForm.Group.Street.Click(54, 1);
  //Clicks the 'Street' object.
  Aliases.Orders.OrderForm.Group.Street.Click(60, 11);
  //Enters the text '123 le duan' in the 'Street' text editor.
  Aliases.Orders.OrderForm.Group.Street.SetText("123 le duan");
  //Clicks the 'State' object.
  Aliases.Orders.OrderForm.Group.State.Click(78, 9);
  //Enters the text '144' in the 'State' text editor.
  Aliases.Orders.OrderForm.Group.State.SetText("144");
  //Clicks the 'City' object.
  Aliases.Orders.OrderForm.Group.City.Click(44, 6);
  //Enters the text 'test' in the 'City' text editor.
  Aliases.Orders.OrderForm.Group.City.SetText("test");
  //Clicks the 'Zip' object.
  Aliases.Orders.OrderForm.Group.Zip.Click(90, 9);
  //Enters the text '70000' in the 'Zip' text editor.
  Aliases.Orders.OrderForm.Group.Zip.SetText("70000");
  //Clicks the 'MasterCard' button.
  Aliases.Orders.OrderForm.Group.MasterCard.ClickButton();
  //Clicks the 'CardNo' object.
  Aliases.Orders.OrderForm.Group.CardNo.Click(32, 7);
  //Enters the text '676767676766' in the 'CardNo' text editor.
  Aliases.Orders.OrderForm.Group.CardNo.SetText("676767676766");
  //Sets the date '4/6/2022' in the 'ExpDate' date/time picker.
  Aliases.Orders.OrderForm.Group.ExpDate.wDate = "4/6/2022";
  //Clicks the 'OrderForm' object.
  Aliases.Orders.OrderForm.Click(296, 455);
  //Clicks the 'ButtonOK' button.
  Aliases.Orders.OrderForm.ButtonOK.ClickButton();
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("File|Save As...");
  //Clicks the 'Edit' object.
  Aliases.Orders.dlgSaveAs.DUIViewWndClassName.Explorer_Pane.FloatNotifySink.ComboBox.Edit.Click(88, 6);
  //Enters the text '123.tbl' in the 'ComboBox' text editor.
  Aliases.Orders.dlgSaveAs.DUIViewWndClassName.Explorer_Pane.FloatNotifySink.ComboBox.SetText("123.tbl");
  //Clicks the 'btnSave' button.
  Aliases.Orders.dlgSaveAs.btnSave.ClickButton();
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("File|Exit");
}