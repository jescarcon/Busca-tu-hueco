import React, { useState } from "react";
import {BASE_API_URL} from '../../../constants';

export default function Documents() {
  //#region Variables

  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string>("");

  //#endregion

  //#region Logic

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file); 

    try {
      const res = await fetch(`${BASE_API_URL}/documents/upload`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Error en la subida");

      const data = await res.json();
      setResult(data.extractedText);
      
    } catch (err) {
      console.error(err);
      setResult("Error al procesar OCR");
    }
  };

  //#endregion

  return (
    <div>
      <h2>Escanear documento</h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <button onClick={handleUpload}>Procesar OCR</button>

      {result && (
        <div>
          <h3>Texto detectado:</h3>
          <pre>{result}</pre>
        </div>
      )}

    </div>
  );
}
