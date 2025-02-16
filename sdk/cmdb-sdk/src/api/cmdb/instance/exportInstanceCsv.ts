import { http, HttpOptions } from "@next-core/brick-http";

export interface ExportInstanceCsvRequestBody {
  /** 请求参数json序列化 */
  json?: string;
}

/**
 * @description 实例导出csv
 * @endpoint POST /object/:object_id/instance/export
 */
export const exportInstanceCsv = (
  object_id: string | number,
  data: ExportInstanceCsvRequestBody,
  options?: HttpOptions
): Promise<Blob> =>
  http.post<Blob>(
    `api/gateway/cmdb.instance.ExportInstanceCsv/object/${object_id}/instance/export`,
    data,
    { ...options, responseType: "blob" }
  );
