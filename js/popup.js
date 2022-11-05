$(function() {
    $(".btn-main").click(function() {
        $(".popup").removeClass("popup-passive");
        $(".popup").toggleClass("popup-active");
    })
});
$(function() {
    $(".btn-galery").click(function() {
        $(".popup").removeClass("popup-passive");
        $(".popup").toggleClass("popup-active");
    })
});
$(function() {
    $(".close").click(function() {
        $(".popup").removeClass("popup-active");
        $(".popup").toggleClass("popup-passive");
    })
});
$(function() {
    $(".btn-popup").click(function() {
        $(".popup").removeClass("popup-active");
        $(".popup").toggleClass("popup-passive");
    })
});
$(function() {
    $(".btn-service-self").click(function() {
        $(".popup").removeClass("popup-passive");
        $(".popup").addClass("popup-active");
    })
});