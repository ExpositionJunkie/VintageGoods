$(function() {

    // event handlers for the thumbnail div on index
    $("#featureThumbnails1").on("click", function(event) {
        var targetElement = $(event.target);

        if (targetElement.is("img")) {
            newSrc = targetElement.attr("src")
            $("#featureImg1").attr("src", newSrc)
        }
    })

    $("#featureThumbnails2").on("click", function(event) {
        var targetElement = $(event.target);

        if (targetElement.is("img")) {
            newSrc = targetElement.attr("src")
            $("#featureImg2").attr("src", newSrc)
        }
    })


    $("#featureThumbnails3").on("click", function(event) {
        var targetElement = $(event.target);

        if (targetElement.is("img")) {
            newSrc = targetElement.attr("src")
            $("#featureImg3").attr("src", newSrc)
        }
    })


})