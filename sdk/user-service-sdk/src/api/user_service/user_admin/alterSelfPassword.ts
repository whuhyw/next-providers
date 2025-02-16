import { http, HttpOptions } from "@next-core/brick-http";

export interface AlterSelfPasswordRequestBody {
  /** 新密码 */
  password: string;

  /** 原密码 */
  oldPassword: string;
}

/**
 * @description 修改自己密码
 * @endpoint POST /api/v1/users/password
 */
export const alterSelfPassword = (
  data: AlterSelfPasswordRequestBody,
  options?: HttpOptions
): Promise<void> =>
  http.post<void>(
    "api/gateway/user_service.user_admin.AlterSelfPassword/api/v1/users/password",
    data,
    options
  );
