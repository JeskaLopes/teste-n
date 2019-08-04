let count = document.getElementById('campo');
let countMin = document.getElementById('btnMin');
let countMax = document.getElementById('btnMax')
let sucess = document.getElementById('divSucess')
let error = document.getElementById('divError');
let sum= document.getElementById('submit');
let esc = document.getElementById('campoCaixa')

countMin.addEventListener("click", function(e){
    e.preventDefault();
    count.value --  
    /* console.log("pegou aqui"); */
});

countMax.addEventListener("click", function(e){
    e.preventDefault();
    count.value ++  
    /* console.log("pegou tbm") */
});


sum.addEventListener("click", function(e){ 
    e.preventDefault()
    if(esc.value == " " || count.value == 1  ){
        $(sucess).addClass('active').removeClass('none'), $(error).addClass('none').removeClass('active')   
    }

    else if(count.value == 1){
        $(sum).removeClass('disabled')
    }

    else if(count.value == 0 || count.value == ""){
        $(error).addClass('active').removeClass('none');
    }
    
    else if (count.value === 0 && esc.value !== ""){
        $(sucess).addClass('none').removeClass('active');
    }

    else {
        return $(sucess).addClass('active').removeClass('none'), $(error).addClass('none').removeClass('active');
    }
});





    

