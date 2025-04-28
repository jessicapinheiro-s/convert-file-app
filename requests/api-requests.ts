export default async function uploadFile(fileContent: any) {
    if(!apiUrl || !apiKey) return;
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                 "x-api-key": apiKey
            },
            body: fileContent
        });
        const dataFormated = await response.json();
        if(dataFormated.ok){
            return dataFormated;
        }
    }catch(error) {
        throw new Error ('error')
    }
}