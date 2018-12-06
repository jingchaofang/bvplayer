## babel

[babel](https://babeljs.io/)

[babel v7](https://babeljs.io/blog/2018/08/27/7.0.0)

[babel usage](https://babeljs.io/docs/en/next/usage)

[babel plugins](https://babeljs.io/docs/en/plugins)

[babel-polyfill](https://babeljs.io/docs/en/babel-polyfill)

[babel-preset-flow](https://babeljs.io/docs/en/babel-preset-flow)

[babelconfigjs](https://babeljs.io/docs/en/next/babelconfigjs)

[How to use Babel with your tool of choice](https://babeljs.io/setup.html)

## es6


## 起步

npm init
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
npx babel src --out-dir lib

> You can use the npm package runner that comes with npm@5.2.0 to shorten that command by replacing ./node_modules/.bin/babel with npx babel

npm install --save-dev @babel/preset-flow  转换去掉类型注释
npm install --save-dev flow-bin
npx flow init 生成.flowconfig
npx flow (npx flow status)
npx flow stop
npx babel src --out-dir lib

##


## flow静态类型检查

类型推断
类型注释

[flow官网](https://flow.org/en/)

[flow开源仓库](https://github.com/facebook/flow/)

[flow usage doc](https://flow.org/en/docs/usage/)

[.flowconfig](https://flow.org/en/docs/config/)

使用flow的有vue、[react](https://github.com/facebook/react)

[sublime 插件（高亮和语法检查）](https://flow.org/en/docs/editors/sublime-text/)

## 需要整理到博客的问题

### curl

[Mac的curl命令](https://www.jianshu.com/p/9af6cd6901b9)

[Mac下更新curl——使用Homebrew](https://www.jianshu.com/p/b3c12c1cb0af)

### https://www.npmjs.com/package/n 切换node版本

npm ERR! code MODULE_NOT_FOUND
npm ERR! Cannot find module 'hawk'

上面错误通过重新安装npm解决

```
curl -0 -L https://npmjs.com/install.sh | sudo sh
或
curl -0 -L https://npmjs.com/install.sh > npm-install.sh
sudo sh npm.sh
```