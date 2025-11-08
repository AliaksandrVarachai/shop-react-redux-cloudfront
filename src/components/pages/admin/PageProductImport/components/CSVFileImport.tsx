import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios, { AxiosError } from 'axios';

type CSVFileImportProps = {
  url: string;
  title: string;
};

export default function CSVFileImport({ url, title }: CSVFileImportProps) {
  const [file, setFile] = React.useState<File>();

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0] as File;
      setFile(file);
    }
  };

  const removeFile = () => {
    setFile(undefined);
  };

  const uploadFile = async () => {
    if (!file) {
        console.error('No file selected for upload');
        return;
    }
    console.log("uploadFile to", url);

    // Get the presigned URL
    try {
        const response = await axios({
            method: "GET",
            headers: {
                Authorization: `Base ${localStorage.getItem('authorization_token')}`
            },
            withCredentials: true,
            url,
            params: {
                filename: encodeURIComponent(file.name),
            },
        });
        console.log("File to upload: ", file.name);
        console.log("Uploading to: ", response.data);
        const result = await fetch(response.data, {
            method: "PUT",
            body: file,
        });
        console.log("Result: ", result);
        setFile(undefined);
    } catch(error) {
        switch ((error as AxiosError).response?.status) {
            case 401: {
                alert('Unauthorized error.\nPlease add authorization token to local storage via console');
                return;
            }
            case 403: {
                alert('Forbidden access.\nPlease check your authorization token and replace it via console');
                return;
            }
            default: {
                alert('Unexpected error while requested signed URL');
                return;
            }
        }
    }
  };
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {!file ? (
        <input type="file" onChange={onFileChange} />
      ) : (
        <div>
          <button onClick={removeFile}>Remove file</button>
          <button onClick={uploadFile}>Upload file</button>
        </div>
      )}
    </Box>
  );
}
