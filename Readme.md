# MY VERSION OF: Rock, Paper,Scissors,Lizard,Spock

This is a simple game where you can play Rock, Paper, Scissors, Lizard, Spock against the computer.
You will ne challanged by computer and hopefully you can win. This game has element of chance so you will never know the outcome.
I hope users will enjoy this functionality and and find it relaxing to play, users have nothing to lose other than their mind if they lose too many times.

![Responsice Mockup](https://github.com/PeterSvk1/project2/blob/main/assets/readmePics/Screenshotgen.png)
## Features 
### Existing Features
- __Header__ 
- Its located on the top of the website and shows name of the game: Rock, Paper,Scissors,Lizard,Spock. I used image file as a header and user can easily understand what game he is playing.
- header has very good contrast with the background.
![header](https://github.com/PeterSvk1/project2/blob/main/assets/images/logo.jpg)

- __The Game Rules__  
-The game rules are shown to player on an image file, this image perfectly describes how to play game and its easy to understand, its using arrows in order to help player in case they are confused

![rules](https://github.com/PeterSvk1/project2/blob/main/assets/images/rules.jpg)

- __The Game Options__ 
- The game options have clear instructions and user can see what option he is about to click, when user makes choice and clicks on a button it will change colour.
- this section provides interactive buttons which players use to play game.
![options](https://github.com/PeterSvk1/project2/blob/main/assets/readmePics/options.png)

- __The Game Results__ 
- When players click on a button, he will be displayed what choice he clicked on and also NPC will display their choice, so player knows NPC is not cheating.
- java script generates random response for NPC and also determines who is winner 
- winner is annouced after each click and also logged into score board
- thanks to score board player can track if he won or not, its very clear to user after each round/click
- player can also see how many tries he has left before game will restart.
![user/npc](https://github.com/PeterSvk1/project2/blob/main/assets/readmePics/results.png)
![scoreboard](https://github.com/PeterSvk1/project2/blob/main/assets/readmePics/scoreboard.png)

__Footer__ 
- The footer provides link to website for more information if players click on.
- It takes them to new website which is open on new page.
![footer](https://github.com/PeterSvk1/project2/blob/main/assets/readmePics/footer.png)

## Testing
- Game was tested on different browsers: chrome, mozzila, brave
- I confirmed results are corrent and they display to user
- I confirmed header,instructions,options,results, footer  are all readable by user and easy to understand
- I confirmed colors and fonts are easy to read and website is accessible by running lighthouse in chrome browser
![lighthouse](https://github.com/PeterSvk1/project2/blob/main/assets/readmePics/lighthouse.png)
- project is responsive and works on phones just fine

## Bugs
- __Solved Bugs__
 - When I deployed project to github using VScode I noticed pictures wont show up and css was broken too.
 - I used absolute paths by mistake.
 - I fixed it by removing / at the start.
 - correct:  href="assets/css/style.css"
 ## Validator testing
- __HTML__
- no errors were reported
![hmtl](https://github.com/PeterSvk1/project2/blob/main/assets/readmePics/htmlvali.png)
- __CSS__
- no errors were reported 
![hmtl](https://github.com/PeterSvk1/project2/blob/main/assets/readmePics/cssVali.png)
- __Java__
- no errors were reported only warning were shown
![hmtl](https://github.com/PeterSvk1/project2/blob/main/assets/readmePics/javaVali.png)
## Unfixed bogs
- No bugs left to fix

## Deployment
- This website was deployed to github pages using VScode. The steps are as follows:
- in the github repository, navigate to the settings page
- from the source section drop-down menu, select master branch 
- once the master branch has been selected, the page provided to the completed website will be generated.
- the live link can be found here https://petersvk1.github.io/project2/

## Credits