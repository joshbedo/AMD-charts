require(["jquery", "jquery.alpha", "jquery.beta"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
    
	//allows to chain functions from multiple dependencies
        //$('body').alpha().createChart();
	$('body').setData('south').createChart();
    });
});
