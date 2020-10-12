//全局解决.vue文件无法找到模块的报错提示；
declare module '*.vue'{
  import {ComponentOptions} from 'vue';
  const ComponentOptions:ComponentOptions
  export default ComponentOptions
}
declare module '*.md' {
  const str: string
  export default str
}