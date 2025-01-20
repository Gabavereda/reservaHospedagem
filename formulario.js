


// POST para enviar Dados
$(document).ready(function () {
    // Validação do formulário
    $("#formulario").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            dataEntrada: {
                required: true
            },
            dataSaida: {
                required: true
            },
            qntdAdult: {
                required: true
            },
            qntCriancas: {
                required: true
            }
        },
        messages: {
            nome: {
                required: "Campo nome é obrigatório"
            },
            email: {
                required: "Campo e-mail é obrigatório",
                email: "O e-mail deve estar no formato: xxx@xxxx.xxx"
            },
            dataEntrada: {
                required: "Insira a data de entrada, por favor!"
            },
            dataSaida: {
                required: "Insira a data de saída, por favor!"
            },
            qntdAdult: {
                required: "Insira o número de adultos, por favor!"
            },
            qntCriancas: {
                required: "Insira o número de crianças, por favor!"
            }
        },

        submitHandler: function (form) {
            //  se a validação passar
            var nome = $("#nome").val();
            var email = $("#email").val();
            var dataEntrada = $("#dataEntrada").val();
            var dataSaida = $("#dataSaida").val();
            var qntdAdult = $("#qntAdult").val();
            var qntCriancas = $("#qntCriancas").val();
            var observacoes = $("#observacoes").val();

            // Montando JSON
            var data = {
                nome: nome,
                email: email,
                dataEntrada: dataEntrada,
                dataSaida: dataSaida,
                qntdAdult: qntdAdult,
                qntCriancas: qntCriancas,
                observacoes: observacoes
            };

            // AJAX com JSON
            $.ajax({
                type: 'POST',
                url: 'http://localhost:3000/reservas',
                contentType: 'application/json',
                data: JSON.stringify(data),
            })
                .done(function (response) {
                    console.log("Resposta recebida:", response);
                    alert("Reserva salva!");
                    // reset do form
                    $("form")[0].reset();
                })
                .fail(function (xhr, status, error) {
                    console.error("Erro na requisição:", xhr, status, error);
                    alert("Falha no POST: " + error);
                });
        }
    });

    // Envio do formulário
    $("form").submit(function (event) {
        // Impede o envio normal do formulário
        event.preventDefault();

        //  validando
        if ($("#formulario").valid()) {

        }
    });
});