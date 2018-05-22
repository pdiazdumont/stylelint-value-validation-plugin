const stylelint = require('stylelint');
const dictionary = require('./definitions/values.json');
const ruleName = 'pdd/valid-value';
const messages = stylelint.utils.ruleMessages(ruleName, {
    expected: (property, value) => `"${value}" is not a valid value for "${property}"`,
    color: (property, value) => `"${value}" is not a valid color value for "${property}"`
});
const utils = require('./utils.js');

module.exports = stylelint.createPlugin(ruleName, (options) => (root, result) => {
    const validateColorProperty = (decl) => {
        const property = decl.prop;
        const value = decl.value;
        const definition = dictionary[property];

        if (definition !== undefined && definition.values.indexOf(value) === -1) {
            if (definition["special-values"] !== undefined) {
                for (var specialValue of definition["special-values"]) {
                    switch (specialValue) {
                        case "color":
                            if (!utils.isColor(value)) {
                                stylelint.utils.report({
                                    ruleName: ruleName,
                                    result: result,
                                    node: decl,
                                    message: messages.color(property, value)
                                });
                            }
                        break;
                        case "length":
                            if (!utils.isLength(value)) {
                                stylelint.utils.report({
                                    ruleName: ruleName,
                                    result: result,
                                    node: decl,
                                    message: messages.expected(property, value)
                                });
                            }
                        break;
                        case "number":
                            if (!utils.isNumber(value)) {
                                stylelint.utils.report({
                                    ruleName: ruleName,
                                    result: result,
                                    node: decl,
                                    message: messages.expected(property, value)
                                });
                            }
                        break;
                    }
                }
            } else {
                stylelint.utils.report({
                    ruleName: ruleName,
                    result: result,
                    node: decl,
                    message: messages.expected(property, value)
                });
            }
        }
    };
    root.walkDecls(validateColorProperty);
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;
