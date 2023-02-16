let currentBtn = null
const buttons = document.getElementsByClassName('number')
const submit = document.querySelector('#submit')
const box = document.querySelector('#ratingBox')
let submitBtnClicked = false

document.addEventListener('click', ()=>{
    if (!submitBtnClicked){
        for(let i = 0; i < 5; i++){
            buttons[i].style.backgroundColor = "rgb(66, 76, 73)"
        }
        if (currentBtn!=null) {
            currentBtn.style. backgroundColor = ' hsl(217, 12%, 63%)'
        }
    }
})



const submitBtn = ()=>{
    if (currentBtn!=null){
        submitBtnClicked = true

        document.querySelector('#ratingBox').innerHTML = ''

        const div1 = document.createElement('div')
        const div2 = document.createElement('div')
        const div3 = document.createElement('div')
        const head = document.createElement('h1')
        const subText = document.createElement('p')
        box.append(div1, div2, div3)

        div2.classList.add('text', 'flex')
        div3.classList.add('text', 'flex')

        //div1
        const image = document.createElement('img')
        image.src = 'images/illustration-thank-you.svg'
        div1.appendChild(image)

        //div2
        div2.style.backgroundColor = "rgb(66, 76, 73)"
        div2.style.color = ' hsl(25, 97%, 53%)'
        div2.innerText = "You selected "+currentBtn.innerHTML+ " out of 5"
        div2.style.height = '2.2rem'
        div2.style.width = '14rem'
        div2.style.borderRadius = '15px'
        
        //div3
        div3.append(head, subText)
        head.innerText = 'Thank you!'
        
        subText.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"

        subText.style.lineHeight = '25px'
        div3.style.marginLeft = '.2rem'
        div3.style.marginRight = '.2rem'

        //other
        box.style.alignItems = 'center'

    }
}
