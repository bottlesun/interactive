let prev_button, next_button;
let contentWrap;
let disk_inner;
let pageNum = 0;
let totalNum = 0;
let album;
let point;
let bgArray = new Array();
bgArray[0] = ["#0272a4","#f6a564"];
bgArray[1] = ["#b6bfc8","#36595b"];
bgArray[2] = ["#e58e82","#6f569f"];

window.onload = () => {
    prev_button =  document.getElementsByTagName('button')[0]
    next_button =  document.getElementsByTagName('button')[1]
    album = document.querySelectorAll('.album')
    point = document.querySelectorAll('.pointWrap li')
    contentWrap = document.querySelector('.contentWrap');
    disk_inner = document.querySelectorAll('.disk_inner')

    totalNum = album.length;

    prev_button.addEventListener('click', ()=> {
        if(pageNum > 0) {
            pageNum --;
        } else {
            pageNum = 0
        }
        pageChangeFunc();

    });

    next_button.addEventListener('click',()=>{
        if(pageNum < totalNum-1){
            pageNum ++;
        }else{
            pageNum = totalNum-1;
        }
        pageChangeFunc();

    });

    for(let i = 0 ; i < point.length ; i++){
        (function (idx){
            point[idx].onclick = () => {
                pageNum = idx;
                pageChangeFunc();
            }
        })(i);
    }


    pageChangeFunc();
};


function pageChangeFunc() {
    contentWrap.style.background = `linear-gradient(120deg , ${bgArray[pageNum][0]} , ${bgArray[pageNum][1]})` ;

    for(let i = 0; i < totalNum; i++){
        if(pageNum == i ){
            album[i].classList.add('active')
            point[i].classList.add('active')
        } else {
            album[i].classList.remove('active')
            point[i].classList.remove('active')
        }
    }
    disk_inner[pageNum].style.background = `${bgArray[pageNum][0]}`
}