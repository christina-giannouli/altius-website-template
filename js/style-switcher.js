
// if($.cookie("css")) {
// 	$("link").attr("href",$.cookie("css"));
// }

$(document).on('ready', function() {
    $(".versions a").click(function() {
        $("#default").attr("href",$(this).attr('rel'));
        $.cookie("css",$(this).attr('rel'), {expires: 365, path: '/'});
        return false;
    });
});
