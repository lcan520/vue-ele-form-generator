export default {
  attrs: {
    action: {
      type: 'input',
      label: '上传地址',
      required: true
    },
    name: {
      type: 'input',
      label: '上传的文件字段名',
      required: true
    },
    placeholder: {
      type: 'input',
      label: '上传按钮文本'
    },
    fileSize: {
      type: 'input',
      label: '文件大小限制(MB)',
      attrs: {
        type: 'number',
        min: 0
      }
    },
    fileType: {
      type: 'json-editor',
      label: '文件类型, 例如[\'png\', \'jpg\', \'jpeg\']'
    },
    multiple: {
      type: 'switch',
      label: '是否支持多选文件'
    },
    limit: {
      type: 'input',
      label: '文件个数显示',
      vif: data => data.multiple,
      attrs: {
        type: 'number'
      }
    },
    isCanDownload: {
      type: 'switch',
      label: '是否显示下载'
    },
    isCanDelete: {
      type: 'switch',
      label: '是否可删除'
    },
    isCanUploadSame: {
      type: 'switch',
      label: '是否可上传相同文件'
    },
    isShowTip: {
      type: 'switch',
      label: '是否显示提示'
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
    }
  },
  attrsData: {
    action: 'https://jsonplaceholder.typicode.com/posts'
  },
  attrsDefaultData: {
    name: 'file',
    isShowSize: true,
    isCanDelete: true,
    isCanDownload: true,
    isCanUploadSame: true,
    data: {},
    headers: {},
    fileType: [],
    withCredentials: false,
    multiple: true
  },
  common: {},
  commonData: {},
  commonDefaultData: {}
}
