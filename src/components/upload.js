import React, { useState } from 'react';

const Upload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!file) {
            alert("Please select a file before uploading!");
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        fetch('/upload', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                alert("File uploaded successfully!");
                console.log(data);
            })
            .catch((error) => {
                alert("Error uploading file!");
                console.error(error);
            });
    };

    return (
        <>
        <div className='upload-container'>
            <h1>File Upload</h1>
            <form className="upload-form" onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
        </div>

        <footer>
            <p>&copy; 2024 All rights reserved.</p>
        </footer>
        </>
    );
};

export default Upload;