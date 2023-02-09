
const price=document.querySelector('#cost');
const product=document.querySelector('#commodity');
const category=document.querySelector('#sphere');
const warning=document.querySelector('.warning');
const electric = document.querySelector('#Electronic');
const eatables = document.querySelector('#Food');
const skincare = document.querySelector('#Skincare');
const form=document.getElementById('myForm').addEventListener('submit', AddProduct);
function AddProduct(e){
    e.preventDefault();
    if(price.value==''||product.value==''||category.value=='')
    {
        warning.innerHTML='PLEASE ENTER ALL FIELDS';
        setTimeout(()=>warning.remove() , 2000);
    }
    else
    {
            let myObj = {
          
             price: price.value,
             product: product.value,
              category: category.value,
              
            }
            console.log("%%%%%%"+category.value);
            axios.post("https://crudcrud.com/api/ed3adfc62f954e8f9499dc5c6da35a62/order_details",myObj)
            .then((response)=> {
             //myObj.id = response.data._id;
             console.log(response)
             //console.log("$$$$$$$$$$$$$$$$$$$$$$$$"+myObj.id);
             showOnScreen(myObj,response.data._id);
            })
            .catch((err)=> {
                console.log(err)
            })
   
    }
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
   function showOnScreen(user,idval){
    const li = document.createElement('li');

li.appendChild(document.createTextNode(`${user.price}: ${user.product}: ${user.category}`));
var deleteval = deletebutton();
li.appendChild(deleteval);
// console.log("#########",+user.category);
if(user.category=="electronic")
    {
        electric.appendChild(li);
    }
    else if(user.category=="food")
    {
        eatables.appendChild(li);
    }
    else if(user.category=="Skincare"){
        skincare.appendChild(li);
    }
li.id = user.product;
 axios.get("https://crudcrud.com/api/ed3adfc62f954e8f9499dc5c6da35a62/order_details")
 .then((response)=>{
    // for(var i=0;i<response.data.length;i++){
    console.log(response)
    // }
 })
 
 var buttn= document.getElementById(user.product);
 //console.log("######################"+idval);
 var listid= document.getElementById(user.product);
 
 buttn.addEventListener('click',dltFunction)
 function dltFunction(e){
    if(e.target.value== 'Delete'){
       axios.delete("https://crudcrud.com/api/ed3adfc62f954e8f9499dc5c6da35a62/order_details/"+idval)
       listid.remove();
    }
  
        
}
    

   
   price.value='';
   product.value='';
   category.value='';
   }

   window.addEventListener("DOMContentLoaded", () =>{
    axios.get("https://crudcrud.com/api/ed3adfc62f954e8f9499dc5c6da35a62/order_details")
    .then((response) =>{
        for(var i=0; i<response.data.length;i++){
         
          showOnScreen(response.data[i],response.data[i]._id)
        }
    })
})

