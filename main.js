var onOff = true
$('#button').on('click',function(){
    if(onOff){
        $('#popover').show()
        wrapper.addEventListener('click', function(e){
            e.stopPropagation()
        })
        setTimeout(function(){
            $(document).one('click',function(){
                $('#popover').hide()
                onOff = true
            })
        },0)
        onOff = false
    }else{
        $('#popover').hide()
        onOff = true
    }
   
})