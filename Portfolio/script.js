/* ========typing animation==== */
var typed= new Typed(".typing",{
    strings:["","Web Designer", "Software Developer", "Web Designer", "Gamer"],
    typeSpeed:100,
    Backspeed:60,
    loop:true
})

const $items = document.querySelectorAll('.aside li');

$items.forEach(($item)=>{
    $item.addEventListener(
        'click',
        ()=>{
            $items.forEach((otherItem) =>{
                otherItem.classList.remove('active');
            });
            $item.classList.add('active')
        },
    );
});