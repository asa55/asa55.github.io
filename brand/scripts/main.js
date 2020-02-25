var image = document.getElementById("splash");
new simpleParallax(image, {
                   scale: 0.8,
                   delay: .3,
                   transition: 'cubic-bezier(0,0,0,.1)'
                });
function showEmail() {
    document.getElementById('emailbutton').innerHTML = "alexander.s.augenstein@gmail.com";
}
function showComingSoon() {
    document.getElementById('ideafactorybutton').innerHTML = "Coming Soon";
}