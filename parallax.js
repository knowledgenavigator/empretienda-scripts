//<![CDATA[

$(function() {
// sticky polyfill
var stickyTarget = document.querySelectorAll('.fn-sticky');
Stickyfill.add(stickyTarget);

$('.header, .header-logo').addClass('is-active');
$('div.header.uk-container').addClass('is-loaded');


// ParallaxJs
$('.header-logo__image').parallax();


//アニメーション
function InView(el,endpoint) {
    this.el = el;
    this.clientHeight = document.documentElement.clientHeight;
    this.observer;
    this.endpoint = endpoint;
    this._observe();
    this._init();
}

InView.prototype._observe = function() {
    var self = this;
    var options = {
        threshold: this.endpoint
    };
    this.observer = new IntersectionObserver(function(changes) {
        Object.keys(changes).forEach(function(key){
            var rect = changes[key].target.getBoundingClientRect();
            var h = (0 < rect.top && rect.top < self.clientHeight)       // 対象の上端は表示領域に入っている
            || (0 < rect.bottom && rect.bottom < self.clientHeight)  // 対象の下端は表示領域に入っている
            || (0 > rect.top && rect.bottom > self.clientHeight);    // 上端下端も表示されてないがその間が表示されている
            if($('div.header.uk-container').hasClass('is-loaded')) {
                if(h) {
                    $(self.el).addClass('is-active');
                }
            }
        })
    }, options);
}
InView.prototype._init = function() {
    this.observer.observe(this.el);
}

$('.fn-in').each(function(){
    var endpoint = $(this).data('endpoint');
    if(!endpoint){
        endpoint = 0.2;
    }
    new InView(this,endpoint);
});



//背景固定
var flug = true;
$(window).scroll(function () {
    if (flug) {
        if ($(window).scrollTop() > $('.fn-scrollLine').offset().top) {
            $('.fn-scroll').removeClass('is-fixed');
            return flug = false;
        }
        return flug;
    }
    if ($(window).scrollTop() < $('.fn-scrollLine').offset().top + $('.fn-scrollLine').height()) {
        $('.fn-scroll').addClass('is-fixed');
        return flug = true;
    }
});

});

//]]>
