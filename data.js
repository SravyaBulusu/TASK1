var data = [
    {
        name: "Sravya",
        rollnumber:"22A91A61E2",
        Branch:"AIML",
        CGPA:9.8

    },
    {
        name: "Divya",
        rollnumber:"22A91A61I0",
        Branch:"CSE",
        CGPA:9.5
    },
    {
        name: "Ram",
        rollnumber:"22a91a61k0",
        Branch:"ECE",
        CGPA:9.9
    }
];


document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById('show');
    const table = document.getElementById('mytable');
    let tableInitialized = false;

    addButton.addEventListener('click', function() {
        if (!tableInitialized) {
            table.style.display = 'table';
            fun();
            tableInitialized = true;
        } else {
            addRow1();
        }
    });


function fun() {
    var row1 = document.createElement("tr");
    var parent = document.getElementById("mytable");
    parent.appendChild(row1);

    var child1 = document.createElement("th");
    child1.innerHTML = "Name";
    console.log(child1);
    row1.appendChild(child1);

    var child1 = document.createElement("th");
    child1.innerHTML = "Rollnumber";
    console.log(child1);
    row1.appendChild(child1);

    var child1 = document.createElement("th");
    child1.innerHTML = "Branch";
    console.log(child1);
    row1.appendChild(child1);

    var child1 = document.createElement("th");
    child1.innerHTML = "CGPA";
    console.log(child1);
    row1.appendChild(child1);

    var child1 = document.createElement("th");
    child1.innerHTML = "Delete operation";
    console.log(child1);
    row1.appendChild(child1);

    var child1 = document.createElement("th");
    child1.innerHTML = "Update operation";
    console.log(child1);
    row1.appendChild(child1);




    var row2 = document.createElement("tr");
    var parent = document.getElementById("mytable");
    parent.appendChild(row2);

    var child2 = document.createElement("td");
    child2.innerHTML = data[0].name;
    console.log(child2);
    row2.appendChild(child2);

    var child2 = document.createElement("td");
    child2.innerHTML = data[0].rollnumber;
    console.log(child2);
    row2.appendChild(child2);

    var child2 = document.createElement("td");
    child2.innerHTML = data[0].Branch;
    console.log(child2);
    row2.appendChild(child2);

    var child2 = document.createElement("td");
    child2.innerHTML = data[0].CGPA;
    console.log(child2);
    row2.appendChild(child2);

    var child2 = document.createElement("td");
    row2.appendChild(child2);


    var button1=document.createElement("button");
    button1.innerHTML="delete";
    console.log(button1);
    child2.appendChild(button1);
    button1.addEventListener('click', function() {
        table.removeChild(row2);
    });

    button1.setAttribute('id','val');
    


    var child2 = document.createElement("td");
    row2.appendChild(child2);

    const button8= document.createElement('button');
    button8.innerHTML="update";
    console.log(button8);
    child2.appendChild(button8);
    // var name="";
    // var age=0;
    // var Gender="";
        button8.addEventListener('click', function() {
            // Get the parent row of the clicked button
            

            // Get the cells within the row
            let nameCell = row2.cells[0];
            let rollnumberCell = row2.cells[1];
            let BranchCell = row2.cells[2];
            let CGPACell=row2.cells[3];

            // Prompt the user to enter updated values
            let nameInput =
                prompt("Enter the updated name:",
                    nameCell.innerHTML);
            let rollnumberInput =
                prompt("Enter the updated ROLL NUMBER:",
                    rollnumberCell.innerHTML);
            let BranchInput =
                prompt("Enter the Branch:",
                    BranchCell.innerHTML
                );
                let CGPAInput =
                prompt("Enter the CGPA:",
                    CGPACell.innerHTML
                );
            

            // Update the cell contents with the new values
            nameCell.innerHTML = nameInput;
            rollnumberCell.innerHTML = rollnumberInput;
            BranchCell.innerHTML = BranchInput;
            CGPACell.innerHTML = CGPAInput;
           
        });


    button8.setAttribute('id','val1')



    var row3 = document.createElement("tr");
    var parent = document.getElementById("mytable");
    parent.appendChild(row3);

    var child3 = document.createElement("td");
    child3.innerHTML = data[1].name;
    console.log(child3);
    row3.appendChild(child3);

    var child3 = document.createElement("td");
    child3.innerHTML = data[1].rollnumber;
    console.log(child3);
    row3.appendChild(child3);

    var child3 = document.createElement("td");
    child3.innerHTML = data[1].Branch;
    console.log(child3);
    row3.appendChild(child3);

    var child3 = document.createElement("td");
    child3.innerHTML = data[1].CGPA;
    console.log(child3);
    row3.appendChild(child3);


    var child3 = document.createElement("td");
    row3.appendChild(child3);


    var button1=document.createElement("button");
    button1.innerHTML="delete";
    console.log(button1);
    child3.appendChild(button1);
    button1.addEventListener('click', function() {
        table.removeChild(row3);
    });

    button1.setAttribute('id','val');

    
    var child3 = document.createElement("td");
    row3.appendChild(child3);

    const button9= document.createElement('button');
    button9.innerHTML="update";
    console.log(button9);
    child3.appendChild(button9);
    // var name="";
    // var age=0;
    // var Gender="";
        button9.addEventListener('click', function() {
            let nameCell = row3.cells[0];
            let rollnumberCell = row3.cells[1];
            let BranchCell = row3.cells[2];
            let CGPACell=row3.cells[3];

            // Prompt the user to enter updated values
            let nameInput =
                prompt("Enter the updated name:",
                    nameCell.innerHTML);
            let rollnumberInput =
                prompt("Enter the updated ROLL NUMBER:",
                    rollnumberCell.innerHTML);
            let BranchInput =
                prompt("Enter the Branch:",
                    BranchCell.innerHTML
                );
                let CGPAInput =
                prompt("Enter the CGPA:",
                    CGPACell.innerHTML
                );
            

            // Update the cell contents with the new values
            nameCell.innerHTML = nameInput;
            rollnumberCell.innerHTML = rollnumberInput;
            BranchCell.innerHTML = BranchInput;
            CGPACell.innerHTML = CGPAInput;
           
        });

        button9.setAttribute('id','val1')
    
    var row4 = document.createElement("tr");
    var parent = document.getElementById("mytable");
    parent.appendChild(row4);

    var child4 = document.createElement("td");
    child4.innerHTML = data[2].name;
    console.log(child4);
    row4.appendChild(child4);

    var child4 = document.createElement("td");
    child4.innerHTML = data[2].rollnumber;
    console.log(child4);
    row4.appendChild(child4);

    var child4 = document.createElement("td");
    child4.innerHTML = data[2].Branch;
    console.log(child4);
    row4.appendChild(child4);

    var child4 = document.createElement("td");
    child4.innerHTML = data[2].CGPA;
    console.log(child4);
    row4.appendChild(child4);



    var child4 = document.createElement("td");
    row4.appendChild(child4);


    var button1=document.createElement("button");
    button1.innerHTML="delete";
    console.log(button1);
    child4.appendChild(button1);
    button1.addEventListener('click', function() {
        table.removeChild(row4);
    });

    button1.setAttribute('id','val');

    var child4 = document.createElement("td");
    row4.appendChild(child4);

    const button5= document.createElement('button');
    button5.innerHTML="update";
    console.log(button5);
    child4.appendChild(button5);


    button5.addEventListener('click', function() {
        // Get the parent row of the clicked button
        

        // Get the cells within the row
        let nameCell = row4.cells[0];
        let rollnumberCell = row4.cells[1];
        let BranchCell = row4.cells[2];
        let CGPACell=row4.cells[3];

        // Prompt the user to enter updated values
        let nameInput =
            prompt("Enter the updated name:",
                nameCell.innerHTML);
        let rollnumberInput =
            prompt("Enter the updated ROLL NUMBER:",
                rollnumberCell.innerHTML);
        let BranchInput =
            prompt("Enter the Branch:",
                BranchCell.innerHTML
            );
            let CGPAInput =
            prompt("Enter the CGPA:",
                CGPACell.innerHTML
            );
        

        // Update the cell contents with the new values
        nameCell.innerHTML = nameInput;
        rollnumberCell.innerHTML = rollnumberInput;
        BranchCell.innerHTML = BranchInput;
        CGPACell.innerHTML = CGPAInput;
       
    });
    button5.setAttribute('id','val1')

    // var row5 = document.createElement("tr");
    // var parent=document.getElementById("mytable");
    // parent.appendChild(row5);

    // var child5=document.createElement("th");
    // child5.innerHTML=data[3].name;
    // console.log(child5);
    // row5.appendChild(child5);

    // var child5=document.createElement("th");
    // child5.innerHTML=data[3].age;
    // console.log(child5);
    // row5.appendChild(child5);

    // var child5=document.createElement("th");
    // child5.innerHTML=data[3].Gender;
    // console.log(child5);
    // row5.appendChild(child5);


    // var mybutton = document.createElement("button");
    // mybutton.innerHTML="add";
    // console.log(mybutton);
    // document.body.appendChild(mybutton);

    // mybutton.addEventListener("click", addRow);
    // function addToDoItem() {
    //     alert("Add button clicked!");
    //   }

  //  document.getElementById("show").addEventListener("click",addRow);
//      document.getElementById("show").innerHTML="add";

//      if(document.getElementById("show").innerHTML=="add"){
//         document.getElementById("show").onclick="addRow()";
//      }
//      function addRow()  
//    {  
//     var mytable =  document.getElementById("mytable");  
//     var rows = mytable.rows.length;  
//     var r = mytable.insertRow(rows);  
//     var c1 = r.insertCell(0);  
//     var c2 = r.insertCell(1);  
//     var c3 = r.insertCell(2);  
//     var name = document.createElement("input");  
//     var age = document.createElement("input");  
//     var Gender = document.createElement("input");  
//     Gender.type = "text";  
//     age.type = "number";  
//     name.type = "text";  
//     c1.appendChild(name);  
//     c2.appendChild(age);  
//     c3.appendChild(Gender);  
//    }  

}
function addRow1()  
   {  
    // var mytable =  document.getElementById("mytable");      
    // var rows = mytable.rows.length;  
    // var r = mytable.insertRow(rows);  
    // var c1 = r.insertCell(0);  
    // var c2 = r.insertCell(1);  
    // var c3 = r.insertCell(2);  
    // var name = document.createElement("input");
    var name=window.prompt("Enter name"); 
    var rollnumber=window.prompt("Enter rollnumber"); 
    var Branch=window.prompt("Enter branch"); 
    var CGPA=window.prompt("Enter CGPA")
    if (name && rollnumber&& Branch && CGPA) {
        addRow(name, rollnumber, Branch,CGPA);
    }


    // // var age = document.createElement("input");  
    // // var Gender = document.createElement("input");  
    // // Gender.type = "text";  
    // // age.type = "number";  
    // // name.type = "text";  
    // c1=name;
    // c2=age;  
    // c3=Gender;  
   }  

function addRow(name, rollnumber, Branch,CGPA) {
    var mytable =  document.getElementById("mytable");  
    const newRow = document.createElement('tr');
    mytable.appendChild(newRow);

    const nameCell = document.createElement('td');
    nameCell.textContent = name;
    newRow.appendChild(nameCell);

    const rollnumberCell = document.createElement('td');
    rollnumberCell.textContent = rollnumber;
    newRow.appendChild(rollnumberCell);

    const BranchCell = document.createElement('td');
    BranchCell.textContent = Branch;
    newRow.appendChild(BranchCell);

    const CGPACell = document.createElement('td');
    CGPACell.textContent = CGPA;
    newRow.appendChild(CGPACell);



    var child6 = document.createElement("td");
    newRow.appendChild(child6);

    var button2=document.createElement("button");
    button2.innerHTML="delete";
    console.log(button2);
    child6.appendChild(button2);
    button2.addEventListener('click', function() {
        table.removeChild(newRow);
    });

    button2.setAttribute('id','val');

    var child7 = document.createElement("td");
    newRow.appendChild(child7);

    const button3 = document.createElement('button');
    button3.setAttribute('id','val1');
    button3.innerHTML="update";
    console.log(button3);
    child7.appendChild(button3);
        button3.addEventListener('click', function() {
            const newName = prompt("Enter new name:", name);
            const newrollnumber = prompt("Enter new age:",rollnumber);
            const newBranch = prompt("Enter new gender:", Branch);
            const newCGPA = prompt("Enter new gender:", CGPA);

            if (newName && newrollnumber && newBranch && newCGPA) {
                nameCell.textContent = newName;
                rollnumberCell.textContent = newrollnumber;
                BranchCell.textContent = newBranch;
                CGPACell.textContent = newCGPA;

            }
        });

    
}
});



