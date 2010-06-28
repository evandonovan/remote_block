// <iframe> dynamic resizing JS
// filename: remote_block/js/remote_block_child.js
// Based on code from http://benalman.com/code/projects/jquery-postmessage/examples/iframe/
$(function(){
  // Gets the parent page URL as it was passed in, for browsers that don't support
  // window.postMessage (this URL could be hard-coded).
  var parent_url = decodeURIComponent( document.location.hash.replace( /^#/, '' ) ),
    link;
  
  // The first param is serialized using $.param (if not a string) and passed to the
  // parent window. If window.postMessage exists, the param is passed using that,
  // otherwise it is passed in the location hash (that's why parent_url is required).
  // The second param is the targetOrigin.
  function setHeight() {
    $.postMessage({ if_height: $('body').outerHeight( true ) }, parent_url, parent );
  };
  
  // Now that the DOM has been set up (and the height should be set) invokes setHeight.
  setHeight();
	
  // Binds to Quicktabs list items so that iframe resizes when they are clicked
  $('a.qt_tab').click(function() { setHeight(); });
  
});
