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
            accordionAnswers.classList.add('active')
        }
        else{
            accordionAnswers.classList.remove('active')
        }

    })
})