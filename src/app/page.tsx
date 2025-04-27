
"use client"
export default function Home() {
  const uploadFileContent = async (content: any) => {
    //const response = await uploadFile(content);
  }

  const handleUploadFIle = (e: any) => {
    e.preventDefault();
    uploadFileContent(e);
  }
  
  return (
    <div className=" flex items-center justify-center min-h-screen">
      <div className="w-4/12 h-screen px-14 flex flex-col items-center justify-center border-4 border-[#ffffff] rounded-xl  bg-red-700">
        <div className="flex flex-col gap-4 items-center justify-center text-white rounded-t-xl py-6">
          <h2 className="text-2xl font-bold">PDF File Converter</h2>
          <p className="text-lg">This website allows you to easily convert your documents into PDF format.</p>
        </div>
      </div>

      <div className="w-8/12 h-screen px-14">
        <div className="w-full h-screen flex flex-col items-center justify-center bg-white  rounded-b-xl">
          <form id="uploadFile" onSubmit={(event) => handleUploadFIle(event)} className="w-full flex flex-col items-center">
            <div className="font-bold text-[29px]  text-center">
              <label htmlFor="fileConverInput">Upload a File</label>
            </div>
            <div className="w-full flex items-center justify-between flex-col sm:flex-row gap-4 sm:gap-6">
              <input
                className="w-full sm:w-8/12 border rounded-xl py-4 px-4 border-[#e3e3e3] text-gray-700"
                type="file"
                id="fileConverInput"
                name="fileConvert"
                accept=".docx"
                required
                placeholder="Choose a file"
              />
              <button
                type="submit"
                className="w-full sm:w-4/12 bg-red-600 border rounded-xl py-4 px-4 text-[#ffffff] mt-4 sm:mt-0"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>


    </div>

  );
}
