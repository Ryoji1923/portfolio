jQuery(function() {
    var link_style = $('<link>').attr({
      'rel': 'stylesheet',
      'href': 'style.css'
    });
    $('body').append(link_style);
});
  
// navの固定
$(function() {
    $(window).scroll(function (){
        $('.nav').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            if (scroll > position){
              $('.nav').addClass('nav-js');
              $('.top-text').addClass('top-text-js');
              $('.top').addClass('top-js');
            }
        });
    });
});
$(function() {
    $(window).scroll(function (){
        $('.nav').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            if (position < 56){
                $('.nav').removeClass('nav-js'),
              $('.top-text').removeClass('top-text-js');
              $('.top').removeClass('top-js');
            }
        });
    });
});
// クリックしたとき、指定した位置まで移動
//はじめに/体験
$(function(){
	const hash = location.hash;

	if(hash){
		$("html, body").stop().scrollTop(0);
		setTimeout(function(){
			const target = $(hash),
			position = target.offset().top;
			$("html, body").animate({scrollTop:position}, 500, "swing");
		});
	}
});

//jump-top
//クリックしたらトップ
$(function() {
    var position = $('header').offset().top;
    $('.jump-top').click(function(){
        $("html, body").animate({
            scrollTop : position
        }, {
            queue : false
        });
    });
})
//フェードイン・フェードアウト
$(function() {
    $(window).scroll(function (){
        $('.jump-top').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > 400) {
              $(this).addClass('jump-top-js');
            };
            if (scroll < 400) {
                $(this).removeClass('jump-top-js');
            }
        });
    });
})
// サインインをクリックしたら画面全体が少し暗くなる・ログイン画面が出る
$(function() {
    $('.signin').click(function() {
        $('.login-bg').css('display', 'block');
        $('.login').addClass('login-js');
    });
});
//暗い部分をクリックするとログイン画面が元に戻る
$(function() {
    $('.login-bg').click(function() {
        $('.login-bg').css('display', 'none');
        $('.login').removeClass('login-js');
    });
});
//hamburgerをクリックするとhamburgerメニューが出る
$(function() {
    $('.nav-hamburger').click(function() {
        $('.hamburger-group').css('opacity', '1.0');
    });
});

// hamburgerメニューが戻る
$(function() {
    $(document).click(function(event) {
        if(!$(event.target).closest('.nav-hamburger, .hamburger-group').length) {
            $('.hamburger-group').css('opacity', '0.0');
        }
    });
});


//共通化
$(function(){
    // ヘッダーを読み込んで挿入する
    $("#header").load("header.html");
    
    // フッターを読み込んで挿入する
    $("#footer").load("footer.html");
});