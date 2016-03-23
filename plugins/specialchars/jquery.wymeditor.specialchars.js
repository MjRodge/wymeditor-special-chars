/**
    WYMeditor.specialchars
    ====================
    A specialchars plugin.
	For more information about plugins see https://github.com/wymeditor/wymeditor/wiki/Writing-plugins

 */
WYMeditor.editor.prototype.specialchars = function() {
	var wym = this;
	$box = jQuery(this._box);

	//construct the toolboxs html
	html = jQuery('<div class="wym_section wym_specialchars wym_dropdown">');
	html.append('<h2>Special Characters<span>&nbsp;&gt;</span></h2>');
	ul = jQuery('<ul>');
	
	var letters = {
				"lower_a": "â",
				"lower_e": "ê",
				"lower_i": "î",
				"lower_o": "ô",
				"lower_u": "û",
				"lower_w": "ŵ",
				"lower_y": "ŷ",
				"upper_a": "Â",
				"upper_e": "Ê",
				"upper_i": "Î",
				"upper_o": "Ô",
				"upper_u": "Û",
				"upper_w": "Ŵ",
				"upper_y": "Ŷ"	
			};
			
	jQuery.each(letters, function(key, value) {
		className = 'wym_tools_'+key;
		a         = jQuery('<a name="Insert ' + value + '" title="Insert ' + value + '" href="#">' + value + '</a>');
		li        = jQuery('<li>');
		li.addClass(className);
		li.append(a);
		//add event listener to the list element
		li.bind('click', function() {
			wym.insert(value); 
		});
		ul.append(li);
	});
	html.append(ul);

	//add the button to the tools box
	$box.find(".wym_area_top").append(html);
};
