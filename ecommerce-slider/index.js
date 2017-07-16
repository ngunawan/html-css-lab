(function () {
    function init(item) {

        //settings -------------------------

        var items = item.querySelectorAll('li'),
            current = 0,
            autoUpdate = true,
            timeTransition = 4000;

        //create elements -----------------

        var controls = document.createElement('div');
        controls.className = 'nav_arrows';

        var prevBtn = document.createElement('button');
        prevBtn.className = 'prev';

        var nextBtn = document.createElement('button');
        nextBtn.className = 'next';

        var counter = document.createElement('div');
        counter.className = 'counter';
        counter.innerHTML = "<span>1</span><span>" + items.length + "</span>";

        if (items.length > 1) {
            controls.appendChild(prevBtn);
            controls.appendChild(counter);
            controls.appendChild(nextBtn);
            item.appendChild(controls);
        }

        items[current].className = "current";
        if (items.length > 1) {
            items[items.length - 1].className = "prev_slide";
        }

        //navigation -----------------

        var navigate = function (dir) {
            items[current].className = "";

            if (dir === 'right') {
                current = (current < items.length - 1) ? current + 1 : 0;
            } else {
                current = (current > 0) ? current - 1 : items.length - 1;
            }

            var nextCurrent = (current < items.length - 1) ? current + 1 : 0;
            var prevCurrent = (current > 0) ? current - 1 : items.length - 1;

            items[current].className = "current";
            items[prevCurrent].className = "prev_slide";
            items[nextCurrent].className = "";

            counter.firstChild.textContent = current + 1;
        }

        //events --------------------

        item.addEventListener('mouseenter', function () {
            autoUpdate = false;
        });

        item.addEventListener('mouseleave', function () {
            autoUpdate = true;
        });

        setInterval(function () {
            if (autoUpdate) {
                navigate('right');
            }
        }, timeTransition);

        prevBtn.addEventListener('click', function () {
            navigate('left');
        });

        nextBtn.addEventListener('click', function () {
            navigate('right');
        });

        // swipe navigation
        item.addEventListener('touchstart', handleTouchStart, false);
        item.addEventListener('touchmove', handleTouchMove, false);
        var xDown = null;
        var yDown = null;

        function handleTouchStart(e) {
            xDown = e.touches[0].clientX;
            yDown = e.touches[0].clientY;
        };

        function handleTouchMove(e) {
            if (!xDown || !yDown) {
                return;
            }

            var xUp = e.touches[0].clientX;
            var yUp = e.touches[0].clientY;

            var xDiff = xDown - xUp;
            var yDiff = yDown - yUp;

            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                if (xDiff > 0) {
                    /* left swipe */
                    navigate('right');
                } else {
                    navigate('left');
                }
            }
            /* reset values */
            xDown = null;
            yDown = null;
        };

    }

    //querySelectorAll returns an array-like obj
    //using call allows use of Array.slice() unavailable to querySelectorAll
    Array.prototype.slice.call(document.querySelectorAll('.slider')).forEach(function (item) {
        init(item);
    });

})();
