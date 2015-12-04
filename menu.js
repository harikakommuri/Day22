$(document).ready(function() {
  $("#bars").hover(function() {
    $(".sidebar").toggle();
  });
  /*to dispaly file menu*/
  $("#file").click(function() {
    var table = $("<table></table>");
    table.attr("id","fileMenu");
    var open = $("<tr></tr>");
    open.append("<td>Open</td>");
    table.append(open);
    var save = $("<tr></tr>");
    save.append("<td>Save</td>");
    table.append(save);
    var saveas = $("<tr></tr>");
    saveas.append("<td>SaveAs</td>");
    table.append(saveas);
    var exit = $("<tr></tr>");
    exit.append("<td>Exit</td>");
    table.append(exit);
    $("#file").append(table);
  });
  $("#file").mouseleave(function() {
    $("table").remove();
  });
  /*to Display edit menu*/
  $("#view").click(function() {
    $("#view").attr("disableOnClick","true");
    var table = $("<table></table>");
    var reload = $("<tr></tr>");
    reload.append("<td>Reload</td>");
    table.append(reload);
    var increasefontsize = $("<tr></tr>");
    increasefontsize.append("<td>Increase Fontsize</td>");
    table.append(increasefontsize);
    var decreasefontsize = $("<tr></tr>");
    decreasefontsize.append("<td>Decrease Fontsize</td>");
    table.append(decreasefontsize);
    var resetFontsize = $("<tr></tr>");
    resetFontsize.append("<td>Reset Fontsize</td>");
    table.append(resetFontsize);
    var redo = $("<tr></tr>");
    redo.append("<td>Redo</td>");
    table.append(redo);
    $("#view").append(table);
  });
  $("#view").mouseleave(function() {
    $("table").remove();
  });
  $("#edit").click(function() {
    $("#edit").attr("disableOnClick","true");
    var table = $("<table></table>");
    var cut = $("<tr></tr>");
    cut.append("<td>Cut</td>");
    table.append(cut);
    var copy = $("<tr></tr>");
    copy.append("<td>Copy</td>");
    table.append(copy);
    var paste = $("<tr></tr>");
    paste.append("<td>Paste</td>");
    table.append(paste);
    var undo = $("<tr></tr>");
    undo.append("<td>Undo</td>");
    table.append(undo);
    var redo = $("<tr></tr>");
    redo.append("<td>Redo</td>");
    table.append(redo);
    $("#edit").append(table);
  });
  $("#edit").mouseleave(function() {
    $("table").remove();
  });
  $("#history").click(function() {
    $("#history").attr("disableOnClick","true");
    var table = $("<table></table>");
    var showAllHistory = $("<tr></tr>");
    showAllHistory.append("<td>Show All History</td>");
    table.append(showAllHistory);
    var clearHistory = $("<tr></tr>");
    clearHistory.append("<td>Clear History</td>");
    table.append(clearHistory);
    $("#history").append(table);
  });
  $("#history").mouseleave(function() {
    $("table").remove();
  });
  $("#help").click(function() {
    $("#help").attr("disableOnClick","true");
    var table = $("<table></table>");
    var reportIssue = $("<tr></tr>");
    reportIssue.append("<td>Report Issue</td>");
    table.append(reportIssue);
    var searchIssue = $("<tr></tr>");
    searchIssue.append("<td>Search Issue</td>");
    table.append(searchIssue);
    $("#help").append(table);
  });
  $("#help").mouseleave(function() {
    $("table").remove();
  });
});
