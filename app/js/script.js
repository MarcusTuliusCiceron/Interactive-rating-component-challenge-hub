const ratingBtn = document.querySelectorAll('.rateBtn')
const submitBtn = document.querySelector('.card__review__submit')
const cardReview = document.querySelector('.card__review')
const cardThanks = document.querySelector('.card__thanks')
const selectedRate = document.querySelector('.card__thanks__selectedRate')



let ratingValue = 0
console.log(ratingValue)

function removeActive(item){
    item.classList.remove('active')
}

function myFunction(item){
    item.addEventListener('click', ()=>{
        console.log(item.innerText)
        ratingValue = item.innerText
        ratingBtn.forEach(removeActive)
        item.classList.add('active');
    })
}

ratingBtn.forEach(myFunction)
submitBtn.addEventListener('click', ()=>{
    console.log(ratingValue)
    if (ratingValue == 0){
        console.log('no active rating')
        return
    }
    else{
        selectedRate.innerText = `You selected ${ratingValue} out of 5`
        cardReview.classList.add('fadeout')
        setTimeout(animateIn, 600);
        
    }
})


function animateIn(){
    cardThanks.classList.remove('hidden')
    cardThanks.classList.add('fadein')
}