$("#photo_url").on("blur", function(event) {
    var photo_url = $(this).val();
    //alert(photo_url);
    var preview = $("#preview");
    if (photo_url) {
        preview.attr("src", photo_url);
        preview.show();
        preview.fadeIn(1000);
    } else {
        preview.hide();
        preview.fadeOut(1000);
        //alert("no photo_url")
    }
});