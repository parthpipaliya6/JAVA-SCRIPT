
const deleteAll = () => {
    arr = []
    document.getElementById("adddata").innerHTML = ""
}

let arr = [];
const del = (index) => {
    arr.splice(index, 1);
    Ui();
};
const buy = () => {
    alert("thankyou for buy..");
};
const Ui = () => {
    document.getElementById("adddata").innerHTML = "";
    arr.map((ele, i) => {
  
  
      let section = document.createElement("section");
      section.setAttribute("class", "col-lg-2 col-sm-5 m-sm-3 m-md-4  ");
  
      let img = document.createElement("img");
      img.src = ele.img;
      
      let div = document.createElement("div");
      div.innerHTML = `pname: ${ele.title}`;
      let div1 = document.createElement("div");
      div1.innerHTML = `price: ${ele.price}`;
  
      let div3 = document.createElement("div");
      div3.setAttribute("class", "d-flex justify-content-around mt-2");
  
      let btn = document.createElement("button");
      btn.innerHTML = "delete";
      btn.addEventListener("click", () => del(i));
      btn.setAttribute("class", "bg-danger rounded  border-danger");
  
      let btn2 = document.createElement("button");
      btn2.innerHTML = "buynow";
      btn2.addEventListener("click", () => buy(i));
      btn2.setAttribute("class", "bg-success rounded  border-success p-2");
  
     
      div3.append(btn, btn2);
      section.append(img, div, div1, div3);
  
      
      document.getElementById("adddata").append(section);
  
    });
  };
  
  const data = (e) => {
    e.preventDefault();
    let database = {
      img: document.getElementById("img").value,
      title: document.getElementById("title").value,
      price: document.getElementById("price").value,
      
    };
    arr.push(database);
    Ui();  

};

document.getElementById("getdata").addEventListener("submit", data);