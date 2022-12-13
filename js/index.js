
async function busca(nome){
    
    try {
        
        const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
        const c = await url.json()

        
       
        let p = document.querySelector('p')
        p.innerText = c.name

        let img = document.querySelector('img')
        img.setAttribute('src',c.sprites.front_default)

      

    } catch (erro) {
        
        console.log(erro)
    }

}






let nome  = document.querySelector('.nome')
nome.addEventListener('focusout',()=> busca(nome.value))