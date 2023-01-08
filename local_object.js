const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput= document.querySelector('#email');
const phone_number=document.querySelector('#phnumber');
const msg= document.querySelector('.msg');
const userList = document.querySelector('#users');
myform.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
    if(nameInput.value ==='' || emailInput.value ==='' || phone_number.value==='')
    {
        msg.classList.add('error');
        msg.innerHTML='PLEASE ENTER ALL FIELDS';
        setTimeout(()=>msg.remove() , 3000);

    }
    else{
        const li = document.createElement('li');
        let myObj = {
            nameInput : nameInput.value,
            emailInput : emailInput.value,
            phone_number : phone_number.value 

        };
        let myObj_serialized = JSON.stringify(myObj);
        localStorage.setItem(emailInput.value, myObj_serialized);
        let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));

          var createEle = document.createElement('input');
        createEle.type = 'button';
        createEle.value = "Delete"
        createEle.id ="buttonid";
        var createDeletenode = document.createTextNode('Delete');
        createEle.appendChild(createDeletenode);
      

    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}: ${phone_number.value}`));
       li.appendChild(createEle);
    li.id = nameInput.value;
    userList.appendChild(li);
    var buttonid = document.getElementById(nameInput.value);
    var listid = document.getElementById(nameInput.value);
    
      buttonid.addEventListener("click",deleteFunction);
      function deleteFunction(e){
        //console.log(listid);
        // console.log(listid.innerHTML.split(": ")[1]);
        listid.remove();
        
        localStorage.removeItem(listid.innerHTML.split(": ")[1]);
        

          
      }



    nameInput.value = '';
    emailInput.value = '';
    phone_number.value = '';
  }

}
