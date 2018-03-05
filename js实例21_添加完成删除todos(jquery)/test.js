var inserhtml = (mytodo, gettodo) =>{
    var html = `
    <div class='todo ${gettodo}'>
    <button type="button" class="done">完成</button>
    <button type="button" class="del">删除</button>
    <span class="todotext">${mytodo}</span>
    </div>
    `    
    return html;
}
$('#addbt').click(function () {
    var mytodo = $('#intodo').val();
    $('.container').append(inserhtml(mytodo, ''));
    $('#intodo').val('');
    savetodo();
});
$('.container').click(function (e) {
    var $tg = $(e.target); 
    if ($tg.hasClass('done')) {
        $tg.parent().addClass('gettodo');
        savetodo();
    }
    if ($tg.hasClass('del')) {
        $tg.parent().remove();
        savetodo();
    }
});

const savetodo=()=>{
    var arr = [];
    var bl = '';
    $('.done').each(function (index, element) {
        if ($(this).parent().hasClass('gettodo')) {
            bl = 'gettodo';
        } else {
            bl = '';
        }
        arr.push({todo:$(this).siblings('.todotext').html(), done:bl});
    });
    localStorage.todo = JSON.stringify(arr);
}
const  loadtodo=()=>{
    var arrstr = [];
    arrstr = JSON.parse(localStorage.todo);
    console.log(arrstr);
    $.each(arrstr, function (indexInArray) { 
        $('.container').append(inserhtml(arrstr[indexInArray].todo,arrstr[indexInArray].done));
    });
}
loadtodo();