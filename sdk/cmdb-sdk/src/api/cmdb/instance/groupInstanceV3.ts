import { http, HttpOptions } from "@next-core/brick-http";
import { ModelGroupInstanceFunc } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GroupInstanceV3RequestBody {
  /** 查询条件,与[实例搜索接口]的query字段说明一致 */
  query?: Record<string, any>;

  /** 按照权限过滤(通用实例都有`read`, `update`, `delete`权限控制, 主机实例在通用实例权限基础上有额外的`operate`权限, 应用实例在通用实例权限基础上有额外的`developClusterOperate`, `testClusterOperate`, `prereleaseClusterOperate`, `productionClusterOperate`权限) */
  permission?: string[];

  /** 是否只获取与自己有关的那部分数据, 默认为false */
  only_my_instance?: boolean;

  /** 聚合属性id（支持多字段，包括属性和单个关系） */
  group_fields: string[];

  /** 操作列表,对某字段进行,sum, max... */
  funcs: Partial<ModelGroupInstanceFunc>[];
}

export interface GroupInstanceV3ResponseBody {
  /** 数据列表，将group_field和funcs.alias的值作为key，group_value和funcs.value的值作为value */
  list: Record<string, any>[];

  /** total */
  total: number;
}

/**
 * @description 实例聚合接口v3 (支持聚合多字段，支持聚合单个关系，聚合函数包括sum, max, min, avg， 返回平铺的实例列表)
 * @endpoint POST /v3/object/:object_id/instance/group
 */
export const groupInstanceV3 = async (
  object_id: string | number,
  data: GroupInstanceV3RequestBody,
  options?: HttpOptions
): Promise<GroupInstanceV3ResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<GroupInstanceV3ResponseBody>>(
      `api/gateway/cmdb.instance.GroupInstanceV3/v3/object/${object_id}/instance/group`,
      data,
      options
    )
  ).data;
