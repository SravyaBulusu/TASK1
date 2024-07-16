let cRow = 0;
let cCol = 0;
let isGameRunning = true;
// function startGame() {
//   // const table = document.getElementById('randomTable');
//   // table.innerHTML = '';  // Clear any existing table
//   var n = parseInt(prompt("Enter the number of rows and columns: "), 10);
//   if (n == 0) {
//     alert("Enter another number other than zero.!!!");
//   }
//   cRow = 0;
//   cCol = 0;
//   isGameRunning = true;
//   fun(n);
// }
function fun() {
  var n = window.prompt("Enter n value:");
  if (n == 0) {
    alert("Enter another number other than zero.!!!");
  }
  else {
    var table = document.getElementById("mytable");
    const randomRow = Math.floor(Math.random() * n);
    const randomCol = Math.floor(Math.random() * n);
    const img = document.createElement('img');
    img.src = 'https://media.istockphoto.com/id/1183701831/vector/cartoon-angry-piranha-fish-character-with-big-red-eyes-vector-mascot.jpg?s=612x612&w=0&k=20&c=FBLOQvv1kYEYkPOBmCp3nf39bMGPwKUUhuPPSQQNyYM=';
    for (var i = 0; i < n; i++) {
      var table_row = document.createElement("tr");
      for (var j = 0; j < n; j++) {
        var table_data = document.createElement("td");
        table_row.appendChild(table_data);
        if(i==randomRow && j==randomCol){
          table_data.appendChild(img);
        }
      }
      table.appendChild(table_row);
    }
    // var firstrow=table.rows[0];
    // var firstcell=firstrow.cells[0];
    document.getElementById("click").remove();


    var cell1 = table.rows[cRow].cells[cCol];
    var div2 = document.createElement('div');
    div2.className = 'block';
    cell1.appendChild(div2);



    var body = document.getElementById("body");
    var div1 = document.createElement("div");
    body.appendChild(div1);
    div1.setAttribute('id', 'div1');
    var button1 = document.createElement("button");
    button1.innerHTML = "TOP";
    div1.appendChild(button1);
    button1.setAttribute('id', 'val1');
    var button2 = document.createElement("button");
    button2.innerHTML = "BOTTOM";
    div1.appendChild(button2);
    button2.setAttribute('id', 'val2');
    var button3 = document.createElement("button");
    button3.innerHTML = "RIGHT";
    div1.appendChild(button3);
    button3.setAttribute('id', 'val3');
    var button4 = document.createElement("button");
    button4.innerHTML = "LEFT";
    div1.appendChild(button4);
    button4.setAttribute('id', 'val4');


    var z = document.createElement("div");
    body.appendChild(z);
    z.setAttribute('id','val5');
    var heading=document.createElement("div");
    heading.innerHTML="SCORE";
    z.appendChild(heading);
    heading.setAttribute('id','val6');
    var score=document.createElement("div");
    score.setAttribute('id','val7');
    z.appendChild(score);
    var sc=0;
    score.innerHTML="0";
    function move(nRow, nCol) {
      const table = document.getElementById("mytable");
      const cCell = table.rows[cRow].cells[cCol];
      const nCell = table.rows[nRow].cells[nCol];
      const div2 = cCell.querySelector('.block');
      nCell.appendChild(div2);
      cRow = nRow;
      cCol = nCol;
      sc++;
      score.innerHTML=sc;
      if(cCol==randomCol && cRow==randomRow){
        var u = document.createElement("div");
        body.appendChild(u);
        u.setAttribute('id','val9');
        
        // alert("Game ended your score is "+sc);

        div2.setAttribute("id","val");
        document.getElementById("val").style.display="none";
        var t = document.createElement("div");
        t.setAttribute('id','val8');
        body.appendChild(t);
        t.innerHTML="Game ended!! <br>your score is "+sc;
        
      }
      // if (cRow === randomRow && cCol === randomCol) {
      //   isGameRunning = false;
      //   setTimeout(() => {
      //       alert("Game ended!");
      //       startGame();
      //   }, 0); 
      // }
      // if(!isGameRunning) return;
      
    }

    document.getElementById('val1').addEventListener('click', () => {
      if (cRow > 0) move(cRow - 1, cCol);
      else alert("Cannot move top")
    });
    document.getElementById('val2').addEventListener('click', () => {
      console.log("bottom");
      if (cRow < n - 1) move(cRow + 1, cCol);
      else alert("Cannot move bottom")
    });
    document.getElementById('val3').addEventListener('click', () => {
      if (cCol < n - 1) move(cRow, cCol + 1);
      else alert("Cannot move right")

    });
    document.getElementById('val4').addEventListener('click', () => {

      if (cCol > 0) move(cRow, cCol - 1);
      else alert("Cannot move left")
    });

  }
 }