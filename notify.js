/*
 *  Author: Munawar Hussain
 * */
function notify()
{
    var position = "right";
    var successColor;
    var errorColor;
    var warnColor;
    var font = "Arial, Helvetica, sans-serif";

    $("html").append(
        '<style>' +
        '.notify-area{'+
        'position: fixed;'+
        'top: 40px;'+
        'z-index: 9;'+
         position+': 0;'+
        '}'+
        '.notify{' +
        'margin-top:5px;' +
        'border-left: solid 5px lightskyblue;' +
        'background-color: lightblue;' +
        'color: white;' +
        'width: 325px;' +
        'position: relative;' +
        'z-index: 10;' +
        'padding-left: 10px;' +
        'display: none;' +
        '}' +
        '.success{' +
        'border-left: solid 5px #96b86b!important;' +
        'background-color: #549404!important;' +
        '}' +

        '.error{' +
        'border-left: solid 5px #b45e54!important;' +
        'background-color: #a91605!important;' +
        '}' +
        '.warn{' +
        'border-left: solid 5px #f9c86e!important;' +
        'background-color: #ffa500!important;' +
        '}' +

        '.notify h1,h2,h3,h4,h5,h6{' +
        'color: white;' +
        'margin:0;' +
        'padding:10px 0;' +
        'font-family: '+font+';' +
        '}' +

        '.notify p{' +
        'margin:0;' +
        'padding-bottom:12px;' +
        'font-family: '+font+';' +
        '}' +
        '</style>'
    );
    $("html").append(
        '<div class="notify-area"></div>'
    );


    this.success = function (message,title,delay = 5000){
        notify_box(message,title,delay,"success");
    }

    this.error = function (message,title,delay = 5000){
        notify_box(message,title,delay,"error");
    }

    this.warn = function (message,title,delay = 5000){
        notify_box(message,title,delay,"warn");
    }

    function notify_box(message,title,delay,type) {

        var notify = $('<div class="notify">'
            +'<h3 class="title"></h3>'
            +'<p class="message"></p>'
            +'</div>');
        var obj = $("html").find(".notify-area").append(notify);

        if(type=="success")
        {
            $(notify).removeClass("success error warn");
            $(notify).addClass("success");
        }
        else if(type=="error")
        {
            $(notify).removeClass("success error warn");
            $(notify).addClass("error");
        }
        else if(type=="warn")
        {
            $(notify).removeClass("success error warn");
            $(notify).addClass(" warn");
        }

        $(notify).find(".title").text(title);
        $(notify).find(".message").text(message);
        $(notify).fadeIn();
        setTimeout(function () {
            $(notify).fadeOut(function () {
                $(notify).remove();
            });
        },delay);
    }
}

var alert = new notify();