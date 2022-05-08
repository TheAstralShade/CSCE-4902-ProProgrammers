function displayHelp(){
    document.getElementById('help').classList.toggle('showhelp');
}

window.onclick = function(event){
    if(!event.target.matches('.helpbtn')){
        var hc = document.getElementsByClassName('help_content');
        for(var i = 0; i < hc.length; i++){
            if( hc[i].classList.contains('show')){
                hc[i].classList.remove('show');
            }
        }
    }
}