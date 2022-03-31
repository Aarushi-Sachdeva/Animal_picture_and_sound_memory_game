# Pre-work - Memory Game: A trip to the Zoo!

"A trip to the zoo!" is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Aarushi Sachdeva

Time spent: 6 hours spent in total

Link to project: (https://glitch.com/edit/#!/a-trip-to-the-zoo)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess



The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

https://user-images.githubusercontent.com/101431006/160949594-dd709de1-6c79-44b6-a1bb-abaac5981eb6.mp4


https://user-images.githubusercontent.com/101431006/160948910-9e5e30ae-6839-4876-9d1b-1e5728d28d2e.mp4

https://user-images.githubusercontent.com/101431006/160949557-a696659c-6e51-4789-9e70-70f38882a4ea.mp4



## Reflection Questions

**1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.**

- W3 schools' and GeeksforGeeks documentation on HTML,CSS and java script to figure out how to embedd images and use audio files
- Mdn web docs JavaScript math library documentatioon to help me understand how to use .random() and .floor() to generate a random sequence
- thesitewizard.com to learn how to change the visibility of images


**2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)**

The most challenging part of the pre-work was “sprucing up the buttons”. It took me time to understand how tags work in HTML and how they can then be used as selectors in the CSS code. I would say most of the difficulty came from trying to understand the syntax of HTML and CSS, both of which are completely new to me. 

Before I started jazzing up the buttons, I tried to make sure I understood what was being asked of me. When a button is clicked, we had to make sure it reveals an image (inside the bounds of the button) as well as trigger an audio of our choice. I quickly realised that as long as I can implement these features on one button, it will be easy to recreate for the other buttons. Therefore, I only meddled with the code of one button when trying to figure out the correct implementation. 

To learn more about the syntax of HTML and CSS I searched for their documentation online. From my findings, I could create stand alone <img> tags or embed the image into the button, and to do the second I needed to do a nested tag. So inside each <button> tag I added the <img> tag. It wasn’t too hard to find the syntax to embed and image into a button. The part that took me longer to figure out was how to set the rules for the image in CSS. I understood that you can include selectors that target an ID, an element/tag or a class,  from the instructions given to us in the compulsory part of the pre-work. However, now I was dealing with an element inside and element, so my first question was: how can I go about setting rules for just the image? I realised that the best way to do this was to create and ID for each of the button images (similar to having the button ID). I used this to set the initial visibility to hidden.

The next step was revealing the image when the button is being clicked. Going of instructions giving in the basic implementation of the game, we were able to change the colour for the button when it was “active” and in the lit class. I wanted to keep those background colours from before, but also make the image visible only when the button was in this state. I looked online on how to set rules for an image only when the button is in this state. I found out that the way to do this was to use the same selectors #button1:active and #button1.lit with the tag name img after each.

Although in retrospect this seems like an easy enough task to do, the process involved a lot of trial and error as well as knowing what kind of google search to do. I think at the end of implementing this feature I have a deeper understanding of how to isolate elements from HTML and write rules for them.


  
**3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)** 
  
After developing this website, I realised that if I were to open it up on a phone screen it would look very differnt from how it does on a computer screen.So, my first question is: how do web developers go about designing websites that can be viewed on multiple different screen sizes, while ensuring that all the content and asthetics
are preserved?

After developing this website, I realised that if I were to open it up on a phone screen it would look very different to how it does on a computer screen. So, my first question is: how do web developers go about designing websites that can be viewed on multiple different screen sizes, while ensuring that all the content and aesthetics are preserved?

My next question pertains to testing methods. When creating this website, each time I implemented a new feature I would include console comments and manually play the game (accounting for both, winning and loosing scenarios) to see whether the feature was correctly implemented. This was a time consuming testing method. This lead me to my next question: How do web developers test their websites? Do they use unit tests? Or can they write code that takes control of the cursor and trackpad and navigates all features of the website? 

This website is relatively simplistic, but I imagine that a large scale website would have lots of features (buttons, links between pages, links to other pages, text, images, audio etc.) When you click onto a website, are all its features loaded in one go or as and when the user asks for them? 


**4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)**
  
When adding the optional features to my game, I had a vision of turning the light and sound memory game into an educational tool for children. Everything I have implemented until now, including the images, audio, colour scheme, and text are geared towards this audience. However, I think there are additional features that can make this game more accessible and educational for younger users.

1) Add a “play next clue” button: When the user is entering their guess, I would like the audio for each button to play for the entirity of its length instead of playing until “onmouseup”. This requires changing the wait time between successive clues. There are two ways to implement this, hardcode the time for each guess depending on the round, or the more general, and I believe appropriate solution, would be to add a “play next clue” button
- This button would pop up once the game has started (next to the start/stop button) 
- If user clicks before entering guess for previous clue, it will remind the user to enter their guess first. Else it will play the next clue.
- Hide button once the last clue is played

I would also add more categories to the game. 
- This would mean changing the landing page, and the title of the website
    -New landing page would include buttons (with a design/name that indicates the category) that are linked to pages with the respective the games
- Since I want to make this an educational website for kids, I would include categories such as alphabets, numbers, fruit, colours etc.
- The general rules of the game for each category would remain the same but each would involve implementing different number of buttons as well as   different types of images and audio. If possible it would also be interesting to implement it in a way that, if we take the colour catagory for   example, the colour combination of the buttons change each time you play the game. This way the children playing the game will be introduced to
  a larger variety of colours. With the number category, for example, the player could change the range of numbers they wan't to be tested on.


## Interview Recording URL Link

[My 5-minute Interview Recording](https://drive.google.com/file/d/1S6J8jFJzu73F6vQLQsRvDaO4GNttsseT/view?usp=sharing)


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
