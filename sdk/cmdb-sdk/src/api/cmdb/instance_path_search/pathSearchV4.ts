import { http, HttpOptions } from "@next-core/brick-http";
import { ModelStrategyPathNode } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface PathSearchV4RequestBody {
  /** 查询路径 */
  path: Partial<ModelStrategyPathNode>[];

  /** 以alias_id表示的字段排序 {"APP.name": -1} */
  alias_id_sort?: Record<string, any>;

  /** 页数 */
  page?: number;

  /** 页大小 */
  pageSize?: number;
}

export interface PathSearchV4ResponseBody {
  /** 起点个数 */
  root?: number;

  /** 全量路径个数 */
  allPath?: number;

  /** 结果列表 eg: [[{"_object_id": "APP","attrId1": 2.355, "instanceId": "xxxx","name": "test1253" },{"_object_id": "CLUSTER","instanceId": "xxxxx","name": "dev"}]] */
  list?: any;
}

/**
 * @description 实例路径查询v4
 * @endpoint POST /v4/path/_search
 */
export const pathSearchV4 = async (
  data: PathSearchV4RequestBody,
  options?: HttpOptions
): Promise<PathSearchV4ResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<PathSearchV4ResponseBody>>(
      "api/gateway/cmdb.instance_path_search.PathSearchV4/v4/path/_search",
      data,
      options
    )
  ).data;
