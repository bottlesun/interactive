/*


//https://www.youtube.com/watch?v=lyf7UkkcI1I
//[스타벅스 현대카드] 별이 쏟아지는, 스타벅스 현대카드]

window.onload = function(){

    let starBg = document.querySelector(".starBg");
    let title = document.querySelector(".title");

    //스크롤 이벤트
    window.addEventListener("scroll", function(event){
        // scrollTop = document.documentElement.scrollTop;
        let scroll = this.scrollY;
        // console.log(scroll/5)
        starBg.style.transform = "translateY("+ -scroll/5 +"px)";
        title.style.transform = "translateY("+ scroll/1.7 +"px)";
    });

    //스크롤 이동
    setTimeout(function(){

        window.scrollTo({
            top: document.querySelector('.bottom').offsetTop
            ,behavior: 'smooth'
        });
        // document.querySelector('.bottom').scrollIntoView({ behavior: 'smooth' });

    }, 2000)
}


*/

window.onload = () => {
    let starBg = document.getElementsByClassName('starBg')[0];
    let title = document.querySelector('.title');

    window.addEventListener('scroll',()=>{
        let scroll = this.scrollY;

        starBg.style.transform = `translateY(${-scroll/5}px)`;
        title.style.transform = `translateY(${scroll/1.7}px)`;
    });

    setTimeout(()=>{
        window.scrollTo({
            top: document.querySelector('.bottom').offsetTop
            ,behavior: 'smooth'
        });
    },2000)
}

