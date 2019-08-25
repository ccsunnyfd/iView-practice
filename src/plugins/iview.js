import Vue from 'vue'
import iView from 'iview'

import locale from 'iview/dist/locale/ja-JP'
Vue.use(iView, {
    transfer: true,
    size: 'large',
    locale: locale
})

// import 'iview/dist/styles/iview.css'
import '../custom.less';
