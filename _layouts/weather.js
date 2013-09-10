// get user's city
(function(window) {
    var res,
        req = new XMLHttpRequest();

    req.open("GET", "http://ipinfo.io");

    req.onreadystatechange = function() {
        if (req.readyState === 4 && req.status === 200) {
            res = req.responseText;
            console.log(res.city);
        }
    }

    req.send(null);


})(window);




