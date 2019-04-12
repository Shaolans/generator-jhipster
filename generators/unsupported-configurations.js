const path = require('path');
const chalk = require('chalk');

function isSupportedConfig($, dirname, subgenname) {

    const unsupportedConfig = require(path.resolve(dirname, './unsupportedConfigurations.json'));
    $.appConfigs.forEach(config => {
        Object.keys(unsupportedConfig).forEach(key => {
            if (unsupportedConfig[key].includes(config[key])) {
                $.log(chalk.red(`${chalk.bold('ERROR!')} The configuration not supported by the subgenerator ${subgenname}!`));
                $.log(chalk.red(`\tReason:\n\t\tapplication: ${config.baseName}\n\t\t${key}: ${config[key]}`));
                process.exit(1);
            }
        });
    });
} 

module.exports = {
    isSupportedConfig
};