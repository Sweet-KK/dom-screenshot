import { shallowMount } from '@vue/test-utils'
import DomScreenshot from '@/dom-screenshot.vue'

describe('dom-screenshot', () => {
  const useHtml2canvas = true
  it('renders the correct markup', () => {
    const wrapper = shallowMount(DomScreenshot, {
      slots: {
        default: ['<h1>我是标题</h1>']
      },
      propsData: {
        useHtml2canvas
      }
    })
    expect(wrapper.html()).toBe(`<div class="dom-screenshot">
  <h1>我是标题</h1>
</div>`)

    const vm = wrapper.vm
    expect(vm.$data.useAnother).toBe(useHtml2canvas)
    expect(vm.shot() instanceof Promise).toBe(true)
    expect(vm.blobToFile(new Blob(), 'filename').name).toBe('filename')
  })
})
