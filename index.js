

function contact(event) {
    event.preventDefault()
   // emailjs
   //     .sendForm(
    //        'service_44rzn2k',
    //        'template_470wblg',
    //        event.target,
    //        'shLES4t1afgFHflyp'
     //   ).then(() => {
     //       console.log(`this worked`)
     //   })

}

const loading = document.querySelector( '.modal__overlay--loading')
const success = document.querySelector( '.modal__overlay--success')
loading.classList += " modal__overlay--visible"

setTimeout(() => {
 loading.classList.remove('modal__overlay--visible');
 success.classList += " modal__overlay--visible"
}, 1000);
