import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 禁用用户ApiKey[内部]
 * @endpoint PUT /api/v1/apikey/disable/:access_key
 */
export const disableApiKey = (
  access_key: string | number,
  options?: HttpOptions
): Promise<void> =>
  http.put<void>(
    `api/gateway/user_service.apikey.DisableApiKey/api/v1/apikey/disable/${access_key}`,
    undefined,
    options
  );
