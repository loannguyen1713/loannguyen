function set_file_name()
{
  var fileName = aqConvert.DateTimeToFormatStr(aqDateTime.Now(), "%H-%M-%S") + '.tbl';
  Aliases.Orders.dlgSaveAs.DUIViewWndClassName.Explorer_Pane.FloatNotifySink.ComboBox.Edit.wText = fileName;
}