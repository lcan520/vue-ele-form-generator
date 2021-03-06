export default {
  attrs: {
    action: {
      type: 'input',
      label: '上传地址',
      required: true
    },
    editorOptions: {
      type: 'json-editor',
      label: '编辑器设置',
      tip: '请参考: https://github.com/davidroyer/vue2-editor'
    },
    placeholder: {
      type: 'input',
      label: '占位符'
    },
    fileSize: {
      type: 'input',
      label: '文件大小限制(MB)',
      attrs: {
        type: 'number',
        min: 0
      }
    },
    name: {
      type: 'input',
      label: '上传的文件字段名',
      required: true
    },
    withCredentials: {
      type: 'switch',
      label: '支持发送 cookie 凭证信息'
    },
    data: {
      type: 'json-editor',
      label: '上传时附带的额外参数'
    },
    headers: {
      type: 'json-editor',
      label: '设置上传的请求头部'
    },
    editorToolbar: {
      type: 'json-editor',
      label: '自定义toolbar'
    }
  },
  attrsData: {
    action: 'https://jsonplaceholder.typicode.com/posts'
  },
  attrsDefaultData: {
    name: 'file',
    data: {},
    headers: {},
    editorToolbar: [],
    withCredentials: false
  },
  common: {},
  commonData: {},
  commonDefaultData: {}
}
