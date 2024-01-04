function showhidemenu(){
    var menu = document.querySelector('nav')
    var botaomenu = document.querySelector('#area-icon-menu')
    var iconmenu = document.querySelector('#area-icon-menu span')
    var iconin = document.querySelector('span#icon-menu-in')
    var iconout = document.querySelector('span#icon-menu-out')

    if (menu.classList.contains('menu-hide') || menu.classList.contains('menu-none')){

        menu.classList.remove('menu-none')
        menu.classList.remove('menu-hide')
        menu.classList.add('menu-show')
        botaomenu.classList.remove('icon-menu-left')
        botaomenu.classList.add('icon-menu-right')
        iconin.classList.remove('icon-menu-show')
        iconin.classList.add('icon-menu-hide')
        iconout.classList.remove('icon-menu-hide')
        iconout.classList.add('icon-menu-show')

    } else if (menu.classList.contains('menu-show')){

        menu.classList.remove('menu-show')
        menu.classList.add('menu-hide')
        botaomenu.classList.remove('icon-menu-right')
        botaomenu.classList.add('icon-menu-left')
        iconin.classList.remove('icon-menu-hide')
        iconin.classList.add('icon-menu-show')
        iconout.classList.remove('icon-menu-show')
        iconout.classList.add('icon-menu-hide')

    }
}

function palavras(){
    
}


var intervalo = window.setInterval(palavras, 2000)
function palavras(){
    var palavras = document.querySelector('#trabalhos h1 span')
    var vetpalavras = ['Responsivos', 'Modernos', 'Para você']
    
    if (palavras.innerHTML = 'Responsivos'){valorvet = 0}
    if (palavras.innerHTML = 'Modernos'){valorvet = 1}
    if (palavras.innerHTML = 'Para você'){valorvet = 2}
    //palavras.innerHTML = vetpalavras[valorvet-1]

    console.log(valorvet)
}

