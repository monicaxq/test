import React from 'react'
import ReactDom from 'react-dom'

import './a.css'

import store from './store/index'
import { Provider } from "react-redux";

// import Btn from './btn.js'
// import CoundNum from './coundNum.js'
// import Shopcar from './shopcar/shopcarbox'
import Listbox from './missonlist/listbox'
// import Life from './life'
// import Wechart from './wechart/wechart'




// ReactDom.render((<Wechart />), app)
ReactDom.render((<Provider store={store}><Listbox /></Provider>), app)
// ReactDom.render((<Shopcar cls='bigbox' />), app)
// ReactDom.render((<CoundNum />), app)
// ReactDom.render((<Provider store={store}><Btn clas='red'></Btn></Provider>), app)


