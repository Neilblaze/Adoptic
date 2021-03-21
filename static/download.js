$("a#programatically").click(function(){
    var now = new Date().toString();
    this.href = "data:text/plain;charset=UTF-8,"  + encodeURIComponent(now);
});