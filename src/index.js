import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//redux Provider是把store用在所有组件中
import { Provider } from 'react-redux';
//createStore是创建仓库的方法
import { createStore } from 'redux';
//引入路由
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'




const store = createStore((state = {
	//存放数据
	isShowImg: false,
	imgSrc: ''
}, action) => {
	switch(action.type) {
		//case里面监听组件传过来的事件，触发动作
		case 'showImg':
			return Object.assign({}, state, {
				//在这里接收传过来的数据赋给store，进而修改数据
				isShowImg: action.isShowImg,
				imgSrc: action.imgSrc
			});
		default:
			return state;
	}
});

ReactDOM.render(
	<router>
		<Provider store={store}>
			<div id="biyso">
				1
			</div>
		</Provider>
	　</router>,
	document.getElementById('root'));
registerServiceWorker();
