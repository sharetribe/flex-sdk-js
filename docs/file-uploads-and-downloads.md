# File Uploads and Downloads

The SDK supports file uploads and downloads through the Marketplace API. The
upload flow uses a two-step process: first request a presigned upload URL from
the API, then upload the file directly to cloud storage using that URL. The SDK
provides helper functions in `sharetribe-flex-sdk/file` to make this easier.

## File helper functions

The `file` module exported from the SDK contains two helper functions.

```js
const sharetribeSdk = require('sharetribe-flex-sdk');
const { file } = sharetribeSdk;
```

### `file.metadata(file)`

Extracts the metadata needed for `sdk.ownFiles.create()` from a browser
[`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) object.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `file` | `File` | A browser `File` object, e.g. from an `<input type="file">` element |

**Returns:** An object with the following properties:

| Name | Type | Description |
| --- | --- | --- |
| `name` | `string` | The file name |
| `mimeType` | `string` | The MIME type of the file |
| `size` | `number` | The file size in bytes |

**Example:**

```js
const fileInput = document.querySelector('input[type="file"]');
const selectedFile = fileInput.files[0];

const metadata = file.metadata(selectedFile);
// { name: 'photo.jpg', mimeType: 'image/jpeg', size: 123456 }
```

### `file.upload({ method, url, headers, file, onUploadProgress })`

Uploads a file directly to cloud storage using a presigned URL obtained from
`sdk.fileUploads.create()`. This function bypasses the SDK interceptor pipeline
and sends the request directly to the cloud storage URL.

**Parameters:**

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `url` | `string` | Yes | The presigned upload URL from `sdk.fileUploads.create()` |
| `file` | `File` | Yes | The file to upload |
| `method` | `string` | No | HTTP method, defaults to `'PUT'` |
| `headers` | `object` | No | Additional HTTP headers to send with the request |
| `onUploadProgress` | `function` | No | Callback called with a [ProgressEvent](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent) as the file uploads |

**Returns:** A Promise that resolves when the upload is complete.

**Example:**

```js
file.upload({
  url: 'https://storage.example.com/presigned-upload-url',
  file: selectedFile,
  onUploadProgress: (progressEvent) => {
    const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    console.log(`${percent}% uploaded`);
  },
});
```

## Uploading a file

Uploading a file requires three steps:

1. Request a presigned upload URL with `sdk.fileUploads.create()`
2. Upload the file directly to cloud storage with `file.upload()`
3. Register the file with the Marketplace API with `sdk.ownFiles.create()`

**Example:**

```js
const sharetribeSdk = require('sharetribe-flex-sdk');
const { file } = sharetribeSdk;

const sdk = sharetribeSdk.createInstance({
  clientId: 'your-client-id',
});

const fileInput = document.querySelector('input[type="file"]');
const selectedFile = fileInput.files[0];

// Step 1: Request a presigned upload URL
sdk.fileUploads.create({})
  .then(uploadResponse => {
    const { method, url, headers } = uploadResponse.data.data.attributes;

    // Step 2: Upload the file directly to cloud storage
    return file.upload({ method, url, headers, file: selectedFile })
      .then(() => uploadResponse);
  })
  .then(uploadResponse => {
    const uploadId = uploadResponse.data.data.id;
    const metadata = file.metadata(selectedFile);

    // Step 3: Register the file with the Marketplace API
    return sdk.ownFiles.create({
      name: metadata.name,
      mimeType: metadata.mimeType,
      size: metadata.size,
      uploadId,
    });
  })
  .then(ownFileResponse => {
    console.log('File uploaded and registered:', ownFileResponse.data.data.id);
  })
  .catch(e => {
    console.error('Upload failed:', e);
  });
```

## Tracking upload progress

Pass `onUploadProgress` to `file.upload()` to track upload progress.

**Example:**

```js
const logProgress = (progressEvent) => {
  const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
  console.log(`${percent}% uploaded`);
};

file.upload({ method, url, headers, file: selectedFile, onUploadProgress: logProgress });
```

## Downloading a file

To download a file, use `sdk.ownFileDownloads.create()` for files owned by the
current user, or `sdk.fileDownloads.create()` for other accessible files. Both
endpoints return a short-lived download URL that can be used to retrieve the
file content.

**Example:**

```js
const { UUID } = require('sharetribe-flex-sdk').types;

// Download a file owned by the current user
sdk.ownFileDownloads.create({ fileId: new UUID('a5d04285-07da-4fa0-b80b-ebabb8bac9e5') })
  .then(response => {
    const downloadUrl = response.data.data.attributes.url;
    window.location.href = downloadUrl;
  });

// Download a file accessible to the current user (e.g. from a transaction)
sdk.fileDownloads.create({ fileId: new UUID('a5d04285-07da-4fa0-b80b-ebabb8bac9e5') })
  .then(response => {
    const downloadUrl = response.data.data.attributes.url;
    window.location.href = downloadUrl;
  });
```
