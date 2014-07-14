

var i = 0;
$(document).ready
(
	function()
	{
		$('#slider-show-image_3').css('background-image','url(image_3.jpg)');
		
		$('#slider-show-image_2').css('background-image','url(image_2.jpg)');
		$('#slider-show-image_1').css('background-image','url(image_1.jpg)');
		$('#slider-show-image_3').hide();
		$('#slider-show-image_2').hide();
		$('#caption-image-container_2').hide();
		$('#caption-image-container_3').hide();
		$('#button_2').click(function()
		{
			clearInterval(timer);
			action('right');
			timer = setInterval(function(){action('right')},4000);
		}); 
		$('#button_1').click(function()
		{
			clearInterval(timer);
			action('left');
			timer = setInterval(function(){action('right')},4000);
		}); 
	}
);


var timer = setInterval(function(){action('right')},4000);


function action(direction)
{
	switch(i)
	{
		case 0:
				$('#caption-image-container_1').hide('slide',{direction:'left'},function(){slideUpDown(direction)});
				if (direction == 'right')	
					i++;
				else
					i = 2;
				break;
		case 1:
				$('#caption-image-container_2').hide('slide',{direction:'right'},function(){slideLeftRight(direction)});
				if (direction == 'right')
					i++;
				else
					i = 0;
				break;
		case 2:
				$('#caption-image-container_3').hide('slide',{direction:'up'},function(){slideFadeInFadeOut(direction)});
				if (direction == 'right')
					i = 0;
				else
					i = 1;
				break;
	}
}

function slideUpDown(direction)
{
	switch(direction)
	{
		case 'right':
						$('#slider-show-image_1').hide('slide',{direction:'up'});
						$('#slider-show-image_2').show('slide',{direction:'down'},function(){$('#caption-image-container_2').show('slide',{direction:'right'})});
						break;
		case 'left':
						$('#slider-show-image_1').hide('fade',1000);
						$('#slider-show-image_3').show('fade',1000,function(){$('#caption-image-container_3').show('slide',{direction:'left'})});
						break;
	}
}

function slideLeftRight(direction)
{
	switch(direction)
	{
		case 'right':
						$('#slider-show-image_2').hide('slide',{direction:'right'});
						$('#slider-show-image_3').show('slide',{direction:'left'},function(){$('#caption-image-container_3').show('slide',{direction:'up'})});
						break;
		case 'left':
						$('#slider-show-image_2').hide('slide',{direction:'down'});
						$('#slider-show-image_1').show('slide',{direction:'up'},function(){$('#caption-image-container_1').show('slide',{direction:'left'})});
						break;
	}
}

function slideFadeInFadeOut(direction)
{
	switch(direction)
	{
		case 'right':
						$('#slider-show-image_3').hide('fade',1000);
						$('#slider-show-image_1').show('fade',1000,function(){$('#caption-image-container_1').show('slide',{direction:'left'})});
						break;
		case 'left':
						$('#slider-show-image_3').hide('slide',{direction:'left'});
						$('#slider-show-image_2').show('slide',{direction:'right'},function(){$('#caption-image-container_2').show('slide',{direction:'right'})});
						break;
	}
}