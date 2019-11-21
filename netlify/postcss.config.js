const cssnano = require('cssnano')
const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './netlify/index.html'
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        cssnano({
            preset: 'default'
        }),
        ...process.env.NODE_ENV === 'production'
            ? [purgecss]
            : []
    ]
}