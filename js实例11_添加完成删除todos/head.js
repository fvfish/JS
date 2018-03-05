//绑定单个元素的单击事件////////////////////////////////////////////////////////////
var bindevent = function(selector, event, callback){
    this.element = document.querySelector(selector);
    element.addEventListener(event, callback);
}
//插入html///////////////////////////////////////////////////////////////////////
var appendhtml = function(melement, mhtml){
    melement.insertAdjacentHTML('beforeend', mhtml);
}