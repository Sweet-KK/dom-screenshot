<template>
  <div ref="targetDom" class="dom-screenshot" v-bind="$attrs" v-on="$listeners">
    <!-- @slot 需要生成截图的内容 -->
    <slot>
      Hellow Word!
    </slot>
  </div>
</template>

<script>
import { saveAs } from 'file-saver'
const domtoimage = require('./dom-to-image/dist/dom-to-image.min.js')
const html2canvas = require('html2canvas')
const typeMapping = {
  jpg: { fn: 'toJpeg', suffix: 'jpg' },
  png: { fn: 'toPng', suffix: 'png' },
  blob: { fn: 'toBlob', suffix: 'png' }
}
export default {
  name: 'DomScreenshot',
  props: {
    /**
     * 截图前的钩子
     */
    beforeShot: {
      type: Function,
      default: null
    },
    /**
     * 启用isSave保存图片时的文件命名
     */
    saveName: {
      type: String,
      default: '生成图片'
    },
    /**
     * 图片缩放倍数
     */
    scale: {
      type: Number,
      default: 1
    },
    /**
     * distType为jpg时输出的图片质量
     */
    quality: {
      type: Number,
      default: 0.9
    },
    /**
     * 截图后是否直接保存图片，移动端可调用shot().then进行处理（如微信、ios）
     */
    isSave: {
      type: Boolean,
      default: false
    },
    /**
     * 输出类型，有jpg/png/blob
     */
    distType: {
      type: String,
      default: 'jpg'
    },
    /**
     * 请求图片时添加时间戳参数，禁用缓存
     */
    cacheBust: {
      type: Boolean,
      default: false
    },
    /**
     * 截图容器的背景色
     */
    bgColor: {
      type: [String, null],
      default: null
    },
    /**
     * dom-to-image和html2canvas的其他参数，相同选项会被暴露出来的参数覆盖
     */
    options: {
      type: Object,
      default: () => ({})
    },
    /**
     * 默认使用dom-to-image，在ios及ie下使用html2canvas
     * 由于图片跨域问题，部分浏览器在默认处理下可能无法截图，此参数true则使用html2canvas，false则使用dom-to-image
     */
    useHtml2canvas: Boolean
  },
  data () {
    return {
      useAnother: false
    }
  },
  mounted () {
    if (this.useHtml2canvas === void 0) {
      this.useAnother =
        /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ||
        navigator.userAgent.toLowerCase().includes('msie') ||
        navigator.userAgent.toLowerCase().includes('trident')
    } else {
      this.useAnother = this.useHtml2canvas
    }
  },
  methods: {
    getOption (el) {
      if (this.useAnother) {
        const offset = this.getOffset(el)
        return {
          allowTaint: true,
          useCORS: true,
          x: offset.left,
          y: offset.top,
          width: offset.width,
          height: offset.height,
          ...this.options,
          scale: this.scale,
          backgroundColor: this.bgColor
        }
      } else {
        return {
          width: el.offsetWidth,
          height: el.offsetHeight,
          imagePlaceholder:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAACpUlEQVR4Xu3VsRHDMAwEQbH/BtmN3YDl4NJf5Qiw4I3Ovffz+AgQ+ClwBOJlEHgXEIjXQeCPgEA8DwIC8QYINAF/kOZmakRAICOHtmYTEEhzMzUiIJCRQ1uzCQikuZkaERDIyKGt2QQE0txMjQgIZOTQ1mwCAmlupkYEBDJyaGs2AYE0N1MjAgIZObQ1m4BAmpupEQGBjBzamk1AIM3N1IiAQEYObc0mIJDmZmpEQCAjh7ZmExBIczM1IiCQkUNbswkIpLmZGhEQyMihrdkEBNLcTI0ICGTk0NZsAgJpbqZGBAQycmhrNgGBNDdTIwICGTm0NZuAQJqbqREBgYwc2ppNQCDNzdSIgEBGDm3NJiCQ5mZqREAgI4e2ZhMQSHMzNSIgkJFDW7MJCKS5mRoREMjIoa3ZBATS3EyNCAhk5NDWbAICaW6mRgQEMnJoazYBgTQ3UyMCAhk5tDWbgECam6kRAYGMHNqaTUAgzc3UiIBARg5tzSYgkOZmakRAICOHtmYTEEhzMzUiIJCRQ1uzCQikuZkaERDIyKGt2QQE0txMjQgIZOTQ1mwCAmlupkYEBDJyaGs2AYE0N1MjAgIZObQ1m4BAmpupEQGBjBzamk1AIM3N1IiAQEYObc0mIJDmZmpEQCAjh7ZmExBIczM1IiCQkUNbswkIpLmZGhEQyMihrdkEBNLcTI0ICGTk0NZsAgJpbqZGBAQycmhrNgGBNDdTIwICGTm0NZuAQJqbqREBgYwc2ppNQCDNzdSIgEBGDm3NJiCQ5mZqREAgI4e2ZhMQSHMzNSIgkJFDW7MJCKS5mRoREMjIoa3ZBATS3EyNCAhk5NDWbAICaW6mRgQEMnJoazYBgTQ3UyMCAhk5tDWbgECam6kRAYGMHNqaTUAgzc3UiMAXqPVhMNxoJT0AAAAASUVORK5CYII=',
          ...this.options,
          scale: this.scale,
          quality: this.quality,
          cacheBust: this.cacheBust,
          bgcolor: this.bgColor
        }
      }
    },
    getOffset (el) {
      let top = el.offsetTop
      let left = el.offsetLeft
      let parent = el.offsetParent
      while (parent) {
        top += parent.offsetTop
        left += parent.offsetLeft
        parent = parent.offsetParent
      }
      return {
        top,
        left,
        width: el.offsetWidth,
        height: el.offsetHeight
      }
    },
    /**
     * 截图
     * @return {promise}
     * @public
     */
    shot () {
      const doShot = this.ignoreMultiClick(this.dealHandle)
      if (!this.beforeShot) {
        return doShot()
      }
      const before = this.beforeShot()
      if (before && before.then) {
        before.then(() => {
          return doShot()
        })
      } else if (before !== false) {
        return doShot()
      }
    },
    async conmonHandle () {
      const el = this.$refs.targetDom
      const name = this.getFileName()
      const func = typeMapping[this.distType].fn
      if (!window.domtoimage) {
        window.domtoimage = domtoimage
      }
      return window.domtoimage[func](el, this.getOption(el))
        .then(data => {
          this.saveFile(data, name)
          return data
        })
        .catch(err => {
          return err
        })
    },
    async anotherHandle () {
      const el = this.$refs.targetDom
      const name = this.getFileName()
      if (!window.html2canvas) {
        window.html2canvas = html2canvas
      }

      if (this.cacheBust) {
        const imgArr = el.querySelectorAll('img')
        if (imgArr.length) {
          for (let i = 0; i < imgArr.length; i++) {
            const dom = imgArr[i]
            const src = dom.src
            if (src.includes(';base64,') || !src) {
              continue
            }
            const blob = await this.imageLoadBlob(src)
            if (blob) {
              dom.src = blob
            }
          }
        }
      }

      return window
        .html2canvas(el, this.getOption(el))
        .then(canvas => {
          const data = this.canvasToData(canvas, this.distType)
          this.saveFile(data, name)
          return data
        })
        .catch(err => {
          return err
        })
    },
    imageLoadBlob (src) {
      const url = src + (/\?/.test(src) ? '&' : '?') + new Date().getTime()
      return new Promise(resolve => {
        const request = new XMLHttpRequest()

        request.onreadystatechange = () => {
          if (request.readyState !== 4) return

          if (request.status !== 200) {
            // eslint-disable-next-line no-console
            console.error(`cannot fetch resource: ${src}`)
            resolve(src)
            return
          }

          const encoder = new FileReader()
          encoder.onloadend = () => {
            const content = encoder.result.split(/,/)[1]
            const extension = this.parseExtension(url).toLowerCase()
            const type = this.mimes()[extension] || ''
            resolve('data:' + type + ';base64,' + content)
          }
          encoder.readAsDataURL(request.response)
        }
        request.ontimeout = () => {
          resolve(src)
          // eslint-disable-next-line no-console
          console.error(`fetch resource timeout: ${src}`)
        }
        request.responseType = 'blob'
        request.timeout = 10000
        request.open('GET', url, true)
        request.send()
      })
    },
    parseExtension (url) {
      // eslint-disable-next-line no-useless-escape
      const match = /\.([^\.\/]*?)$/g.exec(url)
      if (match) return match[1]
      else return ''
    },
    mimes () {
      const WOFF = 'application/font-woff'
      const JPEG = 'image/jpeg'
      return {
        woff: WOFF,
        woff2: WOFF,
        ttf: 'application/font-truetype',
        eot: 'application/vnd.ms-fontobject',
        png: 'image/png',
        jpg: JPEG,
        jpeg: JPEG,
        gif: 'image/gif',
        tiff: 'image/tiff',
        svg: 'image/svg+xml'
      }
    },
    dealHandle () {
      if (this.useAnother) return this.anotherHandle()
      return this.conmonHandle()
    },
    ignoreMultiClick (func, manual = false) {
      let lock = false
      return function (...args) {
        if (lock) return
        lock = true
        const done = () => (lock = false)
        if (manual) return func.call(this, ...args, done)
        const promise = func.call(this, ...args)
        Promise.resolve(promise).finally(done)
        return promise
      }
    },
    /**
     * blob转file
     * @param {blob} theBlob blob对象，
     * @param {string} fileName 文件名
     * @return {blob}
     * @public
     */
    blobToFile (theBlob, fileName) {
      theBlob.lastModifiedDate = new Date()
      theBlob.name = fileName
      return theBlob
    },
    getFileName () {
      return this.saveName + '.' + typeMapping[this.distType].suffix
    },
    saveFile (data, fileName) {
      this.isSave && saveAs(data, fileName)
    },
    canvasToData (canvas, type) {
      if (type === 'jpg') {
        return canvas.toDataURL('image/jpeg', this.quality)
      } else if (type === 'png') {
        return canvas.toDataURL()
      } else {
        if (canvas.toBlob) {
          return new Promise(resolve => {
            canvas.toBlob(resolve)
          })
        }
        const binaryString = window.atob(canvas.toDataURL().split(',')[1])
        const length = binaryString.length
        const binaryArray = new Uint8Array(length)
        for (let i = 0; i < length; i++) {
          binaryArray[i] = binaryString.charCodeAt(i)
        }
        return new Blob([binaryArray], {
          type: 'image/png'
        })
      }
    }
  }
}
</script>
