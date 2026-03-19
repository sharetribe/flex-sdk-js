import axios from 'axios';

/**
   Extract file metadata needed for `sdk.ownFiles.create()`.
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
   Upload a file to a URL obtained from `sdk.fileUploads.create()`.

   This performs a direct HTTP request to cloud storage. It does not go
   through the SDK interceptor pipeline.
 */
export const upload = ({ method, url, headers, file, onUploadProgress }) => {
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
    onUploadProgress,
  });
};
