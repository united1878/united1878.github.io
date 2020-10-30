/* 헤더 */

// 콜백함수. 문서가 준비 되면 - 함수 실행 (창 틀자마자 실행됨)
$(document).ready(function () {
  // alert('콜백함수');
  $(".openMOgnb").click(function () {
    $("header").addClass("on");
    // $(".header_cont").css("display","block"); /* css display 속성을 block 으로... */
    $(".header_cont").slideDown("slow");
  });
  $(".closePop").click(function () {
    $("header").removeClass("on");
    $(".header_cont").slideUp("fast");
  });
  //header 아이디 영역 백그라운드 추가

  // 상단으로 바로가기 to top
  $(".s_point").smoothScroll();
});
