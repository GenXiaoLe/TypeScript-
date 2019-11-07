import axios from 'axios';

const instance = axios.create({
    //当创建实例的时候配置默认配置
    xsrfCookieName: 'xsrf-token'
})

// 添加请求拦截器
instance.interceptors.request.use(
    config => {
    //在发送请求之前做某事，比如加一个loading
    const token: string = localStorage.getItem("token") || '';
    if(token){
        config.headers['athor'] = `Barse ${token}`;
    }

    return config;
    },
    error => {
        return error;
    }
)

instance.interceptors.response.use(
    response => {
        const { config, data: responseData } = response;

        if (responseData.success) {
            return responseData.result || true;
        }

        return 'error';
    },
    () => {
        return 'error';
    }
)

export default instance;