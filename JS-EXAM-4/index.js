let users = [];


const handledelete = (index) => {
    users.splice(index, 1);
    content()
};

const content = () => {
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

        tr.append(td0, td1, td2, td3, td4, td5, td6);
        document.getElementById("tbody").append(tr);
    }
};

const handleData = (e) => {
    e.preventDefault();
    let studentName = document.getElementById("studentName").value;
    let grid = document.getElementById("Grid").value;
    let course = document.getElementById("course").value;
    let fee = document.getElementById("fee").value;
    let number = document.getElementById("number").value;

    let user = {
        studentName: studentName,
        grid: grid,
        course: course,
        fee: fee,
        number: number,
    };
    users.push(user);
    console.log(user);
    content();
};

const deleteUser = (index) => {
    users.splice(index, 1);
    content();
};

document.getElementById("studentdata").addEventListener("submit", handleData);
