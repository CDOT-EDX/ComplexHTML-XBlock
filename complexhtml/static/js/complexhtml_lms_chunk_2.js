console.log("complex js chunk2");
/* Page is loaded. Do something. */
$(function ($) {

    console.log("on page load from chunk2");
    getCleanBody(function(){
        anySlide = new AVIATION.common.Slide();
        anySlide.constructor(json_clean_setting);
        console.log("JSON");
        console.log(json_clean_setting);
        json_clean_setting.parentSlide = anySlide;
        var selected = [];
        $(anySlide).on("completedQuiz", function(selectedAnswers){
            var checked;
    		$(".answers input:checked").each(function(index, value){
            checked = $(this).attr('id');
            selected.push(parseInt(checked.split('_')[3]));
            });
        if (selected.length == 1){
            selected = selected[0];
        }
        checkQuizResult(checked,selected);
	    sendEmail();
        });
    });

if ($(".action-publish") === undefined) {

    session_start();

    tick_timer = setInterval(function () {

        $.ajax({
            type: "POST",
            url: runtime.handlerUrl(xblock_element, 'session_tick'),
            data: JSON.stringify({}),
            async: false
        });

    }, session_tick);

}

$(window).unload(function() { session_end(); });
$('.chx_end_session').click(function() { session_end(); });
