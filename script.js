
$(document).ready(() => {
    $("#listings").on("click", () => {
        // Refresh on-click
        $("#option").empty();
        $.ajax({
            type: "GET",
            url: "https://sv-reqres.now.sh/api/listings",
            dataType: "json",
            success: function (data) {
                // create history link for this search
                console.log("data listings ::: ", data);
                $('#listings').append(data);

            },
            // After data comes back from the request
        }).then(function (response) {

            let results = response.data;

            console.log(response);

            // Looping through each result item
            for (let i = 0; i < results.length; i++) {

                // Clear any old data...

                $("#info").empty();

                // create html elements for a bootstrap card
                let col = $("<div>").addClass("card-group")
                let card = $("<div>").addClass("card-title" + response.title)
                let body = $("<div>").addClass("card-body" + response.description)




                let img = $("<img>").attr("src", "fallback.jpg").css({ 'width': '500px', 'height': '500px', 'float': 'left', 'padding': '5px' });


                let p1 = $("<p>").text(" " + results[i].title).css('font-weight', 'bold');
                let p2 = $("<p>").text(" " + results[i].description);

                // merge together and put on page
                col.append(card.append(body.append(img, p1, p2)));
                $("#option").append(col);
                $("#option").append(card);



            }

        })

    })
})


$(document).ready(() => {
    $("#events").on("click", () => {
        $("#option").empty();
        $.ajax({
            type: "GET",
            url: "https://sv-reqres.now.sh/api/events",
            dataType: "json",
            success: function (data) {
                // create history link for this search
                console.log("data events ::: ", data);
                $('#events').append(data);

            },
        }).then(function (response) {

            let results = response.data;

            console.log(response);

            // Looping through each result item

            for (let i = 0; i < results.length; i++) {

                $("#info").empty();

                // create html elements for a bootstrap card
                let col = $("<div>").addClass("col-md-2");
                let card = $("<div>").addClass("Title: " + response.title);
                let body = $("<div>").addClass("mediaurl " + response.description);


                let img = $("<img>").attr("src", "fallback.jpg").css({ 'width': '500x', 'height': '500px', 'float': 'left', 'padding': '5px' });
                let p1 = $("<p>").text(" " + results[i].title).css('font-weight', 'bold');
                let p2 = $("<p>").text(" " + results[i].description);

                // merge together and put on page
                col.append(card.append(body.append(img, p1, p2)));
                $("#option").append(col);
                $("#option").append(card);

            }
        })

    })
})


$(document).ready(() => {

    $("#offers").on("click", () => {
        $("#option").empty();
        $.ajax({
            type: "GET",
            url: "https://sv-reqres.now.sh/api/offers",
            dataType: "json",
            success: function (data) {
                // create history link for this search
                console.log("data offers ::: ", data);
                $('#offers').append(data);
            },
        }).then(function (response) {

            let results = response.data;

            console.log(response);

            // Looping through each result item
            for (let i = 0; i < results.length; i++) {

                $("#info").empty();

                // create html elements for a bootstrap card
                let col = $("<div>").addClass("col-md-2");
                let card = $("<div>").addClass("Title: " + response.title);
                let body = $("<div>").addClass("mediaurl " + response.description);

                let img = $("<img>").attr("src", "fallback.jpg").css({ 'width': '500px', 'height': '500px', 'float': 'left', 'padding': '5px' });
                let p1 = $("<p>").text(" " + results[i].title).css('font-weight', 'bold');
                let p2 = $("<p>").text(" " + results[i].description)
                // merge together and put on page
                col.append(card.append(body.append(img, p1, p2)));
                $("#option").append(col);

                $("#option").append(card);

            }
        })

    })
})







