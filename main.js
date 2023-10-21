var array =JSON.parse(localStorage.getItem("todo"))
if(array===null){
    array=[]
}

var btn = document.getElementById("submit")
btn.addEventListener("click",()=>{
    var todo = document.getElementById("todo")
     todo=todo.value
    var data = {
    todo:todo
    }
   
    array.push(data)
    localStorage.setItem("todo",JSON.stringify(array))
    console.log(array)
    location.reload()
})
var div=document.getElementById("showtodo")
var lsData = JSON.parse(localStorage.getItem("todo"))
lsData.forEach(element => {
    console.log(element.todo)
    var box = document.createElement("div")
    box.setAttribute("class","box")
   var h3=document.createElement("h3")
//    h3.setAttribute("class","head")
   h3.innerHTML=element.todo
   var btn1= document.createElement("button")
   btn1.innerText="Delete"
  
   btn1.addEventListener("click",()=>{
    var index =lsData.findIndex(item =>item.todo===element.todo);
    console.log(index)
  if (index !== -1) {
      lsData.splice(index, 1);
      localStorage.setItem("todo", JSON.stringify(lsData)); 
      location.reload()
  }
  })
   
   var btn2= document.createElement("button")
   btn2.innerText="Edit"
   btn2.addEventListener("click",()=>{
   const editInput = document.createElement("input")
//    editInput.innerText=editInput.value
   editInput.setAttribute("class","einput")
   editInput.setAttribute("placeholder","edit Todo")
   const submit = document.createElement("button")
   submit.innerText="Submit"
   submit.setAttribute("class","esubmit")
   submit.addEventListener("click",()=>{
    var index =lsData.findIndex(item =>item.todo===element.todo);
    // console.log(index)
    if(index!==-1){
       lsData[index].todo=editInput.value
       console.log(lsData)
       localStorage.setItem("todo", JSON.stringify(lsData)); 
       location.reload()
    }

   })
   box.append(editInput,submit)
   })
   box.append(h3,btn1,btn2)
   div.append(box)

});

