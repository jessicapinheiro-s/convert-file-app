"use client"
import { motion } from 'framer-motion';
import { FileProps } from "../../interfacesList/interfaces-list";
import { uploadFile } from "../../requests/api-requests";
import { useModal } from "../../stores/modal-store";
import { FormEvent } from 'react';

export default function Home() {
  const { modalStatus, setModalStatus } = useModal();

  const uploadFileContent = async (content: File) => {
    const urlFile: FileProps | undefined = await uploadFile(content);

    if (!urlFile) return;
    setModalStatus(false);
    const elementAtoDownload = document.createElement('a');
    elementAtoDownload.href = urlFile.url;
    elementAtoDownload.download = urlFile.name;
    elementAtoDownload.click();
  }

  const handleUploadFIle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fileInput = document.getElementById('fileConverInput') as HTMLInputElement;
    const selectedFile: File | undefined = fileInput?.['files']?.[0];

    if (!selectedFile) {
      alert('Please select a file.');
      return;
    } else {
      uploadFileContent(selectedFile);
      setModalStatus(true);
    }
  }

  const loadingSpinner = () => {
    return (
      <motion.div
        className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    );
  }

  return (
    <div className=" flex items-center justify-center min-h-screen">
      <div className="w-4/12 h-screen px-14 flex flex-col items-center justify-center border-4 border-[#ffffff] rounded-xl  bg-red-700">
        <div className="flex flex-col gap-4 items-center justify-center text-white rounded-t-xl py-6">
          <h2 className="text-2xl font-bold">PDF File Converter</h2>
          <p className="text-lg">This website allows you to easily convert your documents into PDF format.</p>
        </div>
      </div>

      <div className="w-8/12 h-screen px-14" id="mom">
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
        {modalStatus && (
          <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
            <div className="w-3/12 h-1/6 bg-white rounded-xl flex flex-col items-center justify-center gap-4">
              <h1 className="text-lg">Loading</h1>
              {
                loadingSpinner()
              }
            </div>
          </div>
        )}
      </div>


    </div>

  );
}
