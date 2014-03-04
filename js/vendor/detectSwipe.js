function detectSwipe(target, options) {
    var maxTime = 1000,
        maxDistance = 50,
        target = $(target),
        startX = 0,
        startTime = 0,
        touch = "ontouchend" in document,
        startEvent = (touch) ? 'touchstart' : 'mousedown',
        moveEvent = (touch) ? 'touchmove' : 'mousemove',
        endEvent = (touch) ? 'touchend' : 'mouseup';

    target
        .bind(startEvent, function(e) {
            // prevent image drag (Firefox)
            // e.preventDefault();
            startTime = e.timeStamp;
            startX = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.pageX;
            })
        .bind(endEvent, function(e) {
            startTime = 0;
            startX = 0;
        })
        .bind(moveEvent, function(e) {
            var currentX = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.pageX,
                currentDistance = (startX === 0) ? 0 : Math.abs(currentX - startX),
                currentTime = e.timeStamp;
            if (startTime !== 0 && currentTime - startTime < maxTime && currentDistance > maxDistance) {
                if (currentX < startX) {
                    options.swipeLeft();
                }
                if (currentX > startX) {
                    options.swipeRight();
                }
                startTime = 0;
                startX = 0;
            }
    });
}