function jsAjax(){
    // Step 1: Create the request 
    var ajaxRequest = new XMLHttpRequest();

    //Step 2: Create an event handler to send received data to a callback function
    ajaxRequest.onreadystatechange = function(){
        if (ajaxRequest.readyState === 4){
            callback(ajaxRequest.response);
        };
    };
};

//define callback function
function callback(response){
    //tasks using the data go here
    console.log(response);
};