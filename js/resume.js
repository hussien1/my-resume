var x = window.matchMedia("(max-width: 768px)"),
    brand = document.querySelector(".navbar-brand"),
    image = brand.innerHTML,
    heit = document.querySelector("nav").style.height

function myFunction(x) {
    if (x.matches) {
        brand.innerHTML = "Clarence Taylor";
        document.querySelector("section").style.paddingTop = heit + "px"
    } else {
        brand.innerHTML = image
    }
}
myFunction(x)
x.addListener(myFunction);

$("a").click(function() {
    var aHref = $(this).attr("href");
    var d = $(aHref).offset().top;
    $("body ,html").animate({ scrollTop: d }, 2000)
})
$('.navbar-collapse a').click(function(e) {
    $('.navbar-collapse').collapse('toggle');
});