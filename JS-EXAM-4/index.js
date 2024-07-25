let users = [];


const handledelete = (index) => {
    users.splice(index, 1);
    content()
};

const handleSalesData = (course, count, fee) => {

    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    td1.innerHTML = course
    td2.innerHTML = count
    td3.innerHTML = fee
    tr.append(td1, td2, td3);
    document.getElementById("tbody2").append(tr)

}
const content = () => {
    let sales = {
        FullStack: {
            count: 0,
            fee: 0
        },
        BackendDevelopment: {
            count: 0,
            fee: 0
        },
        FrontendDevelopment: {
            count: 0,
            fee: 0
        },
        UI_UXDesigner: {
            count: 0,
            fee: 0
        },
        Python: {
            count: 0,
            fee: 0
        },
        Flutter: {
            count: 0,
            fee: 0
        },
        AR_VR: {
            count: 0,
            fee: 0
        },
        Ai_Ml: {
            count: 0,
            fee: 0
        },
    }
    document.getElementById("tbody").innerHTML = "";
    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement("tr");
        let td0 = document.createElement("td");
        td0.innerHTML = i + 1;
        let td1 = document.createElement("td");
        td1.innerHTML = users[i].studentName;
        let td2 = document.createElement("td");
        td2.innerHTML = users[i].grid;
        let td3 = document.createElement("td");
        td3.innerHTML = users[i].course;
        let td4 = document.createElement("td");
        td4.innerHTML = users[i].fee;
        let td5 = document.createElement("td");
        td5.innerHTML = users[i].number;
        let td6 = document.createElement("td");
        td6.innerHTML = "remove";
        td6.addEventListener("click", handledelete);
        document.getElementById("tbody").append(tr);
        tr.append(td0, td1, td2, td3, td4, td5, td6);
        console.log("users[i].course", users[i].course);

        
        sales[users[i].course].fee += users[i].fee;
        sales[users[i].course].count += 1

    }
    document.getElementById("tbody2").innerHTML = ""

    handleSalesData("FullStack", sales.FullStack.count, sales.FullStack.fee)
    handleSalesData("BackendDevelopment", sales.BackendDevelopment.count, sales.BackendDevelopment.fee)
    handleSalesData("FrontendDevelopment", sales.FrontendDevelopment.count, sales.FrontendDevelopment.fee)
    handleSalesData("UI_UXDesigner", sales.UI_UXDesigner.count, sales.UI_UXDesigner.fee)
    handleSalesData("Python", sales.Python.count, sales.Python.fee)
    handleSalesData("Flutter", sales.Flutter.count, sales.Flutter.fee)
    handleSalesData("AR_VR", sales.AR_VR.count, sales.AR_VR.fee)
    handleSalesData("Ai_Ml", sales.Ai_Ml.count, sales.Ai_Ml.fee)
};

const handleData = (e) => {
    e.preventDefault();
    let user = {
        studentName: document.getElementById("studentName").value,
        grid: document.getElementById("Grid").value,
        course: document.getElementById("course").value,
        fee: Number(document.getElementById("fee").value),
        number: document.getElementById("number").value
    }


    if (user.studentName.length < 2) {
        alert('Username should be at least 2 characters long');
        return;
    }

    if (user.grid.length < 4) {
        alert('GRID should be at least 4 characters long');
        return;
    }

    if (user.number.length != 10 || !['6', '7', '8', '9'].includes(user.number[0])) {
        alert('"Phone number should be at least 10 digits long and start with 6 or 7 8 or 9"');
        return;
    }

    users.push(user);
    console.log(user);
    content();
};

const deleteUser = (index) => {
    users.splice(index, 1);
    content();
};

document.getElementById("studentdata").addEventListener("submit", handleData);