const nav = document.querySelector('.nav')
    burger = document.querySelector('.burger')
    menu = document.querySelector('.menu')
    body = document.querySelector('body')
    menuItem = document.querySelectorAll('.menu-item')
    console.log(menuItem)


    burger.addEventListener('click', () =>{
        nav.classList.toggle('open');
        menu.classList.toggle('menu-open')
    });

    body.addEventListener('click', e =>{
        let clickedEl = e.target
        console.log(clickedEl)
        if (!clickedEl.classList.contains('burger') && !clickedEl.classList.contains('menu-items') && !clickedEl.classList.contains('line')){
            nav.classList.remove('open')
            menu.classList.remove('menu-open')
        }
    })

    for (let i = 0; i < menuItem.length; i++){
        menuItem[i].addEventListener('click', () =>{
            let current = document.querySelector('active');

            if (current.length > 0){
                current[0].className = current[0].classList.add(' active')
            }

            this.classList += 'active'
        })
    }
    

    
