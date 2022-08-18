//another toggle function 
$(".more").toggle(function () {
    fetch('index.json')
        .then((response) => response.json())
        .then((json) => $(".load-content").html(json.nam));
}, function() {
    $(".load-content").html(null);
    $(".more").html("Show More...");
});
