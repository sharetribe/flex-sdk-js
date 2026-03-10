import axios from 'axios';

/**
   Extract file metadata needed for `sdk.ownFiles.create()`.

   @param {Object} file - A browser File object or any object with `name`, `type`, and `size` properties.
   @returns {{ name: string, mimeType: string, size: number }}
 */
export const metadata = file => {
  if (!file) {
    throw new Error('file is required');
  }

  return {
    name: file.name,
    mimeType: file.type,
    size: file.size,
  };
};

/**
   Upload a file to a pre-signed URL obtained from `sdk.fileUploads.create()`.

   This performs a direct HTTP request to cloud storage — it does not go
   through the SDK interceptor pipeline.

   @param {Object} params
   @param {string} params.method - HTTP method (from fileUpload response, always "PUT")
   @param {string} params.url - Pre-signed upload URL
   @param {Object} params.headers - Headers to include (from fileUpload response)
   @param {*} params.file - The file content (File, Buffer, ReadableStream, etc.)
   @returns {Promise} Axios response promise
 */
export const upload = ({ method, url, headers, file }) => {
  if (!url) {
    throw new Error('url is required');
  }

  if (!file) {
    throw new Error('file is required');
  }

  return axios.request({
    method: method || 'PUT',
    url,
    headers: headers || {},
    data: file,
  });
};
