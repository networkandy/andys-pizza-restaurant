document.querySelector('.open-menu').addEventListener('click', openMenu);
document.querySelector('.close-menu').addEventListener('click', closeMenu);

function openMenu(){
    document.querySelector('.open-menu').style.display = 'none';
    const open = document.querySelector('.open-menu');
    if(open.style.display = 'none'){
        const close = document.querySelector('.close-menu');
        const nav = document.querySelector('nav');
        const list = document.querySelector('nav ul');
        close.style.display = 'inline-block';
        close.style.zIndex = '10';
        close.style.left = '85%';
        nav.style.width = '200px';
        nav.style.display = 'block';
        list.style.display = 'block';
        

    }
}


function closeMenu(){
    document.querySelector('.close-menu').style.display = 'none';
    const close = document.querySelector('.close-menu');
    if(close.style.display = 'none'){
        const nav = document.querySelector('nav');
        const open = document.querySelector('.open-menu');
        nav.style.width = '0';
        open.style.display = 'inline-block';
        open.style.zIndex = '10';
    }

}
