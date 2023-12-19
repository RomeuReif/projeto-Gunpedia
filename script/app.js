document.addEventListener('DOMContentLoaded', function() {
    // carregar os dados do arquivo armas.json
    fetch('armas.json')
        .then(response => response.json())
        .then(data => {
            const mainContent = document.getElementById('main-content');

            data.forEach(arma => {
                // cria um card para cada arma e adiciona a class card
                const card = document.createElement('div');
                card.classList.add('card');

                // cria um elemento img e adiciona a foto da arma
                const imagem = document.createElement('img');
                imagem.src = arma.imagem;
                card.appendChild(imagem);

                // cria uma div e adiciona a class card-body
                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                // cria um h2 e adiciona a class card-title e troca o conteudo pelo que está no json
                const nome = document.createElement('h2');
                nome.classList.add('card-title');
                nome.textContent = arma.nome;
                cardBody.appendChild(nome);

                // cria uma div e adiciona a descricao dentro da div
                const descricao = document.createElement('p');
                descricao.classList.add('card-description');
                descricao.innerHTML = `<strong>Calibre: </strong>${arma.calibre}<br><strong>Capacidade:</strong> ${arma.capacidade}<br><strong>Origem:</strong> ${arma.origem}`;
                cardBody.appendChild(descricao);

                // cria uma div e adiciona a class card-footer
                const cardFooter = document.createElement('div');
                const buttonVerMais = document.createElement('button');
                buttonVerMais.textContent = "Ver mais";
                buttonVerMais.classList.add('btnVerMais');
                buttonVerMais.addEventListener("click", () =>{
                    const infoElement = document.createElement('div');
                    infoElement.classList.add('info-overlay');
                    infoElement.innerHTML = `
                        <h2>${arma.nome}</h2>
                        <p>Calibre: ${arma.calibre}</p>
                        <p>Funcionamento: ${arma.funcionamento}</p>
                        <p>Comprimento: ${arma.comprimento}</p>
                        <p>Altura: ${arma.altura}</p>
                        <p>Largura: ${arma.largura}</p>
                        <p>Peso: ${arma.peso}</p>
                    `
                    document.body.appendChild(infoElement)
                    infoElement.addEventListener('click', function () {
                        infoElement.remove();
                    });
                })


                cardFooter.appendChild(buttonVerMais);
                cardFooter.classList.add('card-footer');
                cardBody.appendChild(cardFooter);

                // adiciona o card ao dentro do main-content
                card.appendChild(cardBody);
                mainContent.appendChild(card);
            });
        })
        .catch(error => console.log('Erro ao carregar dados', error));
});