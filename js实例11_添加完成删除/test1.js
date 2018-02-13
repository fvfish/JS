var divcontainer = document.querySelector('.container');
var inttext = document.querySelector('#inttext');
var inserthtml = function(todocon, dele){
    return t =`
<div class="todo ${dele}" value="">
    <button type="button" class="btdone">done</button>
    <button type="button" class="btdelete">delete</button>
    <span id="todocon">${todocon}</span>
</div>
`}

function loadtodos(){
    var todosarr = [];
    todosarr = JSON.parse(localStorage.todo);
    for (let index = 0; index < todosarr.length; index++) {
        var element = todosarr[index];
        var todocon = element.con;
        var delebo = null;
        if (element.dele) {
            delebo = 'tododone';
        }
        appendhtml(divcontainer, inserthtml(todocon, delebo));

    }
    //console.log(todosarr);  
}
function savetodos(){
    var todoarrs = [];
    var todos = document.querySelectorAll('.todo');
    for (let i = 0; i < todos.length; i++) {
        var element = todos[i];
        var gettodocon = element.querySelector('#todocon').innerHTML;
        console.log('ffff'+gettodocon);
        
        var delebo = element.classList.contains('tododone');
        var todoarr = {
            con:gettodocon,
            dele:delebo
        }
        todoarrs.push(todoarr);
    }
    localStorage.todo = JSON.stringify(todoarrs);
}

bindevent('#btadd', 'click', function(){
    var todocon = inttext.value;
    appendhtml(divcontainer, inserthtml(todocon, null));
    inttext.value = '';
    inttext.focus();
    savetodos();
    console.log(JSON.parse(localStorage.todo));
})
divcontainer.addEventListener('click', function(event){
    var tg = event.target;
    if (tg.classList.contains('btdelete')) {
        var tgpl = tg.parentElement;
        tgpl.remove();
        savetodos();

    }
    if (tg.classList.contains('btdone')) {
        var tgpl = tg.parentElement;
        tgpl.classList.add('tododone');
        savetodos();
    }
})
loadtodos();

