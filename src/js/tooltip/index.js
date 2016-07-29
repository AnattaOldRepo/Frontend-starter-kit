var $ = require("jquery");

$(function() {
    'use strict';
    $('a').hover(function(e){ // Hover event
 
    var titleText = $(this).attr('title');
    $(this)
      .data('tiptext', titleText)
      .removeAttr('title');
 
  $('<p class="tooltip"></p>')
    .text(titleText)
    .appendTo('body')
    .css('top', (e.pageY - 10) + 'px')
    .css('left', (e.pageX + 20) + 'px')
    .fadeIn('slow');
 
  }, function(){ // Hover off event
 
    $(this).attr('title', $(this).data('tiptext'));
    $('.tooltip').remove();
 
  }).mousemove(function(e){ // Mouse move event
 
    $('.tooltip')
      .css('top', (e.pageY - 10) + 'px')
      .css('left', (e.pageX + 20) + 'px');
 
 });

});
