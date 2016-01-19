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
        var vMin = width < height ? width : width;
        var maxSize = vMin / bubbleCount * 1.2,
            lastBr = 0;

        $(this).css('text-align', 'center');

        for (var i in data) {
            switch(lastBr) {
                case 1:
                    lastBr = 2;
                    break;
                case 2:
                    lastBr = 0;
                    break;
            }
            var tmp = data[i] / biggestBubble * maxSize,
                rand1 = Math.floor((Math.random() * (vMin / 50)) + 1),
                rand2 = Math.floor((Math.random() * (vMin / 30)) + 1);
            console.log(rand1, rand2);
            var styles = {
                'width': tmp,
                'height': tmp,
                'margin-top': rand2,
                'margin-bottom': rand2,
                'margin-left': rand1,
                'margin-right': rand1,
                'font-size': '14px',
                'padding-top': tmp / 2 - 7,
                'border-radius': '50%',
                'display': 'inline-block',
                'position': 'relative'
            };

            if (rand1 < 10 && lastBr == 0) {
                lastBr = 1;
                $('<br />').appendTo(this);
            }
            $('<div></div>', {
                class: 'bubble',
                text: data[i]
            }).css(styles).appendTo(this);
        }
    };
})(jQuery);
