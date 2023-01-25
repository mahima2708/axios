var product=document.getElementById('name');
var nameInput=document.getElementById('type');
// var date=document.getElementById('date');
var price=document.getElementById('amount');
var error=document.getElementsByClassName("error")[0];
var userList=document.querySelector('#list');
document.getElementById("my-form").addEventListener("submit", addExpense);
function addExpense(e){
    e.preventDefault();
   if(nameInput.value===''|| product.value===''|| price.value===" ")
   {
   error.innerHTML= "All fields are empty";
   setTimeout(() => {error.remove()}, 2000);
   }
   else
{
  const li = document.createElement('li');
  let myObj = {
      nameInput : nameInput.value,
     price:price.value,
      product:product.value 

  };
  let serialized = JSON.stringify(myObj);
        localStorage.setItem(nameInput.value,serialized);
        let deserialized = JSON.parse(localStorage.getItem("myObj"));
        

        var createEle = document.createElement('input');
        createEle.type = 'button';
        createEle.value = "Delete"
        createEle.id ="buttonid";
        var createDeletenode = document.createTextNode('Delete');
        createEle.appendChild(createDeletenode);

        var createBtn= document.createElement('input');
        createBtn.type = 'button';
        createBtn.value = "Edit"
        createBtn.id ="edit";
        var createEditnode = document.createTextNode('Edit');
        createBtn.appendChild(createEditnode);

        li.appendChild(document.createTextNode(`${nameInput.value}: ${price.value}: ${product.value}`));
        li.appendChild(createEle);
         li.appendChild(createBtn);
      li.id = nameInput.value;
      userList.appendChild(li);

      var btnid = document.getElementById(nameInput.value);
      var lstid = document.getElementById(nameInput.value);
      btnid.addEventListener('click',deleteFunction);
      function deleteFunction(e){
        if(e.target.value=="Delete"){
          console.log(lstid.innerHTML);
          lstid.remove();
         localStorage.removeItem(lstid.innerHTML.split(": ")[0]);

        }
        else
        {
          lstid.remove();
          var ITEM = localStorage.getItem(lstid.innerHTML.split(": ")[0]); 
          var details= ITEM.split(","); 
          nameInput.value= ITEM.split(",")[0].split(":")[1].replaceAll("\"","");
          price.value= ITEM.split(",")[1].split(":")[1].replaceAll("\"","");
          product.value=ITEM.split(",")[2].split(":")[1].replaceAll(/["{}]/g, "");
          localStorage.removeItem(lstid.innerHTML.split(": ")[0]);
        }
      }
      nameInput.value = '';
    price.value = '';
    product.value = '';
    

      
}
}
