//插入html///////////////////////////////////////////////////////////////////////
var appendhtml = function(melement, mhtml){
    melement.insertAdjacentHTML('beforeend', mhtml);
}
/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////
var myajax = function(method, path, data, callback){
    var xmlthml = new XMLHttpRequest();
    xmlthml.open(method, path, true);
    xmlthml.onreadystatechange = function(){
        if (xmlthml.readyState == 4) {
            callback(xmlthml);
        }
    }
    xmlthml.send(data);
}
//ajax函数
/////////////////////////////////////////////////////////////////////////
var removeallclass = function(classname){
    var selector = "."+classname;
    var elements = document.querySelectorAll(selector);
    for (var index = 0; index < elements.length; index++) {
        var element = elements[index];
        element.classList.remove(classname);
    }
}
//删除所有的class
//绑定单个元素的单击事件////////////////////////////////////////////////////////////
var bindevent = function(selector, event, callback){
    this.element = document.querySelector(selector);
    element.addEventListener(event, callback);
}
/////////////////////////////////////////////////////////////////////////
//绑定单个事件
var bindallevent = function(selector, event, callback){
    this.elements = document.querySelectorAll(selector);
    for (var  index = 0; index < elements.length; index++) {
        this.element = elements[index];
        element.addEventListener(event, callback);
    }
}
//绑定所有事件
var arrrandom = function(number){
    var arry = [];
    for (var index = 0; index < number; index++) {
        if (Math.floor(Math.random()*10)<5){
            arry.push(0)
        }
        else{
            arry.push(9);
        }
    }
    return arry;
}
//一维数组，随机0，9
var dbarryrandom = function(widthnum, heightnum){
    var dbarr = [];
    for (var index = 0; index < heightnum; index++) {
        dbarr.push(arrrandom(widthnum));
    }
    return dbarr;
}
//二维数组，随机0，9
