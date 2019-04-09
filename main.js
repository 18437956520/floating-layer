$(click).on('click', function(){
    $(popover).show()
})

$(wrapper).on('click', function(x){
    x.stopPropagation()
})

$(document).on('click', function(){
    $(popover).hide()
})