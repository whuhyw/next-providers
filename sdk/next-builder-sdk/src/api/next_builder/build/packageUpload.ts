import { http, HttpOptions } from "@next-core/brick-http";

export interface PackageUploadRequestBody {
  /** projectId */
  projectId: string;

  /** 小产品版本号 */
  version: string;

  /** 版本描述信息 */
  description: string;

  /** 项目依赖的bricks */
  dependBricks?: string[];

  /** 项目依赖的templates */
  dependTemplates?: string[];

  /** 项目依赖的bricks */
  dependApis?: PackageUploadRequestBody_dependApis_item[];
}

/**
 * @description 指定环境一键打包上传到r环境
 * @endpoint POST /api/v1/next-builder/package-upload
 */
export const packageUpload = (
  data: PackageUploadRequestBody,
  options?: HttpOptions
): Promise<void> =>
  http.post<void>(
    "api/gateway/next_builder.build.PackageUpload/api/v1/next-builder/package-upload",
    data,
    options
  );

export interface PackageUploadRequestBody_dependApis_item {
  /** 命名空间 */
  namespace?: string;

  /** api标识 */
  name?: string;
}
