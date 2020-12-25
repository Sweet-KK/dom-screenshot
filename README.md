# dom-screenshot(未发布)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Sweet-KK/dom-screenshot/pulls)


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Install](#install)
- [Usage](#usage)
- [Doc](#doc)
- [License](#license)

## Introduction

整合dom-to-image及html2canvas，开箱即用的dom截图组件。

[⬆ Back to Top](#table-of-contents)

## Features
- 整合dom-to-image及html2canvas，统一了一些参数去解决图片模糊，不加载等问题
- 判断设备类型使用合适的方法，减少遇到兼容性问题无法运行而造成困扰，也可传入useHtml2canvas去自主控制

[⬆ Back to Top](#table-of-contents)

## Install

```
npm install dom-screenshot
```

[⬆ Back to Top](#table-of-contents)

## Usage

```
<template>
  <div class="demo">
    <dom-screenshot is-save ref="shotDom">
      <h1>Hellow word!</h1>
    </dom-screenshot>

    <button @click="onClick">截图-shot</button>
  </div>
</template>

<script>
import DomScreenshot from 'dom-screenshot'
export default {
  components: { DomScreenshot },
  methods: {
    onClick () {
      this.$refs.shotDom.shot()
    }
  }
}
</script>
```

[⬆ Back to Top](#table-of-contents)

## doc

- [doc](https://Sweet-KK.github.io/dom-screenshot/)

[⬆ Back to Top](#table-of-contents)

## License

[MIT](./LICENSE)

[⬆ Back to Top](#table-of-contents)
