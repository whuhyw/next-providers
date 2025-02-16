import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

/** 要更新的实例 */
export type UpdateInstanceV2RequestBody = Record<string, any>;

export type UpdateInstanceV2ResponseBody = Record<string, any>;

/**
 * @description 更新实例V2 (支持关系更新)
 * @endpoint PUT /v2/object/:objectId/instance/:instanceId
 */
export const updateInstanceV2 = async (
  objectId: string | number,
  instanceId: string | number,
  data: UpdateInstanceV2RequestBody,
  options?: HttpOptions
): Promise<UpdateInstanceV2ResponseBody> =>
  (
    await http.put<ResponseBodyWrapper<UpdateInstanceV2ResponseBody>>(
      `api/gateway/cmdb.instance.UpdateInstanceV2/v2/object/${objectId}/instance/${instanceId}`,
      data,
      options
    )
  ).data;
