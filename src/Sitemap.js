/** @format */

require('babel-register')({
	presets: ['es2015', 'react'],
})

const router = require('./Router').default
const Sitemap = require('react-router-sitemap').default

function generateSitemap() {
	return new Sitemap(router).build('https://koushikpuppala.live').save('./public/sitemap.xml')
}

generateSitemap()
