document.addEventListener('DOMContentLoaded',function(){
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const dotsNav = document.querySelector('.carousel-nav');
    const dots = Array.from(dotsNav.children);

    const slideWidth = slides[0].getBoundingClientRect().width;

    //排列幻灯片
    slides.forEach((slide,index) => {
        slide.style.left = slideWidth*index + 'px';
    });

    let currentSlide = 0;
    let autoplayTimer;

    function moveToSlide(track,currentIndex,targetIndex){
        track.style.transform = `translateX(-${slideWidth*targetIndex}px)`;
        currentSlide = targetIndex;
        updateDots();
    }

    function updateDots(){
        dots.forEach((dot,index) => {
            dot.classList.toggle('active',index === currentSlide);
        });
    }

    function startAutoplay(){
        autoplayTimer = setInterval(() => {
            const nextIndex = (currentSlide + 1) % slides.length;
            moveToSlide(track,currentSlide,nextIndex);
        },5000);
    }

    function resetAutoplay(){
        clearInterval(autoplayTimer);
        startAutoplay();
    }

    //点击切换
    nextButton.addEventListener('click',()=>{
        const nextIndex = (currentSlide + 1) % slides.length;
        moveToSlide(track,currentSlide,nextIndex);
        resetAutoplay();
    });

    prevButton.addEventListener('click',()=>{
        const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        moveToSlide(track,currentSlide,prevIndex);
        resetAutoplay();
    });

    //点击导航点
    dotsNav.addEventListener('click',e=>{
        const targetDot = e.target.closest('button');
        if(!targetDot)return;

        const targetIndex = dots.findIndex(dot => dot===targetDot);
        moveToSlide(track,currentSlide,targetIndex);
        resetAutoplay();
    });

    //Auto Play
    startAutoplay();
});

window.onload = function(){
    const userName = localStorage.getItem("userName");
    const password = localStorage.getItem("password");

    if(!userName || userName.trim() === ""
        || !password || password.trim() === ""
    ){
        console.log("No user is logged in.")
        return false;
    }

    document.getElementById("login").innerHTML = "HI,"+userName+"!";
    document.getElementById("login").onclick = logout;
}

function logout(){
    localStorage.removeItem("userName");
    localStorage.removeItem("password");
    location.reload();
}