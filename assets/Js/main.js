var people = [
    { name: "Nurlan", surname: "Safarli", age: 19 },
    { name: "Ilkin", surname: "Sadiqzade", age: 19 },
    { name: "Sahin", surname: "Malikov", age: 20 },
    { name: "Adil", surname: "Hasanov", age: 18 }
];


var table = document.createElement("table");


var thead = table.createTHead();
var row = thead.insertRow();
var headers = ["Name", "Surname", "Age"];
for (var i = 0; i < headers.length; i++) {
    var th = document.createElement("th");
    th.textContent = headers[i];
    row.appendChild(th);
}


var tbody = table.createTBody();
for (var i = 0; i < people.length; i++) {
    var person = people[i];
    var row = tbody.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.textContent = person.name;
    cell2.textContent = person.surname;
    cell3.textContent = person.age;
}


var tableContainer = document.getElementById("table-container");
tableContainer.appendChild(table);