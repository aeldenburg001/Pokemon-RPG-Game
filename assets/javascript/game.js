// Global variables
var baseAttack = 0; // original attack strength
var player; // holds the player Object
var defender; // holds the current defender Object
var charArray = []; // array that stores the game characters (Objects)
var playerSelected = false; // flag to mark if we picked a player yet
var defenderSelected = false; // flag to mark if we picked a defender


// Constructor
function Character(name, hp, ap, counter, pic) {
    this.name = name;
    this.healthPoints = hp;
    this.attackPower = ap;
    this.counterAttackPower = counter;
    this.pic = pic;
}


// Increase the attack strength (this attack strength + original attack strength)
Character.prototype.increaseAttack = function () {
    this.attackPower += baseAttack;
};

// Performs an attack
Character.prototype.attack = function (Obj) {
    Obj.healthPoints -= this.attackPower;
    $("#msg").html("You attacked " +
        Obj.name + "for " + this.attackPower + " damage points.");
    this.increaseAttack();
};

// Performs a counter attack
Character.prototype.counterAttack = function (Obj) {
    Obj.healthPoints -= this.counterAttackPower;
    $("#msg").append("<br>" + this.name + " counter attacked you for " + this.counterAttackPower + " damage points.");
};


// Initialize all the characters
function initCharacters() {
    var squ = new Character("Squirtle", 100, 10, 5, "data:image/jpeg;base64,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");
    var bulb = new Character("Bulbasaur", 200, 50, 30, "data:image/jpeg;base64,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");
    var pika = new Character("Pikachu", 150, 15, 2, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUnPvva1M6XSQd8CzqzPC_JTr1F-z2uueQJac0xXmnYvrrzLaREA");
    var psy = new Character("Psyduck", 180, 30, 12, "data:image/jpeg;base64,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");
    charArray.push(squ, bulb, pika, psy);
}

// "Save" the original attack value
function setBaseAttack(Obj) {
    baseAttack = Obj.attackPower;
}

// Checks if character is alive
function isAlive(Obj) {
    if (Obj.healthPoints > 0) {
        return true;
    }
    return false;
}

// Checks if the player has won
function isWinner() {
    if (charArray.length == 0 && player.healthPoints > 0)
        return true;
    else return false;
}

// Create the character cards onscreen
function characterCards(divID) {
    $(divID).children().remove();
    for (var i = 0; i < charArray.length; i++) {
        $(divID).append("<div />");
        $(divID + " div:last-child").addClass("card");
        $(divID + " div:last-child").append("<img />");
        $(divID + " img:last-child").attr("id", charArray[i].name);
        $(divID + " img:last-child").attr("class", "card-img-top");
        $(divID + " img:last-child").attr("src", charArray[i].pic);
        $(divID + " img:last-child").attr("width", 150);
        $(divID + " img:last-child").addClass("img-thumbnail");
        $(divID + " div:last-child").append(charArray[i].name + "<br>");
        $(divID + " div:last-child").append("HP: " + charArray[i].healthPoints);
        $(divID + " idv:last-child").append();

    }
}

// Update the characters pictures location on the screen (move them between divs)
function updatePics(fromDivID, toDivID) {
    $(fromDivID).children().remove();
    for (var i = 0; i < charArray.length; i++) {
        $(toDivID).append("<img />");
        $(toDivID + " img:last-child").attr("id", charArray[i].name);
        $(toDivID + " img:last-child").attr("src", charArray[i].pic);
        $(toDivID + " img:last-child").attr("width", 150);
        $(toDivID + " img:last-child").addClass("img-thumbnail");
    }
}

// plays audio file (.mp3)
function playAudio() {
    var audio = new Audio("./assets/media/themeSongSmall.mp3");
    audio.play();
}


// Change the view from the first screen to the second screen
function changeView() {
    $("#firstScreen").empty();
    $("#secondScreen").show();
}


$(document).on("click", "img", function () {
    // Stores the defender the user has clicked on in the defender variable and removes it from the charArray
    if (playerSelected && !defenderSelected && (this.id != player.name)) {
        for (var j = 0; j < charArray.length; j++) {
            if (charArray[j].name == (this).id) {
                defender = charArray[j]; // sets defender
                charArray.splice(j, 1);
                defenderSelected = true;
                $("#msg").html("Click the button to attack!");
            }
        }
        $("#defenderDiv").append(this); // appends the selected defender to the div 
        $("#defenderDiv").addClass("animated zoomInRight");
        $("#defenderDiv").append("<br>" + defender.name);
        $("#defenderHealthDiv").append("HP: " + defender.healthPoints);
        $("#defenderHealthDiv").addClass("animated zoomInRight");
    }
    // Stores the character the user has clicked on in the player variable and removes it from charArray
    if (!playerSelected) {
        for (var i = 0; i < charArray.length; i++) {
            if (charArray[i].name == (this).id) {
                player = charArray[i]; // sets current player
                playAudio(); // starts theme song
                $("body").css({
                    "background-image": "url('./assets/images/" + this.id[0] + ".jpg')"
                }); // changes the background picture according to the user selection
                setBaseAttack(player);
                charArray.splice(i, 1);
                playerSelected = true;
                changeView();
                $("#msg").html("Pick an enemy to fight!");
            }
        }
        updatePics("#game", "#defendersLeftDiv");
        $("#playerDiv").append(this); // appends the selected player to the div
        $("#playerDiv").addClass("animated zoomIn");
        $("#playerDiv").append(player.name);
        $("#playerHealthDiv").append("HP: " + player.healthPoints);
        $("#playerHealthDiv").addClass("animated zoomIn");
    }

});

// The attack button functionality
$(document).on("click", "#attackBtn", function () {
    if (playerSelected && defenderSelected) {
        if (isAlive(player) && isAlive(defender)) {
            player.attack(defender);
            defender.counterAttack(player);
            $("#playerHealthDiv").html("HP: " + player.healthPoints);
            $("#defenderHealthDiv").html("HP: " + defender.healthPoints);
            if (!isAlive(defender)) {
                $("#defenderHealthDiv").html("DEFETED!");
                $("#playerHealthDiv").html("Enemy defeated!");
                $("#msg").html("Pick another enemy to battle...");
            }
            if (!isAlive(player)) {
                $("#playerHealthDiv").html("YOU LOST!");
                $("#msg").html("Try again...");
                $("#attackBtn").html("Restart Game");
                $(document).on("click", "#attackBtn", function () { // restarts game
                    location.reload();
                });
            }
        }
        if (!isAlive(defender)) {
            $("#defenderDiv").removeClass("animated zoomInRight");
            $("#defenderHealthDiv").removeClass("animated zoomInRight");
            $("#defenderDiv").children().remove();
            $("#defenderDiv").html("");
            $("#defenderHealthDiv").html("");
            defenderSelected = false;
            if (isWinner()) {
                $("#secondScreen").hide();
                $("#globalMsg").show();
            }
        }
    }
});

// EXECUTE
$(document).ready(function () {
    $("#secondScreen").hide();
    $("#globalMsg").hide();
    initCharacters();
    characterCards("#game");
});