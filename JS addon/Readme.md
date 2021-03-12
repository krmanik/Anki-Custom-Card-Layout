# JS Addon for AnkiDroid Using JS-API

## Install
### Progress bar
1. Download [_js_addon_progress_bar.js](https://gist.github.com/infinyte7/988a29634bbf661df87f3592d750558e/archive/874548bbb90edbcf4da01d991444c8d80ad27ec2.zip) scripts.
2. Extract the downloaded zip file and copy ```_js_addon_progress_bar.js``` and paste it inside AnkiDroid/collection.media folder
4. Add this single line to front and back side of cards
<script src="_js_addon_progress_bar.js"></script>
Note: If backside of card template contains
{{FrontSide}}
Then don't add the above line.
<script src="_js_addon_progress_bar.js"></script>
5. Turn on fullscreen
6. Restart reviewing

### Button and card count
1. Download [_js_addon_button_cardcount.zip](https://github.com/infinyte7/Anki-Custom-Card-Layout/releases/download/v1.0/_js_addon_button_cardcount.zip)
2. Extract and copy ```_js_addon_button_front.js``` , ```_js_addon_button_back.js``` and ```_js_addon_button_style.css``` 
3. Paste it inside AnkiDroid/collection.media folder
4. Add following to front side of card
```
<script>
    var showJsAddonButton = true;
</script>
<script src="_js_addon_button_front.js"></script>
```
5. Add following to back side of card
```
<script>
    var showJsAddonButton = true;
</script>
<script src="_js_addon_button_back.js"></script>
```
6. Add following to styling of card
```
@import url("_js_addon_buttons_style.css");
```
7. Save and restart review to view changes