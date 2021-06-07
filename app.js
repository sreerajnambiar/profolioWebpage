


const navslide =()=>{
    const burger = document.querySelector('.burger');
    const list_items = document.querySelector('.list-items');

    burger.addEventListener('click',()=>{
        burger.classList.toggle('change')
        console.log("clicked");
        list_items.classList.toggle("list-items-active");
        
        
    });
}
navslide();


$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('.navbar').css('background','white');
        $('.list-items').css('background','white')
        $('.navbar').css('-webkit-box-shadow','10px 10px 23px -15px rgba(0,0,0,0.75)');
        $('.navbar').css('-moz-box-shadow', '10px 10px 23px -15px rgba(0,0,0,0.75)');
        $('.navbar').css('box-shadow', '10px 10px 23px -15px rgba(0,0,0,0.75)');
   
    } else
    {
        $('.navbar').css('background','white');
        $('.list-items').css('background','white');
        $('.navbar').css('-webkit-box-shadow','0px 0px 0px 0px rgba(0,0,0,0)');
        $('.navbar').css('-moz-box-shadow', '0px 0px 0px 0px rgba(0,0,0,0)');
        $('.navbar').css('box-shadow', '0px 0px 0px 0px rgba(0,0,0,0)');
   
   
    }
    })

 