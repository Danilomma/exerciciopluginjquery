$(document).ready(function(){
    $('#cep').mask('00000-000',{
        placeholder:'00000-000'
    });

    $('#CPF').mask('000.000.000.00',{
        placeholder:'000.000.000.00'
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder:'(00) 00000-000'

    })

    $('form').validate({
        rules: {
            nome: {
                required : true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            CPF: {
                required: true
            },
            cep : {
                required: true
            }
        },

})

})