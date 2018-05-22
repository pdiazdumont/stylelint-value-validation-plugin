const stylelint = require('stylelint');

stylelint.lint({
    files: './test.css',
    formatter: 'string'
}).then((result) => {
    console.log(result.output);
});