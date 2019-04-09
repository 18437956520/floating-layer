click.addEventListener('click', function(x){
    popover.style.display = 'block'
    x.stopPropagation()
})

document.addEventListener('click', function(){
    popover.style.display = 'none'
})