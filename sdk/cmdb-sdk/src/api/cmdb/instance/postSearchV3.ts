import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface PostSearchV3RequestBody {
  /** e.g.: { name: { $like: '%q%' } }, { $or: [{ name: { $like: '%q%' }}] } */
  query?: Record<string, any>;

  /** 查询条件模板上下文 模板格式为 @{key} ,e.g.: query:{ name: { $like: '%@{key1}%'}, int: '@{key2}' }, query_context:{ key1: 'val1', 'key2': 12 }, query则会被转换成{ name: { $like: '%val1%' }, int: 12 }, 如果key1对应的值为null或者空字符串, query则会被转换成{ int: 12 } */
  query_context?: Record<string, any>;

  /** 指定返回字段(支持通过父模型指定子模型属性)(支持关系数据的二级jsonPath格式的指定字段如clusters.name), e.g.: [name, instanceId] */
  fields: string[];

  /** 当为 true 时，只搜索与我相关实例 */
  only_my_instance?: boolean;

  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;

  /** 按字段排序， 留空默认按照实例ID降序排序(1表示升序， -1表示降序) e.g.: { instanceId: 1 } */
  sort?: PostSearchV3RequestBody_sort_item[];

  /** 按照权限过滤(通用实例都有 read， update， delete 权限控制， 主机实例在通用实例权限基础上有额外的 operate 权限， 应用实例在通用实例权限基础上有额外的 developClusterOperate， testClusterOperate， prereleaseClusterOperate， productionClusterOperate 权限) e.g.: [ "operate", "update" ] */
  permission?: string[];

  /** 限制fields所带出的关系的数量， 0为不限制，全局配置 */
  relation_limit?: number;

  /** 单独指定关系的limit与sort */
  limitations?: PostSearchV3RequestBody_limitations_item[];
}

export interface PostSearchV3ResponseBody {
  /** instance list */
  list?: Record<string, any>[];

  /** 实例总数 */
  total?: number;

  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;
}

/**
 * @description 搜索实例V3 (支持多属性排序)
 * @endpoint POST /v3/object/:objectId/instance/_search
 */
export const postSearchV3 = async (
  objectId: string | number,
  data: PostSearchV3RequestBody,
  options?: HttpOptions
): Promise<PostSearchV3ResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<PostSearchV3ResponseBody>>(
      `api/gateway/cmdb.instance.PostSearchV3/v3/object/${objectId}/instance/_search`,
      data,
      options
    )
  ).data;

export interface PostSearchV3RequestBody_sort_item {
  /** 属性id */
  key?: string;

  /** 1表示升序， -1表示降序 */
  order?: -1 | 1;
}

export interface PostSearchV3RequestBody_limitations_item {
  /** 关系id， 支持多级关系， 如owner， owner.app */
  field?: string;

  /** 关系数量限制， 0为不限制， 优先级高于relation_limit */
  limit?: number;

  /** 关系排序 */
  sort?: PostSearchV3RequestBody_limitations_item_sort_item[];
}

export interface PostSearchV3RequestBody_limitations_item_sort_item {
  /** 属性id */
  key?: string;

  /** 1或-1， 1为升序， -1位降序 */
  order?: -1 | 1;
}
