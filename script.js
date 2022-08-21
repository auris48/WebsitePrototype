/* window.addEventListener("DOMContentLoaded", (event) => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki
  
    const datatablesSimple = document.getElementById("datatablesSimple");
    if (datatablesSimple) {
      let dataTable = new DataTable(datatablesSimple);
      fetch("http://localhost:8080/customer/readAll")
        .then((response) => response.json())
        .then((data) =>
          data.array.forEach((element) => {
            let row = [];
            for (let key in element) {
              row.push(element[key]);
            }
            dataTable.rows().add(row);
          })
        );
    }
  });

 */


      
let customersArray = [];

function fetchCustomers() {
  return fetch("http://localhost:8080/customer/readAll")
    .then((response) => response.json())
    .then((data) => customersArray.push(data));
}

function addCustomers(data) {
  const table = document.body.appendChild(document.createElement("table"));
  data.forEach((element) => {
    const tr = table.appendChild(document.createElement("tr"));
    for (key in element) {
      const td = tr.appendChild(document.createElement("td"));
      td.textContent = element[key];
      td.style.border = "1px solid black";
      td.style.width = "500px";
      td.style.padding = "10px";
    }
  });
  table.style.border = "1px solid black";
}

/* 
let table = new DataTable("#customersTable", {
  data: customers,
}); */


fetch("http://localhost:8080/customer/readAll")
  .then((response) => response.json())
  .then(
    (data) =>
      new DataTable("#customersTable", {
    
        data: data,
        columns: [
          { data: "customerID", title: "ID" },
          { data: "firstName", title: "Name" },
          { data: "surname", title: "Surname" },
          { data: "age", title: "Age" },
          { data: "email", title: "Email" },
          { data: "address", title: "Address" },
          { data: "postcode", title: "Postcode" },
          { data: "phone", title: "Phone" },
        ]
      })
  );

