/*
* 基于axios封装请求
*/
import axios from 'axios'

// 创建一个axios实例
const request = axios.create({
    baseURL: 'http://ttapi.research.itcast.cn'
})

// 导出请求方法
export default request