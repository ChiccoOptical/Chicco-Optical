module.exports = {
	purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			height:{
				'screen/2':'50vh',
			},
			fontFamily:{
				lora:'Lora',
				rubik: 'Rubik',
			},

		},
	},
	variants: {
		extend: {
			opacity:['disabled'],
			scale:['active']
		},
	},
	plugins: [],
}
