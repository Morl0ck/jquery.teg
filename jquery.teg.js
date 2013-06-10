/* Requires jQuery

.center()
.modalFadeOut()
.modalFadeIn()


*/

$.fn.center = function () {
	// local variables
	var $this = $(this),
		tW    = $this.width(),
		tH    = $this.height(),
		wW    = $(window).width(),
		wH    = $(window).height();

	// center the object
	$this.css({
		'position' : 'absolute',
		'top'      : wH/2 - tH/2,
		'left'     : wW/2 - tW/2
	});

	// allow for chaining
	return this;
}

$.fn.modalFadeOut = function () {
	// local variables
	var $this = $(this),
		tW    = $this.width(),
		tH    = $this.height(),
		tTop  = $this.css('top'),
		tLeft = $this.css('left');

	// check that the object is visible first
	if ($this.is(':visible')) {
		$this.animate({
			// animate it
			'opacity' : 0,
			'height'  : 0,
			'width'   : 0,
			'top'     : '+=' + tH/2,
			'left'    : '+=' + tW/2
		}, function () {
			$this.css({
				'height' : tH,
				'width'  : tW,
				'top'    : tTop/2,
				'left'   : tLeft/2
			}).hide();
		});
	}

	// allow for chaining
	return this;
}

$.fn.modalFadeIn = function () {
	// local variables
	var $this = $(this),
		tW    = $this.width(),
		tH    = $this.height();

	if (!$this.is(':visible')) {
		$this.show().css({
			'width'  : 0,
			'height' : 0
		}).animate({
			'opacity' : 1,
			'height'  : tH,
			'width'   : tW,
			'top'     : '-=' + tH/2,
			'left'    : '-=' + tW/2
		});
	}

	// allow for chaining
	return this;
}