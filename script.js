//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}
var rownumber=4;
Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

 const downIcon = document.querySelectorAll('.downIcon');
 downIcon.forEach(function(downIcon) {
  downIcon.addEventListener('click', function() {
      var parentRow = downIcon.closest('.parent');
      var childRow = parentRow.nextElementSibling;

      if (childRow.style.display === 'none' || childRow.style.display === '') {
          childRow.style.display = 'table-row';
      } else {
          childRow.style.display = 'none';
      }
  });
});

function onClickCheckBox(checkBox) {
  var selectedRow = checkBox.parentElement.parentElement;
  
  if (checkBox.checked === true) {
    selectedRow.style.backgroundColor = "yellow";
    var deleteButton = document.createElement("td");
    var deleteButtonElement = document.createElement("button");
    deleteButtonElement.textContent = "Delete";
    deleteButtonElement.type = "button";
    deleteButtonElement.addEventListener("click", function() {
      onDeleteRow(selectedRow);
    });
    deleteButton.appendChild(deleteButtonElement);

    var editButton = document.createElement("td");
    var editButtonElement = document.createElement("button");
    editButtonElement.textContent = "Edit";
    editButtonElement.type = "button";
    editButtonElement.addEventListener("click", function() {
      onEditRow(selectedRow);
    });
    editButton.appendChild(editButtonElement);

    selectedRow.appendChild(deleteButton);
    selectedRow.appendChild(editButton);
  } else {
    selectedRow.style.backgroundColor = "white";
    var buttons = selectedRow.querySelectorAll("button");
    buttons.forEach(function(button) {
    button.parentNode.parentNode.removeChild(button.parentNode);
      
    });
  }
}


function onEditRow(editButton) {
  var selectedRow = editButton.closest('tr');
  var studentNumber = selectedRow.cells[1].textContent;
  document.getElementById('heading').innerHTML ='Edit details for '+studentNumber;
  var studentInfo = {
      studentName: selectedRow.cells[1].textContent,
      advisor: selectedRow.cells[2].textContent,
      budget:selectedRow.cells[6].textContent

  };
   document.getElementById("parastudent").innerHTML = "Student Name: " + studentInfo.studentName + "<br>" + "Advisor: " + studentInfo.advisor + "<br>" + "Award Status: Approved"+"<br>" + "Semester: Fall"+"<br>" + "Type: TA"+"<br>" +"Budget:"+studentInfo.budget ;

  var box = document.getElementById("mybox");
  box.style.display = "block";
  var updateButton = document.getElementById("UPDATE_STUDENT");
  var cancelButton = document.getElementById("CANCEL_UPDATE");

  updateButton.onclick = function () 
  {
      alert("Updated content successfully for " + studentNumber);
      box.style.display = "none";
  }
  cancelButton.onclick = function () {
      box.style.display = "none";
  }
}

function toggleColumnsdisplay(Show) {

var deleteColumn = document.getElementById('deleteColumn');
var editColumn = document.getElementById('editColumn');
  if (Show) {
    deleteColumn.style.display = 'table-cell';
    editColumn.style.display = 'table-cell';
  } else {
    deleteColumn.style.display = 'none';
    editColumn.style.display = 'none';
  }
}

function onDeleteRow(deleteButton) {
  var selectedRow = deleteButton.closest('tr');
  studentNumberCell = selectedRow.cells[1];
  if (studentNumberCell) {
    studentNumber = studentNumberCell.textContent.trim();
    var confirmation = confirm("Are you sure you want to delete the record for student " + studentNumber + "?");
    if (confirmation) {
      selectedRow.remove();
      alert("Record for student " + studentNumber + " deleted.");
    }
  }
}
var submitButton = document.getElementById('button');
document.getElementById('myTable').addEventListener('change', function () {
var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var atLeastOneChecked = false;
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      atLeastOneChecked = true;
      return;
    }
  });

  if (atLeastOneChecked) {
    submitButton.style.backgroundColor = 'orange';
    HideShowEditDelete(true);
  } else {
    submitButton.style.backgroundColor = 'grey';
    HideShowEditDelete(false);

  }
});
var deleteColumn = document.getElementById('deleteColumn');
var editColumn = document.getElementById('editColumn');
function HideShowEditDelete(Show) {
  if (Show) {
    deleteColumn.style.display = 'table-cell';
    editColumn.style.display = 'table-cell';
  } else {
    deleteColumn.style.display = 'none';
    editColumn.style.display = 'none';
  }
}

function addRow()
{
  var table = document.getElementById("myTable");
  var rows = table.getElementsByTagName("tr");
  var newRow = table.insertRow(rows.length);
  var CellCopy = table.rows[1].cells[0].cloneNode(true);
  newRow.appendChild(CellCopy);
  newRow.insertCell(1);
  newRow.insertCell(2);
  newRow.insertCell(3);
  newRow.insertCell(4);
  newRow.insertCell(5);
  newRow.insertCell(6);
  newRow.insertCell(7);
  newRow.cells[1].innerHTML = "Student " + rownumber;
  newRow.cells[2].innerHTML = "Teacher " + rownumber;
  newRow.cells[3].innerHTML = "Approved";
  newRow.cells[4].innerHTML = "Fall";
  newRow.cells[5].innerHTML = "TA";
  newRow.cells[6].innerHTML = (rownumber).toString() + (rownumber +1).toString() + (rownumber + 2).toString() + (rownumber +3).toString() + (rownumber + 4).toString();
  newRow.cells[7].innerHTML = "100%";
  alert("student " + rownumber + " Recorded has been added successfully");
  rownumber = rownumber + 1;
  newRow1 = table.insertRow(rows.length);
  newRow1.style.display = 'none';
  newRow1.innerHTML = `Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br />`;

  var cloneButton = newRow.querySelector('.downIcon');

if (cloneButton) {
  cloneButton.addEventListener('click', function () {
    var dropDownRow = cloneButton.closest('tr').nextElementSibling;
    if (dropDownRow) {
      if (dropDownRow.style.display === 'none' || dropDownRow.style.display === '') {
        dropDownRow.style.display = 'table-row';
      } else {
        dropDownRow.style.display = 'none';
      }
    }
  });
}

}





