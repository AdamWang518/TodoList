function favorite() {
    let star = document.getElementById("star")
    let todo=document.getElementById("todo-item-top");
    // if (star.classList.contains("test")) {
    //     star.classList.remove("test");
    // }
    // else {
    //     star.classList.add("test");
    // }
    // console.log(star.classList);
    if(star.classList.contains("todo-edit-star")){
        star.classList.remove("todo-edit-star");
        star.classList.add("todo-switch-star")
        todo.classList.remove("todo-item-top");
        todo.classList.add("todo-item-top-switch");
    }
    else{
        star.classList.remove("todo-switch-star");
        star.classList.add("todo-edit-star")
        todo.classList.remove("todo-item-top-switch");
        todo.classList.add("todo-item-top");
    }
    
}
function edit(){
    let edit=document.getElementById("edit");
    let item=document.getElementById("item-bottom");
    
    if(edit.classList.contains("todo-edit-text")){

        edit.classList.remove("todo-edit-text");
        edit.classList.add("todo-switch-text");
        item.classList.remove("todo-item-bottom");
        item.classList.add("todo-switch-bottom");
        
    }
    else{
        edit.classList.remove("todo-switch-text");
        edit.classList.add("todo-edit-text")
        item.classList.remove("todo-switch-bottom");
        item.classList.add("todo-item-bottom");
        
    }
    
}
function editText(type){
    let todoText=document.getElementById("todo-text");
    let todoTextInput=document.getElementById("todo-text-input");
    if(type=="click"){
        console.log("click");
        todoText.classList.add("todo-text-switch");
        todoText.classList.remove("todo-text");
        todoTextInput.value=todoText.innerText;
        todoTextInput.classList.add("todo-text-input");
        todoTextInput.classList.remove("todo-text-input-switch");
        todoTextInput.focus();
    }
    else if(type=="blur"){
        console.log("blur");
        todoText.classList.remove("todo-text-switch");
        todoText.classList.add("todo-text");
        todoText.innerText=todoTextInput.value;
        todoTextInput.classList.remove("todo-text-input");
        todoTextInput.classList.add("todo-text-input-switch");
    }
}
function save(){
    let date=document.getElementById("date");
    let time=document.getElementById("time");
    let file=document.getElementById("file");
    let comment=document.getElementById("comment");
}