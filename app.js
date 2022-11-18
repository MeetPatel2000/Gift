var qnta = "";
var qntb = "";
var qntc = "";
var qntd = "";
var qnte = "";
var totala = "";
var totalb = "";
var totalc = "";
var totald = "";
var totale = "";
var Total = "";
var tax1 = "";
var tax2 = "";
var Name = "";

// Takes input of firstItem
function firstItem() {
  qnta = prompt("How many do you want?");

  while (isNaN(qnta) || qnta == "") {
    qnta = prompt("Please enter a valid number");
  }
  qnta = parseFloat(qnta);
  totala = 25 * qnta;
  totala = parseInt(totala);

  document.getElementById("pink_T-shirt").innerHTML = totala;
}

//Takes input of secondItem

function secondItem() {
  qntb = prompt("How many do you want?");
  while (isNaN(qntb) || qntb == "") {
    qntb = prompt("Please enter a valid number");
  }
  qntb = parseFloat(qntb);
  totalb = 10 * qntb;
  totalb = parseInt(totalb);

  document.getElementById("Gym_T-shirt").innerHTML = totalb;
}

//Takes input of thirdItem

function thirdItem() {
  qntc = prompt("How many do you want?");
  while (isNaN(qntc) || qntc == "") {
    qntc = prompt("Please enter a valid number");
  }
  qntc = parseFloat(qntc);
  totalc = 3 * qntc;
  totalc = parseFloat(totalc);

  document.getElementById("Black_T-shirt").innerHTML = totalc;
}

// Takes input of forthItem

function forthItem() {
  qntd = prompt("How many do you want?");
  while (isNaN(qntd) || qntd == "") {
    qntd = prompt("Please enter a valid number");
  }
  qntd = parseFloat(qntd);
  totald = 12 * qntd;
  totald = parseFloat(totald);

  document.getElementById("White_T-shirt").innerHTML = totald;
}

//Takes input of fifthItem

function fifthItem() {
  qnte = prompt("How many do you want?");

  while (isNaN(qnte) || qnte == "") {
    qnte = prompt("Please enter a valid number");
  }
  qnte = parseFloat(qnte);
  totale = 30 * qnte;
  totale = parseInt(totale);

  document.getElementById("Combo_T-shirt").innerHTML = totale;
}
// Prints the total amount and checks for null values
function bill() {
  Total = totala + totalb + totalc + totald + totale;
  if (
    (qnta === "") &
    (qntb === "") &
    (qntc === "") &
    (qntd === "") &
    (qnte === "")
  ) {
    // Give an alert if the value is empty
    alert("Atleast buy One item to checkout");
  } else if (Total < 50) {
    //checks if total is less than 50
    var shippingCharge = 10 + +Total;
    tax1 = (Total * 15) / 100;
    var Final = shippingCharge + +tax1;
    document.getElementById("Billing").innerHTML =
      "Sorry! You are not eligible for free shipping,Your Total bill is " +
      Final +
      " including " +
      tax1 +
      " tax";
  } else {
    tax2 = (Total * 13) / 100;
    var FINAL = tax2 + +Total;
    document.getElementById("Billing").innerHTML =
      "You are eligible for free shipping, Your bill is " +
      FINAL +
      " including " +
      tax2 +
      " tax";
  }
}
// Prints Products,cost,tax and name

function checkOut() {
  //checks for empty values
  if (
    (qnta === "") &
    (qntb === "") &
    (qntc === "") &
    (qntd === "") &
    (qnte === "")
  ) {
    alert("Atleast buy One item to checkout");
  }
  Name = prompt("Please enter your Name"); // Validation for incorrect input
  if (Name == "" || Name == null) {
    Name = prompt("Please enter a valid name");
  }
  document.getElementById("name").innerHTML =
    "Hello " + Name + " here is your reciept";

  if (qnta > 0) {
    document.getElementById("item1").innerHTML =
      "You have baught " + qnta + " Pink T-shirt worth " + totala + " $";
  }
  if (qntb > 0) {
    document.getElementById("item2").innerHTML =
      "You have baught " + qntb + " Gym T-shirt worth " + totalb + " $";
  }
  if (qntc > 0) {
    document.getElementById("item3").innerHTML =
      "You have baught " + qntc + " Black T-shirt worth " + totalc + " $";
  }
  if (qntd > 0) {
    document.getElementById("item4").innerHTML =
      "You have baught " + qntd + " White T-shirt worth " + totald + " $";
  }
  if (qnte > 0) {
    document.getElementById("item5").innerHTML =
      "You have baught " + qnte + " Combo  T-shirt worth " + totale + " $";
  }
  if ((Total < 50) & (bill === "")) {
    document.getElementById("tax").innerHTML = "Your taxt is " + tax1;
  } else if (Total > 50) {
    document.getElementById("tax").innerHTML = "Your taxt is " + tax2;
  }
}
