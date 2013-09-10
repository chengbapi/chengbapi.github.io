// get user's city
(function(window) {

    var script = document.createElement('script');

    script.src = "http://tianqi.2345.com/t/detect2009v2.php";

    document.getElementsByTagName('head')[0].appendChild(script);

    window.weaAlertCallBack = function(res) {
        var tem1, tem2,
            weaInfo = wea_.day1,
            tem = weaInfo[0],
            weather = weaInfo[2],
            weatherEnum = {
                晴: "sun",
                阴: "cloud",
                多云: "cloud",
                小雨: "s-rain",
                中雨: "m-rain",
                大雨: "h-rain",
                暴雨: "h-rain",
                雪: "snow",
                雷: "bolt"
            },
            weatherRegExp = /(晴|雪|雷|暴雨|大雨|中雨|小雨|多云|阴)/;

        tem = /(-?\d+)～(-?\d+)/.exec(tem);
        tem1 = tem[1], tem2 = tem[2];

        window.temperature = tem1 / 2 + tem2 / 2;

        window.weather = weatherEnum[weatherRegExp.exec(weather)[1]];

        console.log(window.temperature);
        console.log(window.weather);

    }

    window.clickCount = function(){}
})(window);




