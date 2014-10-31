$(document).ready(function() {

    // knockout takes a date object and returns a
    // string with wake times!
    // time + :14 + (multiples of 90 mins)
    function knockout(rightnow) {
        var r = ''; // return string
        var hr = rightnow.getHours();
        var dhr = 0; // separate variable to display because (24 hr clock)
        var ap = '';

        // it takes 14 minutes to fall asleep
        var min = rightnow.getMinutes() + 14;
        if(min > 60) {
            min = min - 60;
            hr = hr + 1;

            if(hr >= 24) {
                if(hr === 24) {
                    hr = 0; // midnight, must adjust!
                }
                else if(hr === 25) {
                    hr = 1;
                }
            }
        }

        for(var ctr = 0; ctr < 6; ctr++) { // normal sleep schedule
            // add an hour and a half
            if(min < 30) {
                min = min + 30;
            }
            else {
                min = min - 30;
                hr = hr + 1;
            }
            hr = hr + 1;

            if(hr === 24) {
                hr = 0;
            }
            if(hr === 25) {
                hr = 1;
            }

            if(hr < 12) {
                ap = '<sup>am</sup>';
                dhr = hr;
                if(hr === 0) {
                    dhr = "12";
                }
            }
            else {
                ap = '<sup>pm</sup>';
                dhr = hr - 12;
            }
            if(dhr === 0) {
                dhr = 12;
            }

            if(ctr === 0) {
                if(min > 9) {
                    r = r + '<div class="result"><span class="time">' + dhr + 'h' + min + ap + '</span></div>';
                }
                else {
                    r = r + '<div class="result"><span class="time">' + dhr + 'h0' + min + ap + '</span></div>';
                }
            }
            else if(ctr === 4 || ctr === 5) {
                if(min > 9) {
                    r = r + '<div class="result"><span class="time">' + dhr + 'h' + min + ap + '</span></div>';
                }
                else {
                    r = r + '<div class="result"><span class="time">' + dhr + 'h0' + min + ap + '</span></div>';
                }
            }
            else if(ctr === 3) {
                if(min > 9) {
                    r = r + '<div class="result"><span class="time">' + dhr + 'h' + min + ap + '</span></div>';
                }
                else {
                    r = r + '<div class="result"><span class="time">' + dhr + 'h0' + min + ap + '</span></div>';
                }
            }
            else {
                if(min > 9) {
                    r = r + '<div class="result"><span class="time">' + dhr + 'h' + min + ap + '</span></div>';
                }
                else {
                    r = r + '<div class="result"><span class="time">' + dhr + 'h0' + min + ap + '</span></div>';
                }
            }
        }

        return r;
    }

    function results() {
        var answ = '';
        var d = new Date();
        answ = knockout(d);
        $('#js-results').html(answ);
        $('#js-results').show();
    }
    results();
});
