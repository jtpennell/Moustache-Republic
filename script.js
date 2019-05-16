function startup(){
  showSize();
}

var count = 0; //add to cart count
var selectedSize = "";

function showSize() {
    var x = document.getElementById("showSize");
    if (x.style.display === "none") {
      x.style.display = "inline";
    } else {
      x.style.display = "none";
    }
}

// only selects and displays small size
function chooseSize(){
  var x = document.getElementById("sizeS");
  x.style.outline = "2px solid black";
  selectedSize = "S";
  showSize();
}

// adds current selected size to cart
function addToCart(){
  count = count + 1;
  var x = document.getElementById("myCart");
  if (selectedSize === "S"){
    setTimeout(function() { alert("You now have" + count.toString() + "in your cart." ); }, time);
    x.innerHTML = "My Cart (" + count.toString() +  ") &#xf07a;";
  } else if (selectedSize === "M"){
    break;
  } else {
    break;
  }
}
