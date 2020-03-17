hs.graphicsDir = 'highslide/graphics/';
hs.align = 'center';
hs.transitions = ['expand', 'crossfade'];
hs.fadeInOut = true;
hs.dimmingOpacity = 0.9;
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
var config1 = {
    slideshowGroup: 'group1',
    autoplay: false,
    transitions: ['expand', 'crossfade']
};

// gallery config object
var config2 = {
    slideshowGroup: 'group2',
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

// gallery config object
var config5 = {
    slideshowGroup: 'group5',
    autoplay: false,
    transitions: ['expand', 'crossfade']
};

// gallery config object
var config6 = {
    slideshowGroup: 'group6',
    autoplay: false,
    transitions: ['expand', 'crossfade']
};

// gallery config object
var config7 = {
    slideshowGroup: 'group7',
    autoplay: false,
    transitions: ['expand', 'crossfade']
};

// gallery config object
var config8 = {
    slideshowGroup: 'group8',
    autoplay: false,
    transitions: ['expand', 'crossfade']
};

// gallery config object
var config9 = {
    slideshowGroup: 'group9',
    autoplay: false,
    transitions: ['expand', 'crossfade']
};