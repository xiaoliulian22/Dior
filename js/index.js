// 导航sswwsssss
let listone = document.getElementsByClassName("a11");
let test = document.getElementsByClassName("test");

for (let i = 0; i < listone.length; i++) {
    (function (i) {
        listone[i].onmouseover = function () {
            for (var j = 0; j < test.length; j++) {
                test[j].style.display = "none";
            }
            test[i].style.display = "block";
        }
    }(i))
    listone[i].onmouseout = function () {
        test[i].style.display = "none";
    }
    test[i].onmouseover = function () {
        test[i].style.display = "block";
    }

    test[i].onmouseout = function () {
        test[i].style.display = "none";
    }
}

//轮播图
var swiper = new Swiper('.swiper-containera', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper = new Swiper('.lutb', {
    slidesPerView: 3,
    marginLeft:15,
    marginRight:15,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el:'.dian',
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});