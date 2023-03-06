var questions = [
    "Inside which HTML element do we put the JavaScript?",
    "How do you write Hello World in an alert box?",
    "javascript is the same as java ",
    "What will the following code return: Boolean(10 > 9)",
    "Is JavaScript case-sensitive?",
    "How to write an IF statement in JavaScript?",
    "How to write an IF statement for executing some code if i is NOT equal to 5?",
    "How can you add a comment in a JavaScript?",
    "How can you detect the client's browser name?",
    "Which event occurs when the user clicks on an HTML element?",
                ]

                var answers = [
                    ['js', 'scripting', 'javascript', 'script'],
                    ["msg(Hello World)",
                    "msgBox(Hello World)",
                    "alertBox(Hello World)",
                   "alert(Hello World)"],
                   ["true", "false"],
                   ["NaN", "false", "true"],
                   ["no", "yes"],
                   ["if i == 5 then",
                   "if i = 5 then",
                   "if (i == 5)",   
                   "if i = 5"],
                   ["if (i <> 5)",
                   "if (i != 5)",      
                   "if i <> 5",
                   "if i =! 5 then"],
                   ["<!--This is a comment-->",
                   "This is a comment",
                   "//This is a comment"],
                  ["navigator.appName",     
                   "client.navName",
                   "browser.name"],
                   ["onmouseover",
                   "onmouseclick",
                   "onclick",    
                   "onchange"]
                              ]
                
            var randomQ = 0;    
                
function loadQuestion(){
             randomQ = Math.floor(Math.random()*questions.length);
            document.getElementById("questions").innerHTML = questions[randomQ];

            for (var i=0; i < questions.length;i++){
               document.getElementById("answers").innerHTML = answers[randomQ];
                
                
            }
                }


function check(){
if(randomQ == 0){}
}

var startEl=$("#start")





startEl.on("click", function(){
    var count = 5, timer = setInterval(function() {
        $("#start").html(count--);
        if(count == -1) clearInterval(timer);
    }, 1000);
    loadQuestion();

})







