$(document).ready(function(){
  // Make request to get list of champions
  // I manually put in the current patch, not sure how to dynamically update
    const championURL = 'https://ddragon.leagueoflegends.com/cdn/10.19.1/data/en_US/champion.json'
    $.ajax({
      url: championURL,
      type: 'GET',
      success: function(response){
        // Get just the champion names
        var championNames = Object.keys(response['data'])
        // Populate dropdown
        var champMenu = document.getElementById("champion-dropdown")
        for (i = 0; i < championNames.length; i++) {
          var champion = document.createElement("option")
          champion.textContent = championNames[i];
          champion.value= championNames[i];
          champMenu.appendChild(champion);

        }

      },
      error: function(){
        console.log('bruh')
      }
    })
    // when button is pressed
    $("#calculate").on("click", function() {
      console.log("click");
      // get form data and reset table 
      $('#cooldown-rows').empty();
      var champion = document.getElementById("champion-dropdown").value;
      var cdr = document.getElementById("cdr-value").value;
      // input validation
      if (isNaN(cdr)){
        alert("please enter a number")
        return
      }
      // request api data
      const championURL = 'https://ddragon.leagueoflegends.com/cdn/10.19.1/data/en_US/champion/' + champion + ".json";
      $.ajax({
        url: championURL,
        type: 'GET',
        success: function(response){
            var spells = response['data'][champion]['spells'];
            console.log(spells);
            var newRows = new Array(6);
            for (var i = 0; i < newRows.length; i++) {
              newRows[i] = new Array(4).fill("N/A");
            }            
          // reformat data to make it easier to add by row
          for (var spell = 0; spell < spells.length; spell++) {
            var cooldowns = spells[spell]['cooldown'];
            for (var rank = 0; rank < cooldowns.length; rank++){
              newRows[rank][spell] = cooldowns[rank] * (100 - cdr) / 100;
            }
          }

        //add row
          for (i = 1; i <= newRows.length; i++){
            var row = "<tr><td>" + i + "</td>";
            for (var j = 0; j < spells.length; j++){
              row += "<td>" + newRows[i-1][j] +"</td>" 
            }
            row += "</tr>"
            $('#cooldown-rows').append(row);
          }

        },
        error: function(){
          console.log('bruh')
        }
      })})
});
