function favorite(starID,itemTopID) {
    let star = document.getElementById(starID)
    let todo = document.getElementById(itemTopID);
    // if (star.classList.contains("test")) {
    //     star.classList.remove("test");
    // }
    // else {
    //     star.classList.add("test");
    // }
    // console.log(star.classList);
    if (star.classList.contains("todo-edit-star")) {
        star.classList.remove("todo-edit-star");
        star.classList.add("todo-switch-star")
        todo.classList.remove("todo-item-top");
        todo.classList.add("todo-item-top-switch");
    }
    else {
        star.classList.remove("todo-switch-star");
        star.classList.add("todo-edit-star")
        todo.classList.remove("todo-item-top-switch");
        todo.classList.add("todo-item-top");
    }

}
function edit(editID,itemBottomID) {
    let edit = document.getElementById(editID);
    let item = document.getElementById(itemBottomID);

    if (edit.classList.contains("todo-edit-text")) {

        edit.classList.remove("todo-edit-text");
        edit.classList.add("todo-switch-text");
        item.classList.remove("todo-item-bottom");
        item.classList.add("todo-switch-bottom");

    }
    else {
        edit.classList.remove("todo-switch-text");
        edit.classList.add("todo-edit-text")
        item.classList.remove("todo-switch-bottom");
        item.classList.add("todo-item-bottom");

    }

}
function editText(type,textID,inputID) {
    let todoText = document.getElementById(textID);
    let todoTextInput = document.getElementById(inputID);
    if (type == "click") {
        console.log("click");
        todoText.classList.add("todo-text-switch");
        todoText.classList.remove("todo-text");
        todoTextInput.value = todoText.innerText;
        todoTextInput.classList.add("todo-text-input");
        todoTextInput.classList.remove("todo-text-input-switch");
        todoTextInput.focus();
    }
    else if (type == "blur") {
        console.log("blur");
        todoText.classList.remove("todo-text-switch");
        todoText.classList.add("todo-text");
        todoText.innerText = todoTextInput.value;
        todoTextInput.classList.remove("todo-text-input");
        todoTextInput.classList.add("todo-text-input-switch");
    }
}
let todoList = [];
function save(id) {
    let todoVariable = { "text": "", "date": "", "time": "", "file": "", "comment": "" ,"id":""};
    todoVariable.text = document.getElementById("todo-text_"+todoList.length).value;
    todoVariable.date = document.getElementById("date_"+todoList.length).value;
    todoVariable.time = document.getElementById("time_"+todoList.length).value;
    todoVariable.file = document.getElementById("file_"+todoList.length).value;
    todoVariable.comment = document.getElementById("comment_"+todoList.length).value;
    todoVariable.id=todoList.length;
    
    let item = document.getElementById('todo-container');
    item.insertAdjacentHTML('beforeend', `<div class="todo-item-container">
    <div class="todo-item-top" id="todo-item-top_0">
        <div class="todo-edit">
            <input class="todo-check" type="checkbox">
            <div class="todo-text" id="todo-text_${todoList.length}" onclick="editText('click','todo-text_${todoList.length}','todo-text-input_${todoList.length}')" >Type Something Here…</div>
            <input class="todo-text-input-switch" id="todo-text-input_${todoList.length}" type="text" onblur="editText('blur','todo-text_${todoList.length}','todo-text-input_${todoList.length}')">
            <div class="todo-star-container">
                <i class="fa-solid fa-star todo-edit-star" onclick="favorite('star_${todoList.length}','todo-item-top_${todoList.length}')" id="star_${todoList.length}"></i>
                <i class="fa-solid fa-pen todo-edit-text" onclick="edit('edit_${todoList.length}','item-bottom_${todoList.length}')" id="edit_${todoList.length}"></i>
            </div>


        </div>
        <!-- <i class="fa-thin fa-star todo-star"></i>
        <i class="fa-thin fa-pen"></i> -->
        <div class="todo-tag">
            <i class="fa-solid fa-calendar-days todo-calendar"></i>
            <i class="fa-solid fa-comment-dots todo-comment"></i>
            <i class="fa-solid fa-file todo-file"></i>
        </div>


    </div>
    <div class="todo-item-bottom" id="item-bottom_${todoList.length}">
        <div class="todo-editer">
            <div class="Deadline">
                <i class="fa-solid fa-calendar-days"></i>
                <div style="display: inline-block;">Deadline</div>
                <br>
                <input class="date" type="date" id="date_${todoList.length}">
                <input class="time" type="time" id="time_${todoList.length}">
            </div>
            <div class="File">
                <i class="fa-solid fa-file"></i>
                File
                <br>
                <input type="file" id="file">
                <!-- <textarea class="comment-input"type="text"> -->
            </div>
            <div class="Comment">
                <i class="fa-solid fa-comment-dots"></i>
                Comment
                <br>
                <div class="input-area">
                    <textarea rows="10" style="width: 90%; border: none; outline: none; resize:none;" id="comment_0">
                    </textarea>
                </div>
                
            </div>

        </div>

        <div class="selector">
            <div class="cancel" id="cancel_${todoList.length}">
                <i class="fa-solid fa-xmark"></i>
                Cancel
            </div>
            <div class="save" id="save_${todoList.length}"onclick="save(save_${todoList.length})">
                <i class="fa-solid fa-plus"></i>
                Save
            </div>
        </div>
    </div>


</div>
</div>`)

    document.getElementById('comment1').value = todoVariable.comment;
    todoList.push(todoVariable);
}
