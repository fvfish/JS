var gunel = document.querySelector('.gun');
bindevent('#btnext', 'click', function(){
    var imgs = parseInt(gunel.dataset.imgs);
    var active = parseInt(gunel.dataset.active);
    console.log(active);
    var nextactive = active + 1;
    if (nextactive == imgs) {
        nextactive = 0;
    }
    var nowelement = document.querySelector('#imgs-'+active);
    nowelement.classList.remove('active');
    gunel.dataset.active = nextactive; 
    var nextselector = '#imgs-'+nextactive;
    var nextelement = document.querySelector(nextselector);
    nextelement.classList.add('active');
})