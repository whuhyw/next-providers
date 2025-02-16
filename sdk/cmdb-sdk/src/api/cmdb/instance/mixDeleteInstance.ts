import { http, HttpOptions } from "@next-core/brick-http";

export interface MixDeleteInstanceRequestBody {
  /** 实例列表 */
  data: MixDeleteInstanceRequestBody_data_item[];
}

/**
 * @description 批量删除实例 (提供多模型实例混合删除接口(此接口是保证事务的))
 * @endpoint POST /mix/object/instance/delete
 */
export const mixDeleteInstance = (
  data: MixDeleteInstanceRequestBody,
  options?: HttpOptions
): Promise<void> =>
  http.post<void>(
    "api/gateway/cmdb.instance.MixDeleteInstance/mix/object/instance/delete",
    data,
    options
  );

export interface MixDeleteInstanceRequestBody_data_item {
  /** 模型Id */
  _object_id?: string;

  /** 实例Id */
  instanceId?: string;
}
