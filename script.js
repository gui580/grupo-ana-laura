document.getElementById("btnBuscar").addEventListener("click", function () {

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            if (!res.ok) {
                throw new Error("Erro ao buscar usuários");
            }
            return res.json();
        })
        .then(usuarios => {

            // Exibindo JSON formatado
            document.getElementById("saida").textContent =
                JSON.stringify(usuarios, null, 4);

        })
        .catch(erro => {
            document.getElementById("saida").textContent =
                "Erro na requisição.";
            console.log("Erro:", erro);
        });

});