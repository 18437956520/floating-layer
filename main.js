wrapper.addEventListener('click', function(x){
    x.stopPropagation()
})

click.addEventListener('click', function(){
    popover.style.display = 'block'
})

document.addEventListener('click', function(){
    popover.style.display = 'none'
})