const playSound = (buttonName) =>{
    buttonAnimator(buttonName)
    switch (buttonName){
        case "w":
            let crash = new Audio('sounds/crash.mp3');
            crash.play()
            break
        case "a":
            let kick_bass = new Audio('sounds/kick_bass.mp3');
            kick_bass.play()
            break
        case "s":
            let snare = new Audio('sounds/snare.mp3');
            snare.play()
            break
        case "d":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play()
            break
        case "j":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play()
            break
        case "k":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play()
            break
        case "l":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play()
            break
        default: console.log(buttonName)
    }
}

const buttonAnimator =(selectedKey)=>{
    document.querySelector("."+selectedKey).classList.add('pressed')
    setTimeout(()=>{
        document.querySelector("."+selectedKey).classList.remove('pressed')
    },100)
}

const clickHandler=()=>{
    let buttonArray= document.querySelectorAll('.drum')
    buttonArray.forEach(element=>{   
        element.addEventListener('click',()=>{
            playSound(element.innerHTML)
        })
    })
}

const keypressHandler=()=>{
    addEventListener('keydown',(event)=>{
        playSound(event.key)
    })
}


clickHandler()
keypressHandler()