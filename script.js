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


let countVaribale = document.querySelector('.contant-var');
let pageleft = document.querySelector('#page8-left');
let pageright = document.querySelector('#page8-right');
let pageCounter = 1;

let page8pic = document.querySelector('#page8-pic');
let page8name = document.querySelector('.page8-name');
let page8pos = document.querySelector('.page8-pos');
let page8com = document.querySelector('#page8-com');
let pageContentt = document.querySelector('.page8-boxx');


let _data = [
    [],
    ['https://framerusercontent.com/images/0Ky7LYRnlV1iS8GX2KQ9RIF4WUM.jpg', 'Pablo Dybala', 'CEO of', 'IBM Global', '“Drake - A Developer with the creativity, professional and master of code. Much more than what i\'m expect. High quality product & flexiable price. Recommended!.”'],
    ['https://framerusercontent.com/images/gp4hZGj7A40koYej2r2J1hUuIoI.jpg', 'Christina Morillo', 'Project Management Of ', 'Invasion App Inc', '“Drake was a real pleasure to work with and we look forward to working with him again. He\'s definitely the kind of designer that you can trust with any project from A-Z.”'],
    ['https://framerusercontent.com/images/eclSLKFZL20IBMG7WH0bRYkQgw.jpg', 'Phil Foden', 'Director Of ', 'Envato LLC', '“Extremely profressional and fast service!. Drake is a master of code and he also very creative. We done 3 projects with him and certain will continue.”']
];


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


pageright.addEventListener('click', () => {
    pageCounter++;
    if (pageCounter <= 3) {
        countVaribale.innerHTML = pageCounter
        page8pic.innerHTML = `<img src="${_data[pageCounter][0]}" alt="">`
        page8name.innerHTML = _data[pageCounter][1]
        page8pos.innerHTML = `${_data[pageCounter][2]} <span class="page2-heading-inner" id="page8-com">${_data[pageCounter][3]}</span>`;
        pageContentt.innerHTML = `<p class="page8-content" id="page8-content1"> ${_data[pageCounter][4]} </p>`
    }

})


