const form = document.getElementById("serviceForm");
const table = document.getElementById("serviceTable");

let services = JSON.parse(localStorage.getItem("services")) || [];

function displayServices() {
    table.innerHTML = "";

    services.forEach((service, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${service.vehicleNumber}</td>
            <td>${service.vehicleModel}</td>
            <td>${service.serviceDate}</td>
            <td>${service.serviceType}</td>
            <td>₹${service.amount}</td>
            <td>${service.nextService}</td>
            <td>
                <button class="delete-btn"
                onclick="deleteService(${index})">
                Delete
                </button>
            </td>
        `;

        table.appendChild(row);
    });
}

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const service = {
        vehicleNumber:
            document.getElementById("vehicleNumber").value,

        vehicleModel:
            document.getElementById("vehicleModel").value,

        serviceDate:
            document.getElementById("serviceDate").value,

        serviceType:
            document.getElementById("serviceType").value,

        amount:
            document.getElementById("amount").value,

        nextService:
            document.getElementById("nextService").value
    };

    services.push(service);

    localStorage.setItem(
        "services",
        JSON.stringify(services)
    );

    form.reset();

    displayServices();

    alert("Service record added successfully!");
});

function deleteService(index) {

    services.splice(index, 1);

    localStorage.setItem(
        "services",
        JSON.stringify(services)
    );

    displayServices();
}

displayServices();