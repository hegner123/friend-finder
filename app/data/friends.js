var scores = [ {
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}, {
  "name":"Brayden",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      1,
      1,
      3,
      4,
      5,
      3,
      2,
      5,
      4,
      1
    ]
},
{
  "name":"Seth",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      2,
      2,
      1,
      4,
      3,
      3,
      1,
      3,
      2,
      4
    ]
},
{
  "name":"Jennifer",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      2,
      4,
      3,
      1,
      3,
      2,
      4,
      3,
      2
    ]
},
{
  "name":"Tanya",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      3,
      2,
      1,
      3,
      3,
      3,
      3,
      3,
      3,
      4
    ]
}];

$(document).ready(function(){


  
    // Chosen CSS
    var config = {
      ".chosen-select": {},
      ".chosen-select-deselect": {
        allow_single_deselect: true
      },
      ".chosen-select-no-single": {
        disable_search_threshold: 10
      },
      ".chosen-select-no-results": {
        no_results_text: "Oops, nothing found!"
      },
      ".chosen-select-width": {
        width: "95%"
      }
    };

    for (var selector in config) {
      $(selector).chosen(config[selector]);
    }


    $("#submit").on("click", function(event) {
      event.preventDefault();

      // Form validation
      function validateForm() {
        var isValid = true;
        $(".form-control").each(function() {
          if ($(this).val() === "") {
            isValid = false;
          }
        });

        $(".chosen-select").each(function() {

          if ($(this).val() === "") {
            isValid = false;
          }
        });
        return isValid;
      }

      // If all required fields are filled
      if (validateForm()) {
        // Create an object for the user"s data
        var userData = {
          name: $("#name").val(),
          photo: $("#photo").val(),
          scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
          ]
        };

        // AJAX post the data to the friends API.
        $.post("/api/friends", userData, function(data) {

          // Grab the result from the AJAX post so that the best match's name and photo are displayed.
          $("#match-name").text(data.name);
          $("#match-img").attr("src", data.photo);

          // Show the modal with the best match
          $("#results-modal").modal("toggle");

        });
      } else {
        alert("Please fill out all fields before submitting!");
      }
    });
  




})