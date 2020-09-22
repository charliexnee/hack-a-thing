# hack-a-thing
## Charlie nee
## CS 98

Somehow, I made it this far without ever actually making a website on my own. Thus, I attempted to make a simple site to learn the basics of the following skills
* jquery
* html/css/javascript
* bootstrap
* ajax
* data input and validation via web
* how to even host this thing

I decided to make a simple webpage that pulls data from the popular game League of Legends to display ability cooldowns for each champion at each level. In order to incorporate some additional complexity, I allow the user to enter in a value for cooldown reduction (cdr), an in-game feature that allows users to reduce their cooldown time and display ability cooldowns accounting for cdr.


I learned several things. Even putting together a simple template for html was new for me. Beyond that, I learned some light styling, how make api calls with javascript, how to process user input and update the page accordingly, some basic design elements such as tables and forms, and how to publish my page. 

Tutorials I used are listed here:
https://www.lennu.net/jquery-ajax-example-with-json-response/
https://docs.github.com/en/github/working-with-github-pages
https://www.w3schools.com/js/js_validation.asp
https://electrictoolbox.com/jquery-assign-remove-click-handler/#:~:text=Click%20handlers%20can%20be%20assigned%20to%20elements%20easily,remove%20the%20click%20events.%20Add%20a%20click%20handler
https://www.w3schools.com/howto/howto_js_dropdown.asp
https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-get-started.php


some stack overflow posts i found particularily helpful are here:
https://stackoverflow.com/questions/723112/jquery-fastest-way-to-remove-all-rows-from-a-very-large-table
https://stackoverflow.com/questions/17364091/parse-json-response-using-jquery
https://stackoverflow.com/questions/171027/add-table-row-in-jquery
https://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript
https://stackoverflow.com/questions/7196238/populate-html-table-with-jquery
https://stackoverflow.com/questions/3547035/javascript-getting-html-form-values
https://stackoverflow.com/questions/21056990/how-to-make-an-ajax-https-get-request-using-jquery


finally, reference information about my data sources is here:
https://developer.riotgames.com/docs/lol


Everything I intended do ended up working, but some trouble spots I had along the way were:
* I didn't realize all the javascript functions had to be inside the on document ready function, so none of my functions were working
* I was having a hard time parsing api responses
* I didn't realize that you couldnt make a call via http when your page was hosted via https, so after publishing my site i had to edit that
* I had trouble getting the table to update properly 
* I had a hard time getting my dropdown menu to populate and display properly

All of these issues eventually were resolved.

my project is hosted via github pages here: https://charliexnee.github.io/hack-a-thing/