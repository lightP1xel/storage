import axios from "axios";
import { useEffect, useState } from "react";

export const FileAll = () => {
    const [files, setFiles] = useState([]);
    const [error, setError] = useState(null);

    const SERVER_GET_URL = 'http://localhost:8080/files';

    useEffect(() => {
        const getFiles = async () => {
            try {
                const getFiles = await axios.get(SERVER_GET_URL);
                setFiles(getFiles.data);
            } catch (err) {
                setError('Не удалось загрузить список файлов');
                console.error('Ошибка при загрузке файлов:', err);
            }
        };
        getFiles()
    }, [])

    return (
        <div>
            <p>Все файлы в хранилище:</p>
            {files.length === 0 ? (<p>Файлы не найдены...</p>) : (files.map(({ name, path, size, modTime }) => (
             <div key={name}>
                <hr />
                <p>Наименование файла:{name}</p>
                <p>Путь к файлу на сервере:{path}</p>
                <a 
                    href={`http://localhost:8080${path}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Скачать
                </a>
                <hr />
             </div>
            )))}

        </div>
    )
}