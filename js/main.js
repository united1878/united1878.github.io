//pc용 메뉴보이기 / 숨기기 함수 선언
var isOver1 = false; //플래그(깃발) 변수
var isOver2 = false;
function goHide1() {
  if (!isOver1 && !isOver2) {
    //자바스크립트는 뒤에서부터 앞으로 해석한다
    $(".gnb_depth2_1").stop().fadeOut("fast");
    //스탑 하기 전에 먼저 fade out. fadeIn(출연), fadeOut(서서히사라짐)
  }
}

//두번째 서브메뉴
var isOver11 = false;
var isOver22 = false;
function goHide2() {
  if (!isOver11 && !isOver22) {
    $(".gnb_depth2_2").stop().fadeOut("fast");
  }
}
//세번째 서브메뉴
var isOver111 = false;
var isOver222 = false;
function goHide3() {
  if (!isOver111 && !isOver222) {
    $(".gnb_depth2_3").stop().fadeOut("fast");
  }
}

//네번째 서브메뉴
var isOver1111 = false;
var isOver2222 = false;
function goHide4() {
  if (!isOver1111 && !isOver2222) {
    $(".gnb_depth2_4").stop().fadeOut("fast");
  }
}

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

  //pc용 메뉴 롤오버(마우스) 호출부분(아래)

  //1대메뉴1-gnb_depth2_1 첫번째 서브메뉴 마우스 오버액션
  $(".openAll1").mouseover(function () {
    if (parseInt($("header").css("width")) > 1055) {
      //pc형에서 작동하도록 확인
      $(".gnb_depth2_1").fadeIn("fast");
    }
    isOver1 = true;
  });

  //2대메뉴1-gnb_depth2_1 첫번째 서브메뉴 마우스 포커스
  $(".openAll1").focus(function () {
    if (parseInt($("header").css("width")) > 1055) {
      $(".gnb_depth2_1".fadeIn("fast"));
    }
    isOver1 = true;
  });

  //3대메뉴1-gnb_depth2_1 첫번째 서브메뉴 마우스 아웃액션
  $(".openAll1").mouseout(function () {
    isOver1 = false;
    setTimeout("goHide1()", 200); //0.2 후에 goHide1()을 실행한다.
  });

  //4첫번째 서브메뉴 마우스 오버했을때 액션
  $(".gnb_depth2_1").mouseover(function () {
    isOver2 = true; //fadeOut 작동을 하지 않겠다는 명시적인 변수 값.
  });
  //5첫번째 서브메뉴 선택액션 focus <==> blur(선택 안했을때)
  $(".gnb_depth2_1").focus(function () {
    isOver2 = true;
  });
  //6첫번째 서브메뉴 마우스 아웃액션
  $(".gnb_depth2_1").mouseout(function () {
    isOver2 = false;
    setTimeout("goHide1()", 200);
  });
  //7첫번째 서브메뉴 선택을 벗어낫을 때 엑션
  $(".gnb_depth2_1").blur(function () {
    isOver2 = false;
    setTimeout("goHide1()", 200);
  });
  //8첫번째 서브메뉴에서 마지막 li태그를 벗어났을 때 액션
  $(".gnb_depth2_1 li:last-child a").blur(function () {
    isOver1 = false;
    setTimeout("goHide1()", 200);
  });
});
