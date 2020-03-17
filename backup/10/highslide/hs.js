hs.graphicsDir = 'highslide/graphics/';
hs.align = 'center';
hs.transitions = ['expand', 'crossfade'];
hs.fadeInOut = true;
hs.dimmingOpacity = 0.8;
hs.outlineType = 'rounded-white';
hs.captionEval = 'this.thumb.alt';
hs.marginBottom = 105; // make room for the thumbstrip and the controls
hs.numberPosition = 'caption';

// Add the slideshow providing the controlbar and the thumbstrip
hs.addSlideshow({
	//slideshowGroup: 'group1',
	interval: 5000,
	repeat: false,
	useControls: true,
	overlayOptions: {
		className: 'text-controls',
		position: 'bottom center',
		relativeTo: 'viewport',
		offsetY: -60
	},
	thumbstrip: {
		position: 'bottom center',
		mode: 'horizontal',
		relativeTo: 'viewport'
	}
});

// gallery config object
var config1 = {
    slideshowGroup: 'album01',
    autoplay: false,
    transitions: ['expand', 'crossfade']
};

// gallery config object
var config2 = {
    slideshowGroup: 'album02',
    autoplay: false,
    transitions: ['expand', 'crossfade']
};

// gallery config object
var config3 = {
    slideshowGroup: 'group3',
    autoplay: false,
    transitions: ['expand', 'crossfade']
};

// gallery config object
var config4 = {
    slideshowGroup: 'group4',
    autoplay: false,
    transitions: ['expand', 'crossfade']
};

