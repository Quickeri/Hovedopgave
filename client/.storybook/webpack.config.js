const path = require('path');
const custom = require('../webpack/dev.config');

module.exports = async ({ config, mode }) => {
    return {
        ...config,
        module: {
            ...config.module,
            rules: custom.module.rules
        },
        resolve: {
            ...config.resolve,
            extensions: [
                ...new Set(
                    config.resolve.extensions.concat(
                        custom.resolve.extensions
                    )
                )
            ],
            alias: {
                ...config.resolve.alias,
                ...custom.resolve.alias
            }
        }
    };
};
