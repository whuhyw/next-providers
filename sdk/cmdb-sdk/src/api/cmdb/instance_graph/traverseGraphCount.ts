import { http, HttpOptions } from "@next-core/brick-http";
import { ModelTraverseChildNode } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface TraverseGraphCountRequestBody {
  /** 模型Id */
  object_id: string;

  /** 实例的过滤条件 (过滤条件不仅支持属性的过滤，也支持关系字段的过滤) */
  query: Record<string, any>;

  /** 指定返回此关系指向模型的fields */
  fields?: Record<string, any>;

  /** 子节点列表 */
  child: Partial<ModelTraverseChildNode>[];
}

export type TraverseGraphCountResponseBody = TraverseGraphCountResponseBody_item[];

/**
 * @description 图遍历查询叶子节点个数统计 (图遍历查询叶子节点个数统计,fields不用传)
 * @endpoint POST /instance/traverse/count
 */
export const traverseGraphCount = async (
  data: TraverseGraphCountRequestBody,
  options?: HttpOptions
): Promise<TraverseGraphCountResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<TraverseGraphCountResponseBody>>(
      "api/gateway/cmdb.instance_graph.TraverseGraphCount/instance/traverse/count",
      data,
      options
    )
  ).data;

export interface TraverseGraphCountResponseBody_item {
  /** 根节点模型Id */
  object_id: string;

  /** 根节点instanceId */
  instanceId: string;

  /** 叶子节点个数统计 */
  list: TraverseGraphCountResponseBody_item_list_item[];
}

export interface TraverseGraphCountResponseBody_item_list_item {
  /** 叶子节点模型Id */
  object_id?: string;

  /** 路径，eg: a.b.c */
  path?: string;

  /** 节点个数 */
  count?: number;
}
