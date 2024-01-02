const navMenu=document.getElementsByClassName('navMenu')

 function clickHandler(event){
    event.preventDefault(); 
    const targetSectionId=this.textContent.trim().toLowerCase()
    const targetSection=document.getElementById(targetSectionId)
    
    
    let intervalId=setInterval(() => {
        let targetSectionCo=targetSection.getBoundingClientRect();
        console.log(targetSectionCo.top)
        if(targetSectionCo.top<=0){
            clearInterval(intervalId);
            return ;
        }
    window.scrollBy(0,100)}, 50);
    
 }
for(let i=0;i<navMenu.length;i++){
    navMenu[i].addEventListener('click',clickHandler)
}


// const progressBar=document.querySelectorAll('.skill-progress > div');
// const skillsContainer=document.getElementById('skills-container')
// window.addEventListener('scroll',checkScroll)
// let animationDone=false;

// function intialiseBar(){
//     for(let bar of progressBar){
//         bar.style.width=0+'%';
//     }
// }

// intialiseBar()

// function fillBar(){
//     for(let bar of progressBar){
//         let targetWidth=bar.getAttribute('data-bar-width')
//         let currentWidth=0;
//         let intervalId=setInterval(() => {
//             if(currentWidth>targetWidth){
//                 clearInterval(intervalId)
//                 return;
//             }
//             currentWidth++;
//             bar.style.width=currentWidth+'%';
//         }, 10);
//     }
// }


// function checkScroll(){
//     let coordinate=skillsContainer.getBoundingClientRect();
//     if(!animationDone &&  coordinate.top<=window.innerHeight){
//         animationDone=true
//         fillBar()
//     }else if(coordinate.top>window.innerHeight){
//         animationDone=false;
//         intialiseBar()
//     }
// }


const progressBar=document.querySelectorAll('.skill-progress > div');


window.addEventListener('scroll',handleScroll);

function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBar) {
    initialiseBar(bar);
}

function fillBar( bar){
    let currentWidth=0;
    let targetWidth=bar.getAttribute('data-bar-width')

    let intervalId=setInterval(() => {
        if(currentWidth>targetWidth){
            clearInterval(intervalId)
            return 
        }
        currentWidth++;
        bar.style.width=currentWidth+"%"
    }, 5);
}

function handleScroll(){
    
    for(let i=0;i<progressBar.length;i++){
        let coordinate=progressBar[i].getBoundingClientRect();
        if(progressBar[i].getAttribute("data-visited")=="false" && coordinate.top <= (window.innerHeight - coordinate.height)){
            progressBar[i].setAttribute("data-visited",true)
            fillBar(progressBar[i])
        }else if(coordinate.top>window.innerHeight){
            progressBar[i].setAttribute("data-visited",false)
            initialiseBar(bar)
        }
    }
}