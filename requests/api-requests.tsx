import { apiKey, } from "../lib/config";
import ConvertApi from 'convertapi-js'

export async function uploadFile(fileContent: File) {
    if (!apiKey) return;

    try {
        const convertApi = ConvertApi.auth(apiKey);
        const params = convertApi.createParams();

        params.add('file', fileContent);

        const response = await convertApi.convert('docx', 'pdf', params);
        const fileData = {
            url: response.files[0].Url,
            name: response.files[0].FileName
        };
        
        return fileData;

    } catch (error) {
        throw new Error('Failed to convert file');
    }
}
