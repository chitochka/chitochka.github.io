onload = function(){
    console.log('\n\n--  S-T-A-R-T  --')

    var cenik_btn = document.getElementById('cenik_btn')
     table1 = document.getElementById('table1')
     table2 = document.getElementById('table2')

    cenik_btn.onclick = function(){
        if (table1.classList.contains('hide')) {
            table1.classList.remove('hide')
            table2.classList.add('hide')
        } else {
            table2.classList.remove('hide')
            table1.classList.add('hide')

        }
    }


    var myCarousel = document.querySelector('#carouselExampleControls')
    ccc = carousel = new bootstrap.Carousel(myCarousel)

    myCarousel = document.querySelector('#carousel-1')
    c1 = carousel1 = new bootstrap.Carousel(myCarousel)

   
    

}