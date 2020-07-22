# Anki-Custom-Card-Layout

Use AnkiDroid JavaScript functions to get cards details and design card like below. Turn on fullscreen and start reviewing in your custom Anki design.

![demo](https://github.com/infinyte7/Anki-Custom-Card-Layout/blob/master/images/anki_js_demo_.gif?raw=true)

# To be updated with latest PR after merged to [Anki-Android](https://github.com/ankidroid/Anki-Android/pulls/infinyte7)

To learn more, view these.
[#6306](https://github.com/ankidroid/Anki-Android/issues/6306)
<br>[#6377](https://github.com/ankidroid/Anki-Android/pull/6377) 
<br>[#6307](https://github.com/ankidroid/Anki-Android/pull/6307) 
<br>[#6388](https://github.com/ankidroid/Anki-Android/pull/6388) 
<br>[#6393](https://github.com/ankidroid/Anki-Android/pull/6393) 

# For more visit
[AnkiDroid Javascript API](https://github.com/ankidroid/Anki-Android/wiki/AnkiDroid-Javascript-API)

### Usage
1. Turn on Gestures in AnkiDroid 
2. Map all Swipe getures to No Action
3. Turn on Full Screen
4. Now Open the Sample Deck
5. Uncomment ```init();``` in card templates

## Following values is available in card templates
```javascript
 <script>
        console.log(AnkiDroidJS.ankiGetNewCardCount());
        console.log(AnkiDroidJS.ankiGetLrnCardCount());
        console.log(AnkiDroidJS.ankiGetRevCardCount());
        console.log(AnkiDroidJS.ankiGetCardMark());
        console.log(AnkiDroidJS.ankiGetCardFlag());
        console.log(AnkiDroidJS.ankiGetETA());
 </script>
```


### Card Files
[Front Side](https://github.com/infinyte7/Anki-Custom-Card-Layout/blob/master/front.html)
<br>[Back Side](https://github.com/infinyte7/Anki-Custom-Card-Layout/blob/master/back.html)
<br>[Card CSS](https://github.com/infinyte7/Anki-Custom-Card-Layout/blob/master/card.css)
<br>
<b> Note : Drawing stroke on screen have changed position. (To be corrected).
[Sample Deck](https://github.com/infinyte7/Anki-Custom-Card-Layout/blob/master/HSK1.apkg)

### Note
1. Progress bar can be implemented by getting total card count.
```
total = AnkiDroidJS.ankiGetNewCardCount() + AnkiDroidJS.ankiGetLrnCardCount() + AnkiDroidJS.ankiGetRevCardCount();
``` 
2. To be implemented:- When three button present then hide fourth button.

### Resources
https://developer.android.com/reference/android/webkit/JavascriptInterface
<br>https://stackoverflow.com/questions/21173888/how-to-pass-non-primitive-object-from-java-to-js-by-android-addjavascriptinterfa
<br>https://stackoverflow.com/questions/175739/built-in-way-in-javascript-to-check-if-a-string-is-a-valid-number
<br>https://grid.layoutit.com/
<br>https://codepen.io/
<br>https://www.w3schools.com/
