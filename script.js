//winner message called later in determineWinner function
var winnerMessage;

//factory function to create a politician with "fullName" as parameter
var createPolitician = function (fullName, rgbColor) {
    var politician = {
        name : fullName,
        //electionResults added later in array
        electionResults : null,
        totalVotes : 0,
        partyColor : rgbColor,
        //function to loop through the electionResults array and add each iteration to a total
        countVotes : function () {
            for (i=0; i < this.electionResults.length; i++) {
                this.totalVotes = this.totalVotes + this.electionResults[i];
            } 
        },
    };
    return politician;
};

//creating politicians via factory function
var politician1 = createPolitician("Jim", [196, 4, 4]);
var politician2 = createPolitician("Dwight", [4, 17, 196]);

politician1.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
politician2.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

var setStateResults = function(state) {
    
    theStates[state].winner = null;

    if (politician1.electionResults[state] > politician2.electionResults[state]) {
      theStates[state].winner = politician1;
    }
    else if (politician1.electionResults[state] < politician2.electionResults[state]) {
        theStates[state].winner = politician2;
    }
    
    var stateWinner = theStates[state].winner;
    
    if (stateWinner !== null) {
        theStates[state].rgbColor = stateWinner.partyColor;
    }
    else {
        theStates[state].rgbColor = [156, 153, 152];
    }
};

//calling countVotes function to total up votes in the above array for each politician
politician1.countVotes();
politician2.countVotes();

//comparing the total votes for each politician to determine the winner
var determineWinner = function() {
    if (politician1.totalVotes > politician2.totalVotes) {
        winnerMessage = politician1.name + " is the winner with " + politician1.totalVotes + " votes!";
    }

    else if (politician1.totalVotes < politician2.totalVotes) {
        winnerMessage = politician2.name + " is the winner with " + politician2.totalVotes + " votes!";
    }

    else {
        winnerMessage = "It's a draw!";
    }
};
determineWinner();

//logging the winner to the console
console.log(winnerMessage);