//关闭jd_event

(function(){
	var $ch = $('.Jd_container #chahao');
	var $J_event = $('.J_event');
	$ch.on('click',function(){
		$J_event.fadeOut('400', function() {
			
		});
	})

	//轮播特效
	var $slider = $('#slider');
	var $tabBtns = $('#slider .slider_tabs_item');
	var $btn = $('#slider .btn');
	var $pic = $('#slider .slider_item');
	var timer = null;
	var nowTime = 0;
	var index = 0;
	var length = $pic.length; 

	$pic.eq(0).show();
	$tabBtns.eq(0).addClass('active');

	$tabBtns.hover(function(){

		// if( new Date() - nowTime > 800 && index != $(this).index() ){
			// nowTime = new Date();
			animate(function(){
				index = $(this).index();
			}.bind(this));
		// }
	})

	$btn.click(function(){

		if( new Date() - nowTime > 800 ){
			nowTime = new Date();
			var i = $(this).index();

			animate(function(){
				if(i){
					index++;
					index%=length;
				}else{
					index--;
					if(index<0)index=length-1;
				}
			})
		}
	})

	$slider.hover(function(){
		clearTimeout(timer);
	},auto);

	auto();
	function auto(){
		timer=setInterval(function(){
			animate(function(){
				index++;
				index%=length;
			});
		},3000);
	}
	function animate(fn){
		$pic.eq(index).stop().fadeOut(300);
		$tabBtns.eq(index).removeClass('active');
		fn();
		$pic.eq(index).stop().fadeIn(300);
		$tabBtns.eq(index).addClass('active');
	}
})();

//mod_tab_active
var newsItem = $('.home .home_col4 .mod_tab_head_item');
var newsActive = $('.home .home_col4 .news_tab_active');
var newsContent = $('.home .home_col4 .J_tab_content_item');
newsItem.hover(function(){
	if($(this).index()==0){
		newsActive.css({
			transform:"translateX(0px)"
		})
		newsContent.eq(0).css({
			display:"block"
		})
		newsContent.eq(1).css({
			display:"none"
		})
	}else{
		newsActive.css({
			transform:"translateX(54px)"
		})
		newsContent.eq(1).css({
			display:"block"
		})
		newsContent.eq(0).css({
			display:"none"
		})
	}
});
//点击清除input里面的默认内容
$('.clear_content').focus(function(){
	$(this).content = $(this).val();
	$(this).val("");
})
$('.clear_content').blur(function(){
	$(this).val("请输入手机号码");
})

//sk_cd_time

$(document).ready(function(){
	var leftTime = 24*60*60;
	var lefthour;
	var leftmin;
	var leftsec;
	var timer = setInterval(function() {
		leftTime -= 1;
		lefthour = parseInt(leftTime/(60*60)) ;
		leftmin = parseInt((leftTime-lefthour*3600)/60);
		leftsec = parseInt(leftTime%60);
		
		$('.main .cd_hour span').html(lefthour);
		$('.main .cd_minute span').html(leftmin);
		$('.main .cd_second span').html(leftsec);
	}, 1000);
});

//sk_time
(function(){
	var index = 0;
	var slider_list = $('#slider_list');
	var last4_slider_items = $('#slider_list .slider_items').slice(-4).clone(true);
	var slider_btn = $('.sk_slider button');
	var nowTime = 0;
	slider_list.css({
		left: "-800px"
	})
	
	slider_list.prepend(last4_slider_items);
	slider_btn.click(function(){
		if(new Date() - nowTime > 600){
			nowTime = new Date();
			if($(this).index()==0){
				index--;
				if(index < 0){
					
					slider_list.animate({
						left: "0px"
						
					},600,'swing');	
					index = 2;
					slider_list.animate({
						left: "-2400px"
					},0)
				}else{
					slider_list.animate({
						left: "-"+(index+1)*800+"px"
						
					},600,'swing');
				}
				
			}else{
				index ++;
				if(index == 3){
					index %= 3;
					slider_list.css({
						left: "0px"
						
					},0);
					
				}else{
					index %= 3;
					
				}
				slider_list.animate({
					left: "-"+(index+1)*800+"px"
					
				},600,'swing');				
			}
		}	
	})
})();
//sk_chn
(function(){
	var chn_list = $('.sk_chn .sk_chn_list');
	var sk_chn_indicator = $('#sk_chn_indicator .slider_indicator_btn');
	var index = 0;
	var timer = setInterval(anim,3000);

	sk_chn_indicator.eq(index).addClass('active');
	function anim(){
		
		index ++;
		chn_list.css({
			'transform':"translateX(-"+200*index+"px)",
			"transition": "transform .5s ease"
		});

		if(index == 2){	
			setTimeout(function(){
				chn_list.css({
					"transition": "transform 0s ease",
					'transform':"translateX(0px)"
					
				});
			},500)
			
			index %= 2;
		}
		sk_chn_indicator.eq(index).addClass('active').siblings().removeClass('active');
	}

	sk_chn_indicator.hover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		clearInterval(timer);
		if($(this).index() == 0){        //鼠标移入第一个按钮的时候
			if(index == 0){
				chn_list.css({
					"transition": "transform 0s ease",
					'transform':"translateX(0px)"
				});
				timer = setInterval(anim,3000);
			}else{
				chn_list.css({
					"transition": "transform 0s ease",
					'transform':"translateX(-200px)"
				});
				chn_list.css({
					"transition": "transform .5s ease",
					'transform':"translateX(0px)"
				});
				timer = setInterval(anim,3000);
				index = 0;
			}
			index = 0;
		}else{              //鼠标移入第二个按钮的时候
			if(index == 1){
				chn_list.css({
					"transition": "transform 0s ease",
					'transform':"translateX(-200px)"
				});
				timer = setInterval(anim,3000);
			}else{
				chn_list.css({
					"transition": "transform 0s ease",
					'transform':"translateX(0px)"
				});
				chn_list.css({
					"transition": "transform .5s ease",
					'transform':"translateX(-200px)"
				});
				timer = setInterval(anim,3000);
				index = 1;
			}	
		}
	},function(){
		
		
	})

})();
//enjoy_fix
(function(){
	var enjoy_inner = $('.main .enjoy_main_inner');
	var enjoy_fix = $('.main .enjoy_fix');
	var enjoy_fix_close_btn = $('.main .enjoy_fix .enjoy_fix_close_btn');
	var trigger = true;
	
	$(window).scroll(function(){
		if(trigger){
			$(window).scrollTop()>enjoy_inner.offset().top-300?enjoy_fix.addClass('enjoy_fix_active'):enjoy_fix.removeClass('enjoy_fix_active');
		}		
	})
	enjoy_fix_close_btn.click(function(){
		enjoy_fix.removeClass('enjoy_fix_active');
		trigger = false;			
	})
	


})();

//good1s top
(function(){
	var tab_head_item = $('#goods1 .tab_head_item');//5个选项卡头
	var tab_item = $('#goods1 .tab_body .tab_item');//5个选项卡body
	var item_index = 0;	
	var main_indicators_btn = $('#J_top .main_indicators_btn');//找到轮播按钮实例
	var main_indicators_btn_prev = $('#J_top .main_indicators_btn:even');
	var slider_list = $('#goods1 #J_top .slider_list');

	main_indicators_btn_prev.addClass('main_indicators_btn_active');
	tab_head_item.eq(0).addClass('active');
	tab_item.eq(0).css('display','block');
	tab_head_item.hover(function(){
		item_index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		tab_item.eq(item_index).css('display','block').siblings().css('display','none');
		tab_item.eq(item_index).btn = tab_item.eq(item_index).find('.main_indicators_btn');
	});
	main_indicators_btn.hover(function(){
		$(this).addClass('main_indicators_btn_active').siblings().removeClass('main_indicators_btn_active');
		if($(this).index()%2 == 0){
			slider_list.eq(item_index).stop().animate({
				left: "0px"
			},500,'swing');
		}else{
			slider_list.eq(item_index).stop().animate({
				left: "-350px"
			},500,'swing');	
		}	
	})
})();

//J_daily
(function(){
	var slider_btn = $('#J_daily .main_indicators_btn');
	var slider_control = $('#J_daily .slider_control');
	var slider_wraper = $('#J_daily .slider_wrapper');
	var index = 0;
	var timer = null;
	var nowTime = 0;
	slider_btn.eq(0).addClass('main_indicators_btn_active');
	
	
	slider_btn.hover(function(){
		clearTimeout(timer);
		index = $(this).index();
		move();
	},function(){
		// animate();
	})
	slider_control.click(function(){
		if(new Date - nowTime >= 500){
			nowTime = new Date();
			if($(this).index() == 0){
				index--;
			}else{
				index++;
			}
			move();
		}
		
	});
	function move(){
		
		if(0 <= index || index<3){
			slider_wraper.stop().animate({
				left:"-"+350*index+"px"
			},300,'swing');
			slider_btn.eq(index).addClass('main_indicators_btn_active').siblings().removeClass('main_indicators_btn_active');
		} 
		if(index == 3){
			slider_wraper.stop().animate({
				left:"-"+350*index+"px"
			},300,'swing');
			slider_btn.eq(0).addClass('main_indicators_btn_active').siblings().removeClass('main_indicators_btn_active');
			slider_wraper.animate({
				left:"0px"
			},0,'swing');
			index = 0;
			console.log("kk");
		}
		if(index < 0){
			slider_wraper.stop().animate({
				left:"-1050px"
			},0,'swing');

			slider_wraper.animate({
				left:"-700px"
			},300,'swing');
			index = 2;
		}
	}
	
})();