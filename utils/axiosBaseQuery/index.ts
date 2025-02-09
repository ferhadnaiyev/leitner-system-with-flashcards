import axios, { AxiosError } from 'axios';

export type Method = 'get' | 'post' | 'put';

const axiosBaseQuery =
    ({ baseUrl }: { baseUrl: string }) =>
        async ({ url, method = 'get', data }: { url: string, method?: Method, data?: object }) => {
            try {
                let result;
                switch (method) {
                    case 'get':
                        result = await axios.get(baseUrl + url);
                        break;
                    case 'post':
                        result = await axios.post(baseUrl + url, data);
                        break;
                    case 'put':
                        result = await axios.put(baseUrl + url, data);
                        break;
                    default:
                        throw new Error(`Unsupported method: ${method}`);
                }

                return { data: result.data };
            } catch (axiosError) {
                const error = axiosError as AxiosError;
                return { error: { status: error.response?.status, data: error.response?.data } };
            }
        };

export default axiosBaseQuery;
