

$(".more-tag").toggle(function () {
    $("span").removeClass("show-more");
    $(".more-tag").html("...Show Less");
}, function () {
        $(".content").addClass("show-more");
        $(".more-tag").html("Show More...");
});

function readFile(event) {
  //let file = input.files[0];

  var selectedFile = event.target.files[0];
    var reader = new FileReader();

    var result = $(".load-content");

    reader.onload = function(event) {
      result.innerHTML = event.target.result;
    };

    reader.readAsText(selectedFile);
}
$(".more").click(function (event) {

readFile(event);
});
