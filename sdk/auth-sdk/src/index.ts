import { http, HttpOptions } from "@next-core/brick-http";

interface ResponseBodyWrapper<T> {
  code: number;
  data: T;
  error?: string;
  message?: string;
}

export interface LoginRequestBody {
  username: string;
  password: string;
}

export interface LoginResponseBody {
  loggedIn: boolean;
  username?: string;
  userInstanceId?: string;
  org?: number;
  location?: string;
}

export interface SSOLoginResponseBody {
  redirectUrl: string;
}

export const login = async (
  data: LoginRequestBody,
  options?: HttpOptions
): Promise<LoginResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<LoginResponseBody>>(
      "api/auth/login",
      data,
      options
    )
  ).data;

export const ssoLogin = async <T = Record<string, any>>(
  protocol: string | number,
  options?: HttpOptions
): Promise<SSOLoginResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<SSOLoginResponseBody>>(`api/v1/sso/login/${protocol}`, {
      ...options,
    })
  ).data;

export const ssoAuthorize = async <T = Record<string, any>>(
  protocol: string | number,
  params?: { query?: Record<string, string> },
  options?: HttpOptions
): Promise<T> =>
  (
    await http.get<ResponseBodyWrapper<T>>(`api/v1/sso/authorization/${protocol}`, {
      ...options,
      params,
    })
  ).data;

export const logout = (options?: HttpOptions): Promise<void> =>
  http.post("api/auth/logout", options);

export const ssoLogout = async <T = Record<string, any>>(
  protocol: string | number,
  options?: HttpOptions,
): Promise<T> =>
  (
    await http.post<ResponseBodyWrapper<T>>(`api/v1/sso/logout/${protocol}`, options)
  ).data;

export const checkLogin = async (
  options?: HttpOptions
): Promise<LoginResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<LoginResponseBody>>(
      "api/auth/login",
      options
    )
  ).data;

export const bootstrap = async <T = Record<string, any>>(
  params?: { check_login?: boolean; brief?: boolean },
  options?: HttpOptions
): Promise<T> =>
  (
    await http.get<ResponseBodyWrapper<T>>("api/auth/bootstrap", {
      ...options,
      params,
    })
  ).data;

export const getAppStoryboard = async <T = Record<string, any>>(
  appId: string | number,
  params?: { check_login?: boolean },
  options?: HttpOptions
): Promise<T> =>
  (
    await http.get<ResponseBodyWrapper<T>>(`api/auth/bootstrap/${appId}`, {
      ...options,
      params,
    })
  ).data;
