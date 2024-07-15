let listContainer=document.getElementById("list-container")
let input=document.getElementById("input")
function addtask(){
    if(input.value == ""){
        alert("Add Your Task")
    }
    else{
        let task=document.createElement("ul")
        task.textContent=input.value
        listContainer.append(task)
    }
    input.value=""
}