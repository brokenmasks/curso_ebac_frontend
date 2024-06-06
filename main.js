const form = document.getElementById('form');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
const btn = document.getElementById('btn');

function verificarCampos(){
    if(campoA.value == '' && campoB.value == ''){
        btn.disabled = true;
    }else{
        btn.disabled = false;
    }
}

form.addEventListener('keyup', function(){
    document.querySelector('.mensagem-sucesso').style.opacity = '0';
    document.querySelector('.mensagem-falha').style.opacity = '0';
    campoB.style.border = '';

    verificarCampos();
})

form.addEventListener('submit', function(e){
    e.preventDefault();

    if(parseInt(campoA.value) < parseInt(campoB.value)){
        document.querySelector('.mensagem-sucesso').style.opacity = '1';
        campoA.value = '';
        campoB.value = '';
        btn.disabled = true;
    }
    else{
        document.querySelector('.mensagem-falha').style.opacity = '1';
        campoB.style.border = '2px solid #f94144';
    }
})