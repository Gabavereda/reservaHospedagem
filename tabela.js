// GET para pegar os dados
$.get("http://localhost:3000/reservas", function (response, status) {

    console.log(response);

    if (status === "success") {
        // Validando array
        const reservas = Array.isArray(response) ? response : response.reservas;
        if (!reservas) {
            console.error("Verifique o script, não encontrou nenhum item em 'reservas'");
            return;
        }
        // Encontrando a tabela
        const tabela = $("#tabelaMontada tbody");
        // Limpa as linhas antigas (se houver)
        tabela.empty();
        // Iterando sobre reservas[]
        reservas.forEach((reserva, index) => {
            tabela.append(`
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${reserva.nome}</td>
                    <td>${reserva.email}</td>
                    <td>${reserva.dataEntrada}</td>
                    <td>${reserva.dataSaida}</td>
                    <td>${reserva.qntdAdult}</td>
                    <td>${reserva.qntCriancas}</td>
                    <td>${reserva.observacoes}</td>
                </tr>
            `);
        });
    } else {
        console.error("Erro ao carregar os dados:", status);
    }
});