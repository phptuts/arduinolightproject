/**
 * Created by noahglaser on 12/21/15.
 */

function lightSwitchUpdate(lightIsOn) {
    var span = $("#state");
    if(lightIsOn) {
        span.html('ON');
        span.removeClass('off');
        span.addClass('on');
    }
    else {
        span.html('OFF');
        span.removeClass('on');
        span.addClass('off');
    }
}

$(document).ready(function() {
    var lightIsOn = false;
    lightSwitchUpdate(status);
    $('#switch').on('click', function() {
        lightIsOn = !lightIsOn;
        $.ajax({
            url: 'light/' + lightIsOn,
            success: function() {
                lightSwitchUpdate(lightIsOn);
            },
            error: function() {
                alert("THERE WAS AN ERROR");
            }
        });
    });
});