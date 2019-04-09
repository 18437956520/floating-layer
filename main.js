$(click).on('click', function(){
    $(popover).show()

    $(document).one('click', function(){
        $(popover).hide()
        console.log(1)
    })
})

$(wrapper).on('click', function(x){
    x.stopPropagation()
})

