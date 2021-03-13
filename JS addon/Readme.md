# JS Addon for AnkiDroid Using JS-API

## Install
### 1. Progress bar addon
1. Download [_js_addon_progress_bar.js](https://gist.github.com/infinyte7/988a29634bbf661df87f3592d750558e/archive/874548bbb90edbcf4da01d991444c8d80ad27ec2.zip) scripts.
2. Extract the downloaded zip file and copy ```_js_addon_progress_bar.js``` and paste it inside AnkiDroid/collection.media folder
4. Add this single line to front and back side of cards
```html
<script src="_js_addon_progress_bar.js"></script>
```
Note: If backside of card template contains
{{FrontSide}}
Then don't add the above line.
```html
<script src="_js_addon_progress_bar.js"></script>
```
5. Turn on fullscreen
6. Restart reviewing

<img src="https://user-images.githubusercontent.com/12841290/111020462-034ace80-8401-11eb-8846-cfb78f57e6ca.jpg" height=400></img>

### 2. Button and card count addon
1. Download [_js_addon_button_cardcount.zip](https://github.com/infinyte7/Anki-Custom-Card-Layout/releases/download/v1.0/_js_addon_button_cardcount.zip)
2. Extract and copy ```_js_addon_button_front.js``` , ```_js_addon_button_back.js``` and ```_js_addon_button_style.css``` 
3. Paste it inside AnkiDroid/collection.media folder
4. Add following to front side of card
```html
<script>
    var showJsAddonButton = true;
</script>
<script src="_js_addon_button_front.js"></script>
```
5. Add following to back side of card
```html
<script>
    var showJsAddonButton = true;
</script>
<script src="_js_addon_button_back.js"></script>
```
6. Add following to styling of card
```css
@import url("_js_addon_buttons_style.css");
```
7. Save and restart review to view changes

<img src="https://user-images.githubusercontent.com/12841290/111020320-fe394f80-83ff-11eb-9d6f-9a21a8b32695.jpg" height=400></img>
<img src="https://user-images.githubusercontent.com/12841290/111020321-00031300-8400-11eb-981f-75538aa92ef2.jpg" height=400></img>
