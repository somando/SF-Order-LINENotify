function myFunction() {
  const sp = SpreadsheetApp.getActiveSheet();
  const sss = SpreadsheetApp.openById("1eIEKm6llI-Et0nIayWhDebgG8ApHulWmstUw5FSks0U");
  const ss = sss.getActiveSheet();
  let row = sp.getLastRow();

  let table = sp.getRange('b' + row).getValue();
  let milkTeas = sp.getRange('c' + row).getValue();
  let oranges = sp.getRange('d' + row).getValue();
  let colas = sp.getRange('e' + row).getValue();
  let melons = sp.getRange('f' + row).getValue();
  let apples = sp.getRange('g' + row).getValue();
  let milkTeam = sp.getRange('i' + row).getValue();
  let orangem = sp.getRange('j' + row).getValue();
  let colam = sp.getRange('k' + row).getValue();
  let melonm = sp.getRange('l' + row).getValue();
  let applem = sp.getRange('m' + row).getValue();
  let pancake = sp.getRange('o' + row).getValue();
  let cheese = sp.getRange('p' + row).getValue();
  let potato = sp.getRange('q' + row).getValue();
  let ice = sp.getRange('r' + row).getValue();
  let set1 = sp.getRange('s' + row).getValue();
  let set2 = sp.getRange('t' + row).getValue();
  let detail = sp.getRange('u' + row).getValue();
  let total = 0;
  let drinks = 100;
  let drinkm = 200;
  let cake = 300;
  let ch = 200;
  let po = 200;
  let ic = 150;
  let se1 = 500;
  let se2 = 700;
  var a = ss.getRange("B1").getValue();
  var b = ss.getRange("B2").getValue();
  var c = ss.getRange("B3").getValue();
  var d = ss.getRange("B4").getValue();
  var e = ss.getRange("B5").getValue();
  var f = ss.getRange("E1").getValue();
  var g = ss.getRange("E2").getValue();
  var h = ss.getRange("E3").getValue();
  var i = ss.getRange("E4").getValue();

  let body = table + '番卓\n\nメニュー';
  let bodies = table + "番卓\n\nメニュー";

  if (milkTeas !== '') {
    body += "\n・ミルクティーS　";
    body += milkTeas;
    body += "点";
    total += drinks * milkTeas;
    bodies += "\n・ミルクティーS\n　";
    bodies += drinks;
    bodies += "円 × ";
    bodies += milkTeas;
    bodies += "点　";
    a -= 200;
  }
  if (oranges !== '') {
    body += "\n・オレンジジュースS　";
    body += oranges;
    body += "点";
    total += drinks * oranges;
    bodies += "\n・オレンジジュースS\n　";
    bodies += drinks;
    bodies += "円 × ";
    bodies += oranges;
    bodies += "点　";
    b -= 200
  }
  if (colas !== '') {
    body += "\n・コーラS　";
    body += colas;
    body += "点";
    total += drinks * colas;
    bodies += "\n・コーラS\n　";
    bodies += drinks;
    bodies += "円 × ";
    bodies += colas;
    bodies += "点　";
    c -= 200
  }
  if (melons !== '') {
    body += "\n・メロンソーダS　";
    body += melons;
    body += "点";
    total += drinks * melons;
    bodies += "\n・メロンソーダS\n　";
    bodies += drinks;
    bodies += "円 × ";
    bodies += melons;
    bodies += "点　";
    d -= 200;
  }
  if (apples !== '') {
    body += "\n・りんごジュースS　";
    body += apples;
    body += "点";
    total += drinks * apples;
    bodies += "\n・りんごジュースS\n　";
    bodies += drinks;
    bodies += "円 × ";
    bodies += apples;
    bodies += "点　";
    e -= 200;
  }
  if (milkTeam !== '') {
    body += "\n・ミルクティーM　";
    body += milkTeam;
    body += "点";
    total += drinkm * milkTeam;
    bodies += "\n・ミルクティーM\n　";
    bodies += drinkm;
    bodies += "円 × ";
    bodies += milkTeam;
    bodies += "点　";
    a -= 300;
  }
  if (orangem !== '') {
    body += "\n・オレンジジュースM　";
    body += orangem;
    body += "点";
    total += drinkm * orangem;
    bodies += "\n・オレンジジュースM\n　";
    bodies += drinkm;
    bodies += "円 × ";
    bodies += orangem;
    bodies += "点　";
    b -= 300;
  }
  if (colam !== '') {
    body += "\n・コーラM　";
    body += colam;
    body += "点";
    total += drinkm * colam;
    bodies += "\n・コーラM\n　";
    bodies += drinkm;
    bodies += "円 × ";
    bodies += colam;
    bodies += "点　";
    c -= 300;
  }
  if (melonm !== '') {
    body += "\n・メロンソーダM　";
    body += melonm;
    body += "点";
    total += drinkm * melonm;
    bodies += "\n・メロンソーダM\n　";
    bodies += drinkm;
    bodies += "円 × ";
    bodies += melonm;
    bodies += "点　";
    d -= 300;
  }
  if (applem !== '') {
    body += "\n・りんごジュースM　";
    body += applem;
    body += "点";
    total += drinkm * applem;
    bodies += "\n・りんごジュースM\n　";
    bodies += drinkm;
    bodies += "円 × ";
    bodies += applem;
    bodies += "点　";
    e -= 300;
  }
  if (pancake !== '') {
    body += "\n・パンケーキ　";
    body += pancake;
    body += "点";
    total += cake * pancake;
    bodies += "\n・パンケーキ\n　";
    bodies += cake;
    bodies += "円 × ";
    bodies += pancake;
    bodies += "点　";
    f -= 2;
  }
  if (cheese !== '') {
    body += "\n・チーズハットグ　";
    body += cheese;
    body += "点";
    total += ch * cheese;
    bodies += "\n・チーズハットグ\n　";
    bodies += ch;
    bodies += "円 × ";
    bodies += cheese;
    bodies += "点　";
    g -= 3;
  }
  if (potato !== '') {
    body += "\n・ポテト　";
    body += potato;
    body += "点";
    total += po * potato;
    bodies += "\n・ポテト\n　";
    bodies += po;
    bodies += "円 × ";
    bodies += potato;
    bodies += "点　";
    h -= 1;
  }
  if (ice !== '') {
    body += "\n・アイス　";
    body += ice;
    body += "点";
    total += ic * ice;
    bodies += "\n・アイス\n　";
    bodies += ic;
    bodies += "円 × ";
    bodies += ice;
    bodies += "点　";
    i -= 150;
  }
  if (set1 !== '') {
    body += "\n・チーズハットグ×ポテト セット　";
    body += set1;
    body += "点";
    total += se1 * set1;
    bodies += "\n・チーズハットグ×ポテト セット\n　";
    bodies += se1;
    bodies += "円 × ";
    bodies += set1;
    bodies += "点　";
    h -= 1;
    g -= 5;
  }
  if (set2 !== '') {
    body += "\n・パンケーキ×アイス セット　";
    body += set2;
    body += "点";
    total += se2 * set2;
    bodies += "\n・パンケーキ×アイス セット\n　";
    bodies += se2;
    bodies += "円 × ";
    bodies += set2;
    bodies += "点　";
    f -= 5;
    i -= 150;
  }
  body += "\n\n詳細\n　"
  if (detail === '') {
    body += "なし";
  } else {
    body += detail;
  }
  
  const token = 'IDv8VTI5g9fcyqQNYoRvK2vHOWKmyBOYAZj6PT0kbr2';
  const lineNotifyApi = 'https://notify-api.line.me/api/notify';

  let message = body;

  const options =
   {
      "method"  : "post",
      "payload" : {"message": message},
      "headers" : {"Authorization":"Bearer " + token}
   };

   UrlFetchApp.fetch(lineNotifyApi, options);

  const toke = 'eycuH1a128lLDRDheXJAXbZQqovZN4QSmRq5muqUDit';
  const lineNotifyAp = 'https://notify-api.line.me/api/notify';

  let messages = bodies + "\n\n合計 " + total + "円";

  const option =
   {
      "method"  : "post",
      "payload" : {"message": messages},
      "headers" : {"Authorization":"Bearer " + toke}
   };

   UrlFetchApp.fetch(lineNotifyApi, option);

  ss.getRange("B1").setValue(a);
  ss.getRange("B2").setValue(b);
  ss.getRange("B3").setValue(c);
  ss.getRange("B4").setValue(d);
  ss.getRange("B5").setValue(e);
  ss.getRange("E1").setValue(f);
  ss.getRange("E2").setValue(g);
  ss.getRange("E3").setValue(h);
  ss.getRange("E4").setValue(i);
}
