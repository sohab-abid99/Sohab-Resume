
$(".more-tag1").toggle(function () {
    fetch('index.json')
        .then((response) => response.json())
        .then((json) => {
            $(".content1").html(json.content1)
            $(".more-tag1").html("...Show Less")
        });
}, function () {
        $(".content1").html(null);
        $(".more-tag1").html("Show More...");
});

//another toggle function 
$(".more-tag2").toggle(function () {
    fetch('index.json')
        .then((response) => response.json())
        .then((json) => {
            $(".content2").html(json.content2)
            $(".more-tag2").html("...Show Less")    
        });
}, function() {
    $(".content2").html(null);
    $(".more-tag2").html("Show More...");
});


//another toggle function 
$(".more-tag3").toggle(function () {
    fetch('index.json')
        .then((response) => response.json())
        .then((json) => {
            var div = document.getElementsByClassName("certifications2");
            var h5 = document.createElement("h5");
            h5.appendChild(document.createTextNode(json.content3));

            var p = document.createElement("p");
            p.appendChild(document.createTextNode(json.content4));

            div[0].appendChild(h5);
            div[0].appendChild(p);
            
            var line = document.getElementsByClassName("start-line");
            var p = document.createElement("p");
            p.appendChild(document.createTextNode(json.content5));
            line[0].appendChild(p);

            var ul = document.getElementById("certifications2");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(json.content6));
            ul.appendChild(li);

            
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(json.content7));
            ul.appendChild(li);

            var div2 = document.getElementsByClassName("certifications3");
            var h5 = document.createElement("h5");
            h5.appendChild(document.createTextNode(json.content8));
            var p = document.createElement("p");
            p.appendChild(document.createTextNode(json.content9));

            div2[0].appendChild(h5);
            div2[0].appendChild(p);

            var ul2 = document.getElementById("certifications3");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(json.content10));
            ul2[0].appendChild(li);

            $("#link1").remove();
            $(".more-tag3").html("...Show Less")
        });
}, function () {
        $(".certifications2").html(null);
        $(".start-line").html(null);
        $("#certifications2").html(null);
        $(".certifications3").html(null);
        $("#certifications3").html(null);
        $(".link-class").attr('id', 'link1');
    $(".more-tag3").html("...Show Less");
});

//toggle function for web projects sections
$(".more-tag4").toggle(function () {
    fetch('index.json')
        .then((response) => response.json())
        .then((json) => {
            $(".dice").html(json.content11);
            var ul = document.getElementsByClassName("dice-list");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(json.content12));
            ul[0].appendChild(li);
            document.querySelector(".dice-list1").classList.remove("dice-list2")

            $(".more-tag4").html("...Show Less")
        });
}, function () {
        $(".dice").html(null);
        $(".dice-list").html(null);
       $(".dice-list1").attr("class", "dice-list2");
        $(".more-tag4").html("Show More...");
});
