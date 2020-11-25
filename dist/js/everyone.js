"use strict";

var mySwiper = new Swiper('.banner4', {
  direction: 'horizontal',
  // 水平切换选项
  loop: true,
  // 循环模式选项
  // 如果需要分页器
  // pagination: {
  //   el: '.swiper-pagination',
  // },
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // 如果需要滚动条
  scrollbar: {
    el: '.swiper-scrollbar'
  },
  //自动播放开关
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false
  },
  slidesPerView: 3
}); //如果你在swiper初始化后才决定使用clickable，可以这样设置

mySwiper.params.pagination.clickable = true; //此外还需要重新初始化pagination

mySwiper.pagination.destroy();
mySwiper.pagination.init();
mySwiper.pagination.bullets.eq(0).addClass('swiper-pagination-bullet-active');