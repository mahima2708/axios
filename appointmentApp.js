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
        axios.post("https://crudcrud.com/api/5a42796ee4ee4a548d143986769ab381/user_details",myObj)
        .then((response)=> {
          
            console.log(response)
        })
        .catch((err)=> {
            console.log(err)
        })
       

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
      

    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}: ${phone_number.value}`));
      li.appendChild(createEle);
       li.appendChild(createBtn);
    li.id = nameInput.value;
    userList.appendChild(li);
    var buttonid = document.getElementById(nameInput.value);
    var listid = document.getElementById(nameInput.value);
    console.log(listid._id);
     buttonid.addEventListener('click',deleteFunction);
      function deleteFunction(e){
        if(e.target.value=="Delete"){
          listid.remove();
        

        }
        else
        {
          listid.remove();
          var ITEM = localStorage.getItem(listid.innerHTML.split(": ")[1]); 
          var details= ITEM.split(","); 
          nameInput.value= ITEM.split(",")[0].split(":")[1].replaceAll("\"","");
          emailInput.value= ITEM.split(",")[1].split(":")[1].replaceAll("\"","");
          phone_number.value=ITEM.split(",")[2].split(":")[1].replaceAll(/["{}]/g, "");
          localStorage.removeItem(listid.innerHTML.split(": ")[1]);
        }
      }


    nameInput.value = '';
    emailInput.value = '';
    phone_number.value = '';
  }

}

window.addEventListener("DOMContentLoaded", () =>{
    axios.get("https://crudcrud.com/api/5a42796ee4ee4a548d143986769ab381/user_details")
    .then((response) =>{
        for(var i=0; i<response.data.length;i++){
         // console.log(response.data[i]._id);  
          showOnScreen(response.data[i])
        }
    })
})

function showOnScreen(user){
    const li = document.createElement('li');
    
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
    li.appendChild(document.createTextNode(`${user.nameInput}: ${user.emailInput}: ${user.phone_number}`));
    li.appendChild(createEle);
    li.appendChild(createBtn);
     userList.appendChild(li);
     li.id = user.nameInput;

     var buttonid = document.getElementById(user.nameInput);
    var listid = document.getElementById(user.nameInput);
  
     buttonid.addEventListener('click',dltFunction);
    function dltFunction(e){
      e.preventDefault(); 
        if(e.target.value=="Delete"){
          axios.delete("https://crudcrud.com/api/5a42796ee4ee4a548d143986769ab381/user_details/"+user._id)
          listid.remove();
      
      
        }
    }
    
}
   
