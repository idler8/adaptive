(function(window){
    var doc = window.document;
    var script = doc.currentScript || (function() {
        var scripts = doc.getElementsByTagName('script');
        return scripts[scripts.length - 1];
    })();
    var design = script.getAttribute('design') * 1 || 750
    var scale = script.getAttribute('scale') * 1 || 100
    var vw = design / scale;
    var html = doc.documentElement;
    var resize = function () {
        var width = Math.min(html.clientWidth || 375, 750)
        html.style.fontSize = width / vw + 'px'
    }
    window.addEventListener("orientationchange" in window ? "orientationchange" : "resize", resize, false)
    doc.addEventListener("DOMContentLoaded", resize, false)
})(window)