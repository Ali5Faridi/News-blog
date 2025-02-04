
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);

    // **📌 تابع مدیریت آپلود تصویر در ReactQuill**
    const imageHandler = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            const file = input.files[0];
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch('http://localhost:8000/upload', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                const editor = quillRef.current.getEditor();
                const range = editor.getSelection();
                editor.insertEmbed(range.index, 'image', data.url);
            }
        };
    };

    // **📌 تنظیمات Quill و اضافه کردن imageHandler**
    const modules = {
        toolbar: {
            container: [
                [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                [{size: []}],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'}, 
                 {'indent': '-1'}, {'indent': '+1'}],
                ['link', 'image', 'video'],
                ['clean']
            ],
            handlers: {
                image: imageHandler
            }
        }
    };

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
    ];

    async function createNewPost(ev){
        ev.preventDefault();

        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        if (files.length > 0) {
            data.set('file', files[0]);
        }

        const response = await fetch('http://localhost:8000/post', {
            method: 'POST',
            body: data,
            credentials: 'include',
        });

        if (response.ok){
            setRedirect(true);  
        }
    }

    if (redirect){
        return <Navigate to={'/'} />
    }

    return (
        <form onSubmit={createNewPost}>
            <input type="text" placeholder='title' value={title} onChange={ev => setTitle(ev.target.value)} />
            <input type="text" placeholder='summary' value={summary} onChange={ev => setSummary(ev.target.value)} />
            <input type="file" onChange={ev => setFiles(ev.target.files)} />
            <ReactQuill value={content} onChange={setContent} modules={modules} formats={formats} />
            <button style={{marginTop:'5px'}}>Create post</button>
        </form>
    );
}
