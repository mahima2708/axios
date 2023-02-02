const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput= document.querySelector('#email');
const phone_number=document.querySelector('#phnumber');
const msg= document.querySelector('.msg');
const userList = document.querySelector('#users');
const sub_val=document.querySelector('#btn');

function EditButton(){
     var createBtn= document.createElement('input');
    createBtn.type = 'button';
    createBtn.value = "Edit"
    createBtn.id ="edit";
    var createEditnode = document.createTextNode('Edit');
    createBtn.appendChild(createEditnode);
    return createBtn    
}

function deletebutton(){
    var createEle = document.createElement('input');
    createEle.type = 'button';
    createEle.value = "Delete"
    createEle.id ="buttonid";
    var createDeletenode = document.createTextNode('Delete');
    createEle.appendChild(createDeletenode);
    return createEle;
}

myform.addEventListener('submit', onSubmit);
function onSubmit(e){
    
    e.preventDefault();
    console.log("submit wala")
    if(nameInput.value ==='' || emailInput.value ==='' || phone_number.value==='')
    {
        msg.classList.add('error');
        msg.innerHTML='PLEASE ENTER ALL FIELDS';
        setTimeout(()=>msg.remove() , 3000);

    }
    else {
       
        let myObj = {
            nameInput : nameInput.value,
            emailInput : emailInput.value,
            phone_number : phone_number.value 

        };
        axios.post("https://crudcrud.com/api/dae4d0e56bd54207af72c7aee183b555/user_details",myObj)
        .then((response)=> {
         //myObj.id = response.data._id;
         //console.log("$$$$$$$$$$$$$$$$$$$$$$$$"+myObj.id);
         showOnScreen(myObj,response.data._id);
        })
        .catch((err)=> {
            console.log(err)
        })
//console.log("$$$$$$$$$$$$$$$$$$$$$$$$"+myObj.idval);
        //showOnScreen(myObj);
    }

}

function showOnScreen(user,idvalue){
//console.log("@@@@@@@@@@@@@@@@@@@"+user._id)

const li = document.createElement('li');
var kk = document.getElementById(user.nameInput)
li.appendChild(document.createTextNode(`${user.nameInput}: ${user.emailInput}: ${user.phone_number}`));
var editval=EditButton();
li.appendChild(editval);
var deleteval = deletebutton();
li.appendChild(deleteval);
userList.appendChild(li);
li.id = user.nameInput;
 axios.get("https://crudcrud.com/api/dae4d0e56bd54207af72c7aee183b555/user_details")
 .then((response)=>{
    // for(var i=0;i<response.data.length;i++){
    console.log(response)
    // }
 })
 
 var buttn= document.getElementById(user.nameInput);
 //console.log("######################"+idval);
 var listid= document.getElementById(user.nameInput);
 
 buttn.addEventListener('click',dltFunction)
 function dltFunction(e){
    if(e.target.value== 'Delete'){
      //  console.log("#############################3"+user.idval)
       axios.delete("https://crudcrud.com/api/dae4d0e56bd54207af72c7aee183b555/user_details/"+idvalue)
       listid.remove();
    }
    else{
        nameInput.value=user.nameInput,
        emailInput.value= user.emailInput,
        phone_number.value=user.phone_number
        listid.remove();
        var sub_val1= document.getElementById("SubmitId")
 
        console.log("####"+sub_val1);
        sub_val1.addEventListener('click',onEdit);
 
        //myform.addEventListener('submit', onEdit);
        function onEdit(e){
            e.preventDefault();
            axios.put("https://crudcrud.com/api/dae4d0e56bd54207af72c7aee183b555/user_details/"+idvalue,{
                
            nameInput:nameInput.value,
                emailInput:emailInput.value,
                phone_number:phone_number.value
           })
           .then((res)=>{ 
            const li = document.createElement('li');

             li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}: ${phone_number.value}`));
             var editval=EditButton();
             li.appendChild(editval);
            var deleteval = deletebutton();
             li.appendChild(deleteval);
             userList.appendChild(li);
             li.id = user.nameInput;
            console.log("edit wala")})
           .catch((err) =>{
             console.error(err)
           });    
        }
        
}
    }

   
   nameInput.value='';
   emailInput.value='';
   phone_number.value='';
}


window.addEventListener("DOMContentLoaded", () =>{
    axios.get("https://crudcrud.com/api/dae4d0e56bd54207af72c7aee183b555/user_details")
    .then((response) =>{
        for(var i=0; i<response.data.length;i++){
         
          showOnScreen(response.data[i],response.data[i]._id)
        }
    })
})

