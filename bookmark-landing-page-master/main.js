// Creating a menu-bar
const navMobile = document.querySelector('.nav-mobile')
const navClose = document.querySelector('.nav-close')
const navOpen = document.querySelector('.nav-open-icon')

navClose.addEventListener('click', () => {
    navMobile.style.transform = `translateY(-200%)`
})
navOpen.addEventListener('click', () => {
    navMobile.style.transform = `translateY(0)`
})


// creating a tabbed component
const headerContainer = document.querySelector('.tabbed-heading')
const featureHeaders = document.querySelectorAll('.feature-header')
const bodyContainers = document.querySelectorAll('.tabbed-item')
const barTracker = document.querySelector('.active-tab')


headerContainer.addEventListener('click', (e) => {
    // console.log(e.target)
    if(e.target.dataset.num){
        
        const targetNum = e.target.dataset.num
        
        featureHeaders.forEach(featureHeader => {
            featureHeader.classList.remove('active-feature')
        })
        headerContainer.querySelector(`.header-${targetNum}`).classList.add('active-feature')

        bodyContainers.forEach(bodyContainer => {
            bodyContainer.classList.remove('active-body')
        })
        document.querySelector(`.feature-body-${targetNum}`).classList.add('active-body')

        barTracker.style.transform = `translateX(${targetNum * 100}% )`
    }
})



// Creating an accordion
const accordionItems = document.querySelectorAll('.accordion-question')

accordionItems.forEach(accordionItem => {
    // console.log(accordionItem)
    accordionItem.addEventListener('click', (e) => {
        // console.log(accordionItem)
        let iconOpen = accordionItem.querySelector('.icon-close')
        iconOpen.classList.toggle('icon-open')
        accordionAnswers = accordionItem.nextElementSibling
        
        //  console.log(iconOpen.classList)
        if(iconOpen.classList.contains('icon-open')){
            accordionAnswers.style.height = accordionAnswers.scrollHeight + 'px'
        }
        else{
            accordionAnswers.style.height = 0
        }

    })
})
