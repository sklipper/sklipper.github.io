# sklipper.github.io

![version](https://img.shields.io/badge/version-0.1.5-teal.svg)
![license](https://img.shields.io/badge/license-MIT-blue.svg)

- [https://sklipper.com](https://sklipper.com)
- [https://sklipper.github.io](https://sklipper.github.io)

## Deployment

```bash
$ npm run build
$ npm run deploy
$ git add .
$ git commit -m 'updated'
$ git push
$ git subtree split --prefix dist -b myblog
$ git push origin myblog:gh-pages --force
$ git branch -D myblog
```