hs.graphicsDir = 'highslide/graphics/';
			hs.align = 'center';
			hs.transitions = ['expand', 'crossfade'];
			hs.fadeInOut = true;
			hs.outlineType = 'rounded-white';
			hs.headingEval = 'this.a.title';
			hs.numberPosition = 'heading';
			hs.useBox = true;
			hs.width = 600;
			hs.height = 400;
			hs.showCredits = false;
			hs.dimmingOpacity = 0.8;

			// Add the slideshow providing the controlbar and the thumbstrip
			hs.addSlideshow({
				//slideshowGroup: 'group1',
				interval: 5000,
				repeat: false,
				useControls: true,
				fixedControls: 'fit',
				overlayOptions: {
					position: 'top right',
					offsetX: 200,
					offsetY: -65
				},
				thumbstrip: {
					position: 'rightpanel',
					mode: 'float',
				relativeTo: 'expander',
				width: '210px'
				}
			});
			/*
			// Make all images animate to the one visible thumbnail
			var miniGalleryOptions1 = {
				thumbnailId: 'thumb1'
			}
			*/