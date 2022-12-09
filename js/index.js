
async function busca(nome){
    
    try {
        
        const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
        const nova = await url.json()
        
        console.log(nova)

    } catch (erro) {
        
        console.log(erro)
    }

}


let nome = document.querySelector('.cep')
nome.addEventListener('focusout',()=> busca(nome.value))


