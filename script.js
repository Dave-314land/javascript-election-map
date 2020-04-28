

var createPolitician = function (fullName, numVotes) {
    var politician = {
        name : fullName,
        electionResults : null,
        totalVotes : numVotes,
        announcePolitician : function() {
            console.log(this.name + " is running for office! He has " + this.totalVotes + " votes." );
        }
    };

    politician.announcePolitician();
    return politician;
};

var politician1 = createPolitician("Dave", 2);