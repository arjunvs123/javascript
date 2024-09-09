var inputitem = document.getElementById('inputfield');
var kitchenitemlist = document.getElementById('kitchen-list');
var btn = document.getElementById('addbtn').addEventListener("click",myFun);
var myArr = [];
var inputitemvalue;
//fun for setting items to local storage
function setLocal() {
  localStorage.setItem("KitchenInput",inputitemvalue);
}
//fun for geting items from local storage
function getLocal() {
  if(localStorage.getItem("KitchenInput")){
    console.log("DATA FOUND");
    inputitemvalue = localStorage.getItem("KitchenInput");
    console.log(inputitemvalue);
    //calling the same myfun() for refresh;
    builtUI();
  }else{
    console.log("NO DATA")
  }
}

function builtUI() {

    //to create a new element
    var li = document.createElement("li");
    li.innerHTML = inputitemvalue;

    //to setup animation
    li.style.cssText = 'animation-name: slideIn;';

    //to creaet a child
    kitchenitemlist.appendChild(li);

    //for autofocus input
    inputitem.focus();

    //for clearing the input field
    inputitem.value = "";

    //fpr creating the trash button
    var trashbtn = document.createElement("i");

    //for adding class to trashbtn
    trashbtn.classList.add('fas','fa-trash');
    li.appendChild(trashbtn);

    //for creating edit button
    editbtn = document.createElement('i');
    editbtn.classList.add('fas','fa-edit');
    li.appendChild(editbtn)

    //delete kitchen items
    function deleteitem(event) {
      if (event.target.classList[1]==="fa-trash") {
        
        //tp get the parent element of item here item target is i 
        var item = event.target.parentElement;

        //to create animation of slideut
        item.classList.add("slideOut");

        //at ending transtion wht to do
        item.addEventListener("transitionend",function () {

        //inbuit fun to remove 
        item.remove();  
        })
      }
    }

    //function for edit item
    function edititem(event) {
      if(event.target.classList[1]==='fa-edit'){
        var item = prompt("Please enter a new value");
        event.target.parentElement.firstChild.data = item;
      }
    }
    kitchenitemlist.addEventListener("click",deleteitem);
    kitchenitemlist.addEventListener("click",edititem)
}
//function for inserting an item in kitchen list
function myFun() {
    inputitemvalue = inputitem.value;
    setLocal();

    myArr.push(inputitemvalue);
    console.log(myArr);

    //to create a new element
    var li = document.createElement("li");
    li.innerHTML = inputitem.value;

    //to setup animation
    li.style.cssText = 'animation-name: slideIn;';

    //to creaet a child
    kitchenitemlist.appendChild(li);

    //for autofocus input
    inputitem.focus();

    //for clearing the input field
    inputitem.value = "";

    //fpr creating the trash button
    var trashbtn = document.createElement("i");

    //for adding class to trashbtn
    trashbtn.classList.add('fas','fa-trash');
    li.appendChild(trashbtn);

    //for creating edit button
    editbtn = document.createElement('i');
    editbtn.classList.add('fas','fa-edit');
    li.appendChild(editbtn)

    //delete kitchen items
    function deleteitem(event) {
      if (event.target.classList[1]==="fa-trash") {
        
        //tp get the parent element of item here item target is i 
        var item = event.target.parentElement;

        //to create animation of slideut
        item.classList.add("slideOut");

        //at ending transtion wht to do
        item.addEventListener("transitionend",function () {

        //inbuit fun to remove 
        item.remove();  
        })
      }
    }

    //function for edit item
    function edititem(event) {
      if(event.target.classList[1]==='fa-edit'){
        var item = prompt("Please enter a new value");
        event.target.parentElement.firstChild.data = item;
      }
    }
    kitchenitemlist.addEventListener("click",deleteitem);
    kitchenitemlist.addEventListener("click",edititem)
}

getLocal();

//funtion for pressing enter
inputitem.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {

    //to prevent the basic event of enter key
    event.preventDefault();
    document.getElementById('addbtn').click();
  }
}); 