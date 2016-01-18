$(document).ready(function() {
    $('#test').bubble({test1: 30, test2: 10, test3: 40});
});

(function($) {
    var getNbElems = function(data) {
        var res = 0;

        for (var i in data)
            res++;
        return res;
    }

    var getBiggestBubble = function(data) {
        var res = 0;

        for (var i in data) {
            if (data[i] > res)
            res = data[i];
        }
        return res;
    }

    $.fn.bubble = function(data) {
        var width = $(this).width(),
            height = $(this).height(),
            biggestBubble = getBiggestBubble(data),
            bubbleCount = getNbElems(data);
        var vMin = width < height ? height : width;
        var maxSize = vMin / bubbleCount;

        for (var i in data) {
            var tmp = data[i] / biggestBubble * maxSize,
                rand1 = Math.floor((Math.random() * vMin / 30) + 1),
                rand2 = Math.floor((Math.random() * vMin / 10) + 1);
            var styles = {
                'width': tmp,
                'height': tmp,
                'left': rand1,
                'top': rand2
            };

            console.log(tmp, data[i]);
            var content = $('<div></div>', {
                class: 'bubble',
                text: data[i]
            }).css(styles).appendTo(this);
        }
        console.log(maxSize);
    };
})(jQuery);
