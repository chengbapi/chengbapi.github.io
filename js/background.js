;(function(window) {
    if (Modernizr.canvas) {
        var backgroundImage;

        backgroundImage = new Image();
        backgroundImage.src = '/images/background.jpg';
        backgroundImage.addEventListener('load', renderBackground, false);

        function renderBackground() {
            var ctx,
                width,
                height,
                backgroundImage,
                backgroundCanvas;

            backgroundImage = this;
            width = backgroundImage.width;
            height = backgroundImage.height;

            backgroundCanvas = document.createElement('canvas');
            backgroundCanvas.id = 'background-canvas';
            backgroundCanvas.width = width;
            backgroundCanvas.height = height;
            document.body.insertBefore(backgroundCanvas, document.body.firstElementChild);
            ctx = backgroundCanvas.getContext('2d');

            ctx.drawImage(backgroundImage, 0, 0);
            blur(backgroundCanvas);
        }

        function blur(canvas) {
            var x, y, i,
                point,
                ctx,
                imageData,
                data;
            ctx = canvas.getContext('2d');
            imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            data = imageData.data;

            console.time('a');

            for (y = 0; y + 1 < canvas.height; y += 2) {
                for (x = 0; x + 1 < canvas.width; x += 2) {
                    for (i = 0; i < 3; i++) {
                        data[(y * canvas.width + x) * 4 + i] =
                        data[(y * canvas.width + x + 1) * 4 + i] =
                        data[((y + 1) * canvas.width + x) * 4 + i] =
                        data[((y + 1) * canvas.width + x + 1) * 4 + i] =
                        averageColor(
                            data[(y * canvas.width + x) * 4 + i],
                            data[(y * canvas.width + x + 1) * 4 + i],
                            data[((y + 1) * canvas.width + x) * 4 + i],
                            data[((y + 1) * canvas.width + x + 1) * 4 + i]
                        );
                    }
                }
            }
            console.timeEnd('a');

            ctx.putImageData(imageData, 0, 0);
        }

        function averageColor() {
            var i,
                len,
                sum;
            for (i = 0, sum = 0, len = arguments.length; i < len; i++) {
                sum += arguments[i];
            }
            return sum / arguments.length;
        }





    }
    return;
})(window);
