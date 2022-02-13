let table = document.getElementById('table')
for(a=1; a<=3; a++){
    let tr = document.createElement('tr')
    for(b=1; b<=3; b++){
        let td = document.createElement('td')
        tr.appendChild(td)
        td.classList.add(`td${b}`)
        let button1 = document.getElementById('button1')
        let div = document.createElement('div')
            td.appendChild(div)
            button1.addEventListener('click', function(){
                div.innerHTML=`<div class="box"><img src="./img/Без названия.jfif" alt=""></div>`
                table.style.background=`black`
                td.style.border=`1px solid white`
        let button2 = document.getElementById('button2')
            button2.addEventListener('click',function(){
                div.innerHTML=`<div class="box"><img src="./img/den-sviatogo-valentina-liod-serdechki-otrazhenie-fon-sinii-n.jpg" alt=""></div>`
                table.style.background=`rgb(24, 64, 184)`
            })
        let button3 = document.getElementById('button3')
            button3.addEventListener('click', function(){
                div.innerHTML=`<div class="box"><img src="./img/Q57J0RYNKD47szqE.jpg" alt=""></div>`
                td.style.border=`1px solid red`
                table.style.background=`red`
            })
    })
    }
    table.appendChild(tr)
}

let tds = document.querySelectorAll('td')
for(let c = 0; c < tds.length; c++){
    tds[c].addEventListener('click', function fun(){
        let input = document.createElement('input')
        input.value = this.innerHTML
        this.innerHTML=''
        this.appendChild(input)
        input.classList.add('active')
        this.classList.add('yacheyka')
        let element = this
        input.addEventListener("blur", function(){
            element.innerHTML = this.value
            element.addEventListener("click", Fun)
        })
        this.removeEventListener("click", fun)
    })
}
