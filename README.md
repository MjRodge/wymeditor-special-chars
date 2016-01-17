# Wymeditor Special Characters Plugin

A plugin designed for the WYMeditor designed to allow easy insertion of special text characters
Built for WYMeditor version 1.0.0 found here: http://www.wymeditor.org/download/


***FEATURES***

Allows for easy insertion of characters that require keyboard shortcuts at cursor lo. Originally built to help a Welsh education institution adhere to its bilingual policy, the code is currently configured for "â ê î ô û ŵ ŷ Â Ê Î Ô Û Ŵ Ŷ" characters.

The plugin can be easily configured to use any text based characters.

A working example can be viewed here: http://mjrodgers.co.uk/wymeditor


***INSTALLATION*** 

- After configuring WYMeditor, copy the specialchars folders into the respective plugins and skins files of your installation.
- Insert addition script call in header tag of page you would like WYMeditor to appear on: 
```html
<script type="text/javascript" src="wymeditor/plugins/specialchars/jquery.wymeditor.specialchars.js"></script>
<script type="text/javascript">
jQuery(function() {
	var config = {
		skin: 'specialchars',
		postInit: function(wym) {
			var wc = wym.specialchars();
		}					
	};
    jQuery('.wymeditor').wymeditor(config);
});
</script>
```
- Initialise WYMeditor function where required in body:
```html
<form method="post" action="">
  <textarea class="wymeditor"></textarea>
  <input type="submit" class="wymupdate" />
</form>
```
- Characters can be changed in "letters" variable in file /plugins/specialchars/jquery.wymeditor.specialchars.js
