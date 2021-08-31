var items = [];

document.querySelector('input[type=submit]').addEventListener('click', ()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=valor_produto]');
    var somaProduto = document.querySelector('.soma-produto h3');

    items.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    });

    let listaProdutos = document.querySelector('.lista-produtos');
    listaProdutos.innerHTML = "";
    let soma = 0;
    items.map((val, index)=>{
        soma+=parseFloat(val.valor);
        listaProdutos.innerHTML+= `
        <div class="lista-produto-single" id="item`+index+`">
            <h3>`+val.nome+`</h3>
            <h3 class="price-produto">R$ `+val.valor+`</h3>
            <input type="submit" value="Deletar" onclick="return deletar(`+index+`);">
        </div>
        `;
    });

    soma = soma.toFixed(2);
    nomeProduto.value = "";
    precoProduto.value = "";

    somaProduto.innerHTML = "Total: " + "R$" + soma;
});

document.querySelector('.botao-limpar input[type=submit]').addEventListener('click', ()=>{
    var items = [];

    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produto h3').innerHTML = "Total: R$00,00";
});

function deletar(index){
    console.log(items);
}