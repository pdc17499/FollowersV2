import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';
import { showMessage } from 'react-native-flash-message';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type RequestConfigProperties = {
  showMessage: boolean;
  showMessageError: boolean;
};

const ApiConfigs: any = {
  baseURL: 'https://follower-matching-api.adamo.tech/api/',
  responseType: 'json',
  timeout: 10000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    timeout: 5000,
  },
};

export interface RequestQueueItemProperties {
  id: Number;
  config: RequestConfigProperties;
}

class AxiosClass {
  static instance: AxiosClass;

  static default() {
    if (!AxiosClass.instance) {
      AxiosClass.instance = new AxiosClass();
    }
    return AxiosClass.instance;
  }

  api!: AxiosInstance;
  incrementRequestId = 0;
  requestQueue: Array<RequestQueueItemProperties> = [];
  token = '';

  constructor() {
    this.api = axios.create(ApiConfigs);
    this.api.interceptors.request.use(
      async config => {
        let token = '';
        try {
          const value = await AsyncStorage.getItem('TOKEN');

          if (value !== null) {
            token = value;
          }
        } catch (e) {
          console.log('Lỗi không đọc được token', e);
        }
        if (token) {
          config.headers.Authorization = token;
        }

        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );
    this.api.interceptors.response.use(
      this.interceptorResponses,
      this.handleErrors,
    );
  }

  clear = () => {
    this.token = '';
    // store.dispatch(AuthenActionImp.setToken(''))
    this.api.defaults.headers.common.Authorization = null;
  };

  handleErrors = (error: AxiosError) => {
    console.log('[error]', error);
    let message = '';
    const { response, request } = error;
    console.log('interceptorResponses error response', response);
    console.log('interceptorResponses error request', request);

    if (response) {
      return this.handleErrorOnResponse(response);
    } else if (request) {
      NetInfo.fetch().then(connect => {
        if (!connect.isConnected) {
          console.log('---------not connection');
        } else {
          message = error.message;
        }
        console.log('--------have connection,', error.message);
        return Promise.reject(error);
      });
    } else {
      message = error.message;
    }
    return Promise.reject(error);
  };
  interceptorResponses = (response: AxiosResponse): Promise<any> => {
    return Promise.resolve(response.data);
  };

  getValidateMessage(data: {
    message: string;
    errors: { [key: string]: Array<string> };
  }) {
    try {
      const errors = data.errors;
      if (errors && Object.keys(errors).length !== 0) {
        let listError = Object.keys(errors).map(key => {
          return errors[key].pop();
        });

        let mess = listError[0];
        console.log('-----errors', listError, mess);
        return mess;
      } else {
        return data.message ? data.message : '';
      }
    } catch (error) {
      console.log('----getValidateMessage err', error);
    }
  }

  handleErrorOnResponse = (response: AxiosResponse) => {
    const { data, status, config } = response;
    const errMes = this.getValidateMessage(data.data);
    // const errMes = data.data;
    console.log('error', response);
    if (errMes) {
      showMessage({
        message: errMes,
        type: 'danger',
      });
    }

    return Promise.reject(data);
  };

  pushReqestQueue = (config: RequestConfigProperties) => {
    this.incrementRequestId++;
    this.requestQueue.push({
      id: this.incrementRequestId,
      config,
    });
  };

  get<T>(url: string, config: RequestConfigProperties): Promise<T> {
    this.pushReqestQueue(config);
    return this.api.get(url, {
      headers: {
        _id: this.incrementRequestId,
        ...this.api.defaults.headers,
      },
    });
  }

  del<T>(url: string, config: RequestConfigProperties): Promise<T> {
    this.pushReqestQueue(config);
    return this.api.delete(url, {
      headers: {
        _id: this.incrementRequestId,
        ...this.api.defaults.headers,
      },
    });
  }

  put<T>(
    url: string,
    body: any,
    config: RequestConfigProperties = {
      showMessage: true,
      showMessageError: true,
    },
  ): Promise<T> {
    this.pushReqestQueue(config);
    return this.api.put(url, body, {
      headers: {
        _id: this.incrementRequestId,
      },
    });
  }

  postNormal<T>(
    url: string,
    body: any,
    config: RequestConfigProperties = {
      showMessage: true,
      showMessageError: true,
    },
    header: any = {},
  ): Promise<T> {
    this.pushReqestQueue(config);
    console.log(body, url, config);
    return this.api.post(url, body, {
      headers: {
        _id: this.incrementRequestId,
        ...header,
      },
    });
  }

  postForm<T>(
    url: string,
    body: FormData,
    config: RequestConfigProperties,
  ): Promise<T> {
    this.pushReqestQueue(config);
    return this.api.post(url, body, {
      headers: {
        _id: this.incrementRequestId,
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });
  }
}

export default AxiosClass.default();
export function get(GET_LIST_FRIENDS: string): any {
  throw new Error('Function not implemented.');
}
