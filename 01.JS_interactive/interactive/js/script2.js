

let scrollTop = 0;
let imageAll;
let totalNum = 0;

window.onload = function() {
    progressBar = document.getElementsByClassName("progressBar")[0];
    imageAll = document.querySelectorAll(".parallax_image");
    // alert(imageAll.length)
    totalNum = imageAll.length;

     window.addEventListener('resize', stageResize, false);
    window.addEventListener('scroll', scrollFunc);

     stageResize();
}

function scrollFunc(e) {
    scrollTop = this.scrollY;

     let per = Math.ceil(scrollTop / (_documentHum - _windowHNum) * 100);
     progressBar.style.width = per + "%";

    for(let i=0; i< totalNum ; i++){
        // 원근감을 주는 속성 (값이 적을 수록 더 가까워진다.) - perspective  가까워지거나 멀어지게 한다 - translateZ
        imageAll[i].style.transform = "perspective(400px) translateZ("+ scrollTop/(5*(totalNum-i)) +"px)";
        // imageAll[i].style.transform = "perspective(400px) translateZ("+ scrollTop/5 +"px)";
        console.log(scrollTop , scrollTop / (5*(totalNum-i)) );
    }

}

function stageResize() {
    _documentHum = document.body.offsetHeight;
    _windowHNum = window.outerHeight;
}

