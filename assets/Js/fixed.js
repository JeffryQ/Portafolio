(function (){
    let navbar = document.querySelector('#navbar');
    let main = document.querySelector('main');
    let navbarHeight = navbar.getBoundingClientRect().height;
    let breakpoint = main.offsetTop - navbarHeight;
    let WindowPos;
    let isFixed = false;

    function updatePos() {
        WindowPos = window.scrollY;
    }

    function onScrooll () {
        updatePos(); 
        console.log(WindowPos, breakpoint && !isFixed);
        if (WindowPos >= breakpoint) {
            navbar.classList.remove('open');//mantiene abierto o cerrado

            navbar.classList.add('navbar-fixed');//añade la clase
            main.style.cssText = "margin-top: " + navbarHeight + 'px;';//añade un margen que de el nab al main para evitar un salto
            isFixed=true;
            //console.log('añade clase');
        }
        else if (WindowPos <= breakpoint && isFixed) {
            navbar.classList.remove('navbar-fixed');//remueve la clase y el nav regresa a su lugar
            main.style.cssText = "margin-top:" + 0;//remueve el margen para que no altere el main al integrarse el nav
            isFixed=false;
            //console.log('remueve clase');
        }
        
    }
    document.addEventListener('scroll', onScrooll);
})()