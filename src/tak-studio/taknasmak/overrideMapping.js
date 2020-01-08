const path = require('path');

const veniaLib = path.resolve(`${process.cwd()}/../../pwa-studio/packages/venia-ui/lib`);
const peregrineLib = path.resolve(process.cwd() + '/../../pwa-studio/packages/peregrine/lib');

module.exports = componentOverride = {
    [`${veniaLib}/components/Main`]: 'src/lib/components/Main',
    [`${veniaLib}/components/Footer`]: 'src/lib/components/Footer',
    [`${veniaLib}/RootComponents/CMS`]: 'src/lib/RootComponents/CMS',
};

////[`${veniaLib}/components/App`]: 'src/lib/components/App',