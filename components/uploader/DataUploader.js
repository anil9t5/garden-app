import { useState } from "react"
import { FileUploader } from "react-drag-drop-files"

const DataUploader = () => {
  const fileTypes = ["JSON"]
  const [file, setFile] = useState(null)
  const handleChange = (file) => {
    setFile(file)
  }
  return (
    <div>
      <h4>Drag and drop files</h4>
      <div className="dropzone">
        <div className="d-flex justify-content-center align-items-center">
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
          />
          <p>{file ? `File name: ${file.name}` : "no files uploaded yet"}</p>
        </div>
      </div>
      <style jsx>{`
        .dropzone {
          width: 500px;
          height: 500px;
          background-color: #f8f9fa;
          border: 1px solid #e0e1e3;
        }
      `}</style>
    </div>
  )
}

export default DataUploader
