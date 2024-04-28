let page2 = document.querySelector('.page2-box2');
let menu = document.querySelector('.menu');
let slider = document.querySelector('.slidebar');
let main = document.querySelector('#main');
let page6 = document.querySelector('.page6-inner');
let xxx1 = document.querySelector('.xxx1');
let xxx2 = document.querySelector('.xxx2');
let xxx3 = document.querySelector('.xxx3');
let xxx4 = document.querySelector('.xxx4');
let xxx5 = document.querySelector('.xxx5');
let xxx6 = document.querySelector('.xxx6');

page2.addEventListener('mouseenter', () => {
    let counter1 = document.querySelector('.page2-anim-h4');
    let counter2 = document.querySelector('.page2-anim-h5');
    var counter = 0;
    var count = 0;
    var interval = setInterval(() => {
        counter++;
        counter1.innerHTML = `${counter}+`;
        if (counter >= 10) {
            clearInterval(interval);
        }
    }, 100);
    var interval2 = setInterval(() => {
        count++;
        counter2.innerHTML = `${count}+`;
        if (count >= 182) {
            clearInterval(interval2);
        }
    }, 10);
    page2.addEventListener('mouseleave', () => {
        counter1 = counter;
        counter2 = count;
    })
})


let flag = false;
menu.addEventListener('click', () => {
    // flag = !flag ? menu.innerHTML = `<i class="ri-close-line"></i>` : menu.innerHTML = `<i class="ri-menu-line"></i>`
    if (flag == false) {
        menu.innerHTML = `<i class="ri-close-line"></i>`;
        slider.style.right = `-5vw`
        main.style.opacity = `10px`
        flag = true;
    } else {
        menu.innerHTML = `<i class="ri-menu-line"></i>`;
        slider.style.right = `-30vw`
        flag = false;
    }
})



page6.addEventListener('mouseenter', () => {
    xxx1.style.left = `0vw`
    xxx2.style.bottom = `0vw`
    xxx3.style.top = `0vw`
    xxx4.style.right = `0vw`
    xxx5.style.left = `0vw`
    xxx6.style.bottom = `0vw`
    page6.addEventListener('mouseleave', () => {
        // xxx1.style.left = `-10vw`
        xxx2.style.bottom`-10vw`
        xxx3.style.top = `-10vw`
        xxx4.style.right = `-10vw`
        xxx5.style.left = `-10vw`
        xxx6.style.bottom`-10vw`
    })
})





