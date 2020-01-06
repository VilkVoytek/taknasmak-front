[![node][node]][node-url] [![pwa-studio][pwa-studio]][pwa-studio-url]

[node]: https://img.shields.io/badge/Node-%3E%3D10.14.1-brightgreen.svg
[node-url]: https://nodejs.org

[pwa-studio]: https://img.shields.io/badge/pwa--studio-v4.0.0-brightgreen.svg
[pwa-studio-url]: https://github.com/magento-research/pwa-studio

## Prerequisites
Make sure you have the following:

- NodeJS >= 10.14.1 LTS (NodeJS 11+ can cause problems)

- Yarn >= 1.13.0

- Python 2.7 and build tools, [see the Installation instructions on node-gyp](https://github.com/nodejs/node-gyp#installation) for your platform.

- unix based OS for example MacOS or Linux

## Quick setup

Note: only run commands from the root dir

**step: 1**
```
git clone https://github.com/VilkVoytek/taknasmak-front.git
```

**step: 2**
```
cd taknasmak-front
```

**step: 3** (this runs all necessary package.json commands back to back)
```
yarn run setup
```

**step: 4**
```
yarn run watch:taknasmak
```

## Credits

* Magento for creating [PWA Studio](https://github.com/magento-research/pwa-studio)
