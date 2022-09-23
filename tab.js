
for (let i = 0; i < 3; i++){    // 반복문 안에서 let 사용
    $('.tab-button').eq(i).on('click', function(){
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(i).addClass('orange');
        $('.tab-button').removeClass('show');
        $('.tab-button').eq(i).addClass('show');
    });
}

// 버튼0 누르면
// - 모든 버튼에 붙은 orange 클래스명 제거
// - 버튼0에 orange 클래스명 추가
// - 모든div에 붙은 show 클래스명 제거
// - div에 show 클래스명 추가
/*
var btn0 = $('.tab-button');

btn0.eq(0).on('click', function(){
    btn0.removeClass('orange');
    btn0.eq(0).addClass('orange');
    btn0.removeClass('show');
    btn0.eq(0).addClass('show');
});
*/