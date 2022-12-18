
async function busca(nome){
    
    try {
        
        const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
        const c = await url.json()
        console.log(c)
        
        
        let p = document.querySelector('p')
        p.innerText = c.name

     
    
        let img = document.querySelector('img')
        img.setAttribute('src',c.sprites.other.dream_world.front_default)
        

       

        let span = document.querySelector('span')
        span.innerText = c.abilities[0].ability.name

    } catch (erro) {
        console.log(erro)
    }
}


let nome  = document.querySelector('.nome')
nome.addEventListener('focusout',()=> busca(nome.value))