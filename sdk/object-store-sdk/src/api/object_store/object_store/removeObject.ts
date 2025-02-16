import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除对象
 * @endpoint DELETE /api/v1/objectStore/bucket/:bucketName/object/:objectName
 */
export const removeObject = (
  bucketName: string | number,
  objectName: string | number,
  options?: HttpOptions
): Promise<void> =>
  http.delete<void>(
    `api/gateway/object_store.object_store.RemoveObject/api/v1/objectStore/bucket/${bucketName}/object/${objectName}`,
    options
  );
