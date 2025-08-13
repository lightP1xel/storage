import { useState } from 'react';
import axios from 'axios';
import { notification } from 'antd'

export const FileSave = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState('');
  const [serverFilePath, setServerFilePath] = useState('');
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type, message, description) => {
    api[type]({
      message: message,
      description: description,
    });
  };

  const SERVER_UPLOAD_URL = 'http://localhost:8080/upload';

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setUploadStatus('');
      setUploadProgress(0);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus('Пожалуйста, выберите файл');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('fileName', selectedFile.name);

    try {      
      const response = await axios.post(SERVER_UPLOAD_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        },
      });

      setServerFilePath(response.data.filePath);
      setUploadStatus('успешно')
      openNotificationWithIcon('success', `Файл ${uploadStatus} загружен в хранилище.`, `Путь к сохранённому файлу: ${serverFilePath}.`)
    } catch (error) {
      console.error('Ошибка загрузки:', error);
      setUploadStatus(`Ошибка: ${error.message}`);
      openNotificationWithIcon('error', 'Файл не загружен в хранилище', `Ошибка: ${error.message}`)
    }
  };

  return (
  <>
        {contextHolder}
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2>Загрузка файла на сервер</h2>
            
            <div style={{ marginBottom: '15px' }}>
                <input 
                type="file" 
                onChange={handleFileChange} 
                style={{ marginBottom: '10px' }}
                />
            </div>
            
            <button 
                onClick={handleUpload} 
                disabled={!selectedFile}
                style={{
                padding: '8px 16px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
                }}
            >
                Загрузить на сервер
            </button>
            
            {selectedFile && (
                <div style={{ marginTop: '15px' }}>
                <p>Выбранный файл: {selectedFile.name}</p>
                <p>Размер: {(selectedFile.size / 1024).toFixed(2)} KB</p>
                <p>Тип: {selectedFile.type || 'неизвестен'}</p>
                </div>
            )}
            </div>
    </>
    
  );
};