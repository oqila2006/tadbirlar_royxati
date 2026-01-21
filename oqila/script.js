
let count = 0;
let tickets = 100;
let sold = 0;
let price = 50000;

function login(){
  let u = loginUser.value;
  let p = loginPass.value;
  if(u==="admin" && p==="1234"){
    loginBox.classList.add("hidden");
    mainApp.classList.remove("hidden");
  } else {
    alert("Login yoki parol xato");
  }
}

function register(){
  let name = document.getElementById("name").value.trim();
  if(name==="" || tickets<=0) return;

  count++;
  sold++;
  tickets--;

  document.getElementById("count").innerText = count;
  document.getElementById("tickets").innerText = tickets;
  document.getElementById("sold").innerText = sold;
  document.getElementById("sum").innerText = sold * price;

  let li = document.createElement("li");
  li.innerText = count + ". " + name;
  document.getElementById("list").appendChild(li);
  document.getElementById("name").value="";
}
