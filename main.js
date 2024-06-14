$(document).ready(function(){

    $('form').submit(function(e){
        e.preventDefault();

        const taskParaAdd = $('#campo-add-task').val();
        const novaTask = $(`<li>${taskParaAdd}</li>`);
        novaTask.appendTo('#ul-tasks');
        $('#ul-tasks').css('display', 'block');

        $('#campo-add-task').val('');
    });

    $('#ul-tasks').on('click', 'li', function(){    
        $(this).toggleClass('task-ok');
    });

});