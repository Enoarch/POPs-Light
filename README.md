# POPs-Light
 
A light version of POPs Jquery plugin  
You can use this plugin to create custom popups 
## Usage

To use it, it's easy : 
  In the HTML code :
  ```html
    <div id='launcher'> Click me to Show popup</div>
    <div id='popup'> Hey it's a popup</div>
  ```
  
  And in the js file : 
```js
$('#popup').myPOP({  
  "title":"POPs Light", //title of the popup  
  "eventObj":$("#launcher"),//Trigger to show popup  
  "color1":"#ABEBC6",//Color of popups background  
  "color2":"#1D8348", //Color of popups'header
  "width":"800px",  
  "height":"300px"
});
```
