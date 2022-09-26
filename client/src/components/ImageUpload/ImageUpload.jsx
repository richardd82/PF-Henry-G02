import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uploadImage } from '../../redux/actions';

export default function ImageUpload({user}) {
    const dispatch = useDispatch()
    const [uploading, setUploading] = useState(false)
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    
    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!selectedFile) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = async () => {
            setUploading(true)
            dispatch(await uploadImage(reader.result, (user.id)));
            setUploading(false)
            setFileInputState('');
            setPreviewSource('');
        };
        reader.onerror = (error) => {
            console.error(error ,'AHHHHHHHH!!');
        };
    };


    return (
        <div>
            {uploading === false ? 
            <div>  
                <h1>Upload an Image</h1>
                <form onSubmit={handleSubmitFile}>
                    <input
                        id="fileInput"
                        type="file"
                        name="image"
                        onChange={handleFileInputChange}
                        value={fileInputState}
                    />
                    <button color="white" type="submit">
                        Submit
                    </button>
                </form>
                {previewSource && (
                    <img
                        src={previewSource}
                        alt="chosen"
                        style={{ height: '300px', width:'300px' }}
                    />
                )}
            </div> : <div>Uploading...</div> }
        </div>
    );
}