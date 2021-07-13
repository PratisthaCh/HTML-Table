
    function addRowtoTop(first) {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var city = document.getElementById('city').value;
    var country = document.getElementById('country').value;

    var table = document.getElementsByTagName('table')[0];

    var newRow = table.insertRow(1);

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);
    var cel5 = newRow.insertCell(4);

    cel2.innerHTML = fname;
    cel3.innerHTML = lname;
    cel4.innerHTML = city;
    cel5.innerHTML = country;
}

function addRowtoBottom(second) {

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var city = document.getElementById('city').value;
    var country = document.getElementById('country').value;

    var table = document.getElementsByTagName('table')[0];

    var newRow = table.insertRow(table.rows.length);

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);
    var cel5 = newRow.insertCell(4);


    cel2.innerHTML = fname;
    cel3.innerHTML = lname;
    cel4.innerHTML = city;
    cel5.innerHTML = country;
}
