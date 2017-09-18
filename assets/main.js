function guess(){
    let answer = $('#answer').val();
    let attempt = $('#attempt').val();
    let code = $('#code');
    let guessingDiv = $('#guessing-div');
    let input = $('#user-guess').val();
    let message = $('#message');
    let replayDiv = $('#replay-div');
    let results = $('#results');

    message.innerHTML = "";

    if(answer == "") {
        answer = Math.floor(Math.random() * 10000).toString();
        while(answer.length < 4) {
            answer = "0" + answer;
        }
        $('#answer').val(answer);
    }
    if(attempt == "") 
        attempt = 0;

    if(input.length != 4) {
        message.append('Guesses must be exactly 4 characters long.');
        return;
    } else {
        attempt++;
        $('#attempt').val(attempt);
    }

    let correct = 0;
    let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    for(i = 0; i < input.length; i++)
    {
        if(input.charAt(i) == answer.charAt(i))
        {
            html += '<span class="glyphicon glyphicon-ok"></span>';
            correct++;
        } else if (answer.indexOf(input.charAt(i)) > -1) 
            html += '<span class="glyphicon glyphicon-transfer"></span>';
         else 
            html += '<span class="glyphicon glyphicon-remove"></span>';
    }
    html += '</div></div>';

    results.append(html);

    if(correct == input.length) {
        message.append('You Win! :)');
        code.className += " success";
        code.append(answer);
        guessingDiv.css = {display:none};
        replayDiv.css = {display:block};
    } else if(attempt >= 10) {
        message.append('You Lose! :(');
        code.className += " failure";
        code.append( answer);
        guessingDiv.css = {display:none};
        replayDiv.style = {display:block};
    } else 
        message.append('Incorrect, try again.');
}
