var obj ;
var score = {
    question1 : 0,
} ;
var correctAns = {
    
};

var classId = [];

var result = 0;



$(document).ready(function(){
    console.log("Script Loaded!!!");
    $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", function(response){
        obj = response ;
        // console.log(response);
        $.each( response, function(i) {
            correctAns["question"+response[i].id] = response[i].answer;
            var divOne = $("<div>").addClass("quiz-container").addClass("question"+response[i].id);
            
            divOne.append($("<h3>").text("Q"+response[i].id+". "+ response[i].question));
            $.each( response[i].options , function(j) {
                // console.log(response[i].options[j]);

                var label = $("<label>").append($("<input>").attr({
                    type : "radio",
                    name : "question"+response[i].id,
                    value : j+1
                
                }));
                label.append($("<h4>").text(response[i].options[j]));
                label.attr({
                    id: "label"+(j+1),
                    class:"question"+response[i].id,
                });

                divOne.append(label);

            });
            
            divOne.append($("<div>").addClass("horizontal-line"));
            // console.log(response[i]);

            $("#position-div").append(divOne);
            // console.log(obj);
        });

        $("#position-div").append($("<button>").attr({
            
            class : "btn-submit",
            
        }).text("Submit"));

        $( "label input" ).on( "click", function(k) {
            
            console.log(k.target);
            console.log(k);
            score[this.name] = this.defaultValue;
            console.log(score); 
            console.log(correctAns);
            
          });

        //   $("label").on( "click", function(){
        //     // var labell = this;
        //     var iconAddCheck;
        //     var iconAddCross;
        //     if (score[this.className] == correctAns[this.className]){
        //         console.log(this.id);
        //         console.log(this.className);
        //         iconAddCheck = $("<i>").attr("class", "fas fa-check show");
        //         $(this).append(iconAddCheck);
        //     }
        //     else if(score[this.className] != correctAns[this.className]){
        //         iconAddCross = $("<i>").attr("class", "fas fa-times show");
        //         $(this).append(iconAddCross);
        //     }

        // });

        $( "button" ).on( "click", function(l) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            var iconAddCheck = $("<i>").attr("class", "fas fa-check show");
            var iconAddCross = $("<i>").attr("class", "fas fa-times show");
            var result = 0;
              if (score.length === correctAns.length){
                $.each( correctAns, function(m) {
                    if (parseInt(correctAns[m]) === parseInt(score[m])){
                        result += 1;
                        // iconAddCheck = $("<i>").attr("class", "fas fa-check show");
                
                        $(" ."+m+" #label"+parseInt(score[m]) ).append( $("<i>").attr("class", "fas fa-check show"));

                    }
                    else {
                        // result -= 1;
                        $(" ."+m+" #label"+parseInt(correctAns[m])).append( $("<i>").attr("class", "fas fa-check show"));
                        $(" ."+m+" #label"+parseInt(score[m]) ).append($("<i>").attr("class", "fas fa-times show"));
                    }
                    
                });
              }
              else {
                  alert("Please Attempt all questions");
              }

            console.log(result);
            $("#result").html(result);
            $("button").attr('disabled', true);

          });




    });


    

});



// {
//     "id": 1,
//     "answer": 3,
//     "question": "Which was not one of Voldemort's Horcruxes?",
//     "options": [
//       "Harry",
//       "Nagini",
//       "Helga's Diadem",
//       "Tom Riddle's Diary"
//     ]
//   }

// {/* <div id="position-div">
// <div id="quiz-container">
//     <h3>hfhhhhfhhfhfhfhffhhf</h3>
//     <h4>fdmvkfkkn</h4>
//     <div class="horizontal-line"></div>
// </div> */}