let selectedRow = null; //setting a variable with no object value.

//function called on the form
function onFormSubmit(e) {
    event.preventDefault(); //if the event doesn't get explicitly handled, it won't run its default action.
    let formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

//retrieves the data. FormData is being assigned to the value of each id element.
function readFormData() {
    let formData = {};
    formData["author"] = document.getElementById("author").value;
    formData["bTitle"] = document.getElementById("bTitle").value;
    formData["bSeries"] = document.getElementById("bSeries").value;
    formData["bRating"] = document.getElementById("bRating").value;

    return formData;
}

let rowId = 0;

//Inserts the data
function insertNewRecord(data) {
    let table = document.getElementById("tableData").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.length);
    rowId++; //increments each new row added.
    newRow.setAttribute("id", `myCoolId-${rowId}`); //assigning the "myCoolId" id attribute to each row.
    let cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.author; //adding the element content to the table.
    let cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.bTitle;
        //cell2.style.backgroundColor = 'orange'. this would allow for adding style to html element.
    let cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.bSeries;
    let cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.bRating;
    let cell5 = newRow.insertCell(4);
        cell5.innerHTML = "<button class='btn btn-danger form-control' onClick='onDelete(this)'>Delete</button>"; //adds the delete button when form is submitted.
}

//updating each array with the current content for each element.
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.author;
    selectedRow.cells[1].innerHTML = formData.bTitle;
    selectedRow.cells[2].innerHTML = formData.bSeries;
    selectedRow.cells[3].innerHTML = formData.bRating;
}

//Deletes the data
function onDelete(td) {
    // console.log(td.parentElement);
    // console.log(td.parentElement.parentElement); shows what the parentElement is.
    if(confirm('Do you want to delete this record?')){ //adds an alert to ask if you want to delete the row.
        row = td.parentElement.parentElement;
        document.getElementById('tableData').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Resets the data
function resetForm() {
    document.getElementById('author').value = ''; //assigning the value of each element to an empty string.
    document.getElementById('bTitle').value = '';
    document.getElementById('bSeries').value = '';
    document.getElementById('bRating').value = '';
}