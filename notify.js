/*
 *  Author: Munawar Hussain
 * */
function notify()
{
    $("html").append(
        '<style>' +
        '.notify{' +
        'border-left: solid 5px lightskyblue;' +
        'background-color: lightblue;' +
        'color: white;' +
        'min-width: 300px;' +
        'position: fixed;' +
        'top: 40px;' +
        'right: 0;' +
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
        '}' +
        '</style>'
    );
    $("html").append(
        '<div class="notify">'
        +'<h5 class="title">Title</h5>'
        +'<p class="message"></p>'
        +'</div>'
    );


    this.success = function (message,title,delay = 5000){
        $(".notify").removeClass("success error warn");
        $(".notify").addClass("success");
        $(".notify").find(".title").text(title);
        $(".notify").find(".message").text(message);
        $(".notify").fadeIn();
        setTimeout(function () {
            $(".notify").fadeOut();
        },delay);
    }

    this.error = function (message,title,delay = 5000){
        $(".notify").removeClass("success error warn");
        $(".notify").addClass("error");
        $(".notify").find(".title").text(title);
        $(".notify").find(".message").text(message);
        $(".notify").fadeIn();
        setTimeout(function () {
            $(".notify").fadeOut();
        },delay);
    }

    this.warn = function (message,title,delay = 5000){
        $(".notify").removeClass("success error warn");
        $(".notify").addClass(" warn");
        $(".notify").find(".title").text(title);
        $(".notify").find(".message").text(message);
        $(".notify").fadeIn();
        setTimeout(function () {
            $(".notify").fadeOut();
        },delay);
    }
}

var alert = new notify();