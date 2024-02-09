$(function () {
    $('#yes').click(function (event) {
        modal('嘿嘿嘿！我就知道泽乐妹妹一定会愿意的。(^_^)',A1);
        // typeWrite();



    });
    $('#no').click(function (event) {
        modal('明人不说暗话！', A);
    });
});

function A1(){
    modal('小手一牵 陪着你今年、明年和年年！',A2);
}

function A2(){
    modal('今后的新年你陪我 以后的新年我陪你 怎么样？？？',A3);
}
function A3(){
    drawHeiheihei();
    modal('就是这么无赖 嘿嘿嘿', function () {

        $('.page_one').addClass('hide');
        $('.page_two').removeClass('hide');
        fireworks();
    });
}

function A() {
    modal('我喜欢你！', B);
}

function B() {
    modal('我就知道你在等我这一句话', C);
}

function C() {
    drawHaobuhaoma();
    modal('请泽乐妹妹不要拒绝我嘛好不好', D);
}

function D() {
    modal('想拒绝我，不存在的!!!', E);
}

function E() {
    modal('这辈子都不可能再离开我了，嘿嘿嘿', F);
}

function F() {
    modal('泽乐妹妹，跟我走吧', G);
}

function G() {
    modal('我不仅会做饭', H);
}

function H() {
    modal('我还会洗衣服', AA);
}

function AA() {
    modal('而且的而且，我还会欺负你，嘿嘿嘿', I);
}

function I() {
    modal('爱你呀亲爱的。么么哒！', J)
}

function BB() {
    modal('', J)
}

function J() {
    modal('愿我的小可爱在新的一年里 每天都开开心心快快乐乐的呀！！！\n 新年快乐！！！', function () {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">' +
        '<div class="mask"></div>' +
        '<div class="modal">' +
        '<p>' + content + '</p>' +
        '<button type="button" id="confirm" class="confirm">确定</button>' +
        '</div>' +
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function () {
        $('.container').remove();
        callback();
    });
}

function drawHeiheihei() {
    var moon = document.getElementById("heiheihei");
    var centerX = canvas.width/2-50,
        centerY = 250,
        width = 100;
    if (moon.complete) {
        ctx.drawImage(moon, centerX, centerY, width, width)
    } else {
        moon.onload = function() {
            ctx.drawImage(moon, centerX, centerY, width, width)
        }
    }
    var index = 0;
}

function drawHaobuhaoma() {
    var moon = document.getElementById("haobuhaoma");
    var centerX = canvas.width/2-50,
        centerY = 250,
        width = 100;
    if (moon.complete) {
        ctx.drawImage(moon, centerX, centerY, width, width)
    } else {
        moon.onload = function() {
            ctx.drawImage(moon, centerX, centerY, width, width)
        }
    }
    var index = 0;
}