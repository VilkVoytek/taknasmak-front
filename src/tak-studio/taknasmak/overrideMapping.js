const path = require('path');

const veniaUiLib = path.resolve(`${process.cwd()}/../../pwa-studio/packages/venia-ui/lib`);
const veniaConcept = path.resolve(`${process.cwd()}/../../pwa-studio/packages/venia-concept`);
const peregrineLib = path.resolve(process.cwd() + '/../../pwa-studio/packages/peregrine/lib');

module.exports = componentOverride = {
    [`${veniaUiLib}/components/Main`]: 'src/lib/components/Main',
    [`${veniaUiLib}/components/Footer`]: 'src/lib/components/Footer',
    [`${veniaUiLib}/components/Header`]: 'src/lib/components/Header',
    [`${veniaUiLib}/RootComponents/CMS`]: 'src/lib/RootComponents/CMS',
};