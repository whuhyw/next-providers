import { http, HttpOptions } from "@next-core/brick-http";

export interface UpdateInstalledMicroAppContainerRequestBody {
  /** 小产品所属桌面Id */
  containerId: string;
}

/**
 * @description 更新小产品与桌面关系
 * @endpoint PUT /api/micro_app/v1/installed_micro_app/:app_id/container
 */
export const updateInstalledMicroAppContainer = (
  app_id: string | number,
  data: UpdateInstalledMicroAppContainerRequestBody,
  options?: HttpOptions
): Promise<void> =>
  http.put<void>(
    `api/gateway/micro_app.installed_micro_app.UpdateInstalledMicroAppContainer/api/micro_app/v1/installed_micro_app/${app_id}/container`,
    data,
    options
  );
