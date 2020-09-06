/**
 *
 */

  function func1() {
    var input_message1 = document.getElementById("input_MailAddress").value;
    var input_message2 = document.getElementById("input_Password").value;
    input_message1 = "入力された内容は「" + input_message1 + "」です。";
    document.getElementById("output_message").innerHTML = input_message1;
  }

function create(){
    var sqlite = require('sqlite3').verbose();
    var db = new sqlite.Database('tests.sqlite');

    db.serialize(function() {
        db.run('create table if not exists students(name text, age int)');

        var stmt = db.prepare('insert into students values(?,?)');
        stmt.run(["Tanaka", 12]);
        stmt.run(["Sato", 13]);
        stmt.finalize();
    })

    db.close();
}