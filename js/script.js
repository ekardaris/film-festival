$(function(){
	$('#social-stream').dcSocialStream({
		feeds: {
			twitter: {
				id: '/9927875,#designchemical,designchemical',
				thumb: true
			},
			facebook: {
				id: '157969574262873,Facebook Timeline/376995711728'
			},
			google: {
				id: '111470071138275408587'
			},
			delicious: {
				id: 'designchemical'
			},
			vimeo: {
				id: 'brad'
			},
			youtube: {
				id: 'wired'
			},
			pinterest: {
				id: 'jaffrey,designchemical/design-ideas'
			},
			flickr: {
				id: ''
			}
		},
		rotate: {
			delay: 0
		},
		style: {
			layout: 'modern',
			colour: 'dark'
		},
		twitterId: 'designchemical',
		control: false,
		center: true,
		filter: true,
		wall: true,
		cache: false,
		max: 'limit',
		limit: 10,
		iconPath: 'images/dcsns-dark/',
		imagePath: 'images/dcsns-dark/'
	});
});