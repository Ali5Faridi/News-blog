
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import React, { useState } from 'react';
// import { Navigate } from 'react-router-dom';

// const modules = {
//     toolbar: {
//         container: [
//             [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
//             [{size: []}],
//             ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//             [{'list': 'ordered'}, {'list': 'bullet'}, 
//              {'indent': '-1'}, {'indent': '+1'}],
//             ['link', 'image', 'video'],
//             ['clean']
//         ],
//         handlers: {
//             image: imageHandler
//         }
//     },
// };

// const formats = [
//     'header', 'font', 'size',
//     'bold', 'italic', 'underline', 'strike', 'blockquote',
//     'list', 'bullet', 'indent',
//     'link', 'image', 'video'
// ];

// function imageHandler() {
//     const input = document.createElement('input');
//     input.setAttribute('type', 'file');
//     input.setAttribute('accept', 'image/*');
//     input.click();

//     input.onchange = async () => {
//         const file = input.files[0];
//         const formData = new FormData();
//         formData.append('file', file);

//         const response = await fetch('http://localhost:8000/upload', {
//             method: 'POST',
//             body: formData,
//         });

//         if (response.ok) {
//             const data = await response.json();
//             const url = data.url;
//             const quill = this.quill;
//             const range = quill.getSelection();
//             quill.insertEmbed(range.index, 'image', url);
//         } else {
//             console.error('Image upload failed');
//         }
//     };
// }

// export default function CreatePost() {
//     const [title, setTitle] = useState('');
//     const [summary, setSummary] = useState('');
//     const [content, setContent] = useState('');
//     const [files, setFiles] = useState('');
//     const [redirect, setRedirect] = useState(false);

//     async function createNewPost(ev) {
//         const data = new FormData();
//         data.set('title', title);
//         data.set('summary', summary);
//         data.set('content', content);
//         data.set('file', files[0]);

//         ev.preventDefault();
//         const response = await fetch('http://localhost:8000/post', {
//             method: 'POST',
//             body: data,
//             credentials: 'include',
//         });
//         if (response.ok) {
//             setRedirect(true);
//         }
//     }

//     if (redirect) {
//         return <Navigate to={'/'} />
//     }

//     return (
//         <form onSubmit={createNewPost}>
//             <input type="text" placeholder='title' value={title} onChange={ev => setTitle(ev.target.value)} />
//             <input type="summary" placeholder='summary' value={summary} onChange={ev => setSummary(ev.target.value)} />
//             <input type="file" onChange={ev => setFiles(ev.target.files)} />
//             <ReactQuill value={content} onChange={newValue => setContent(newValue)} modules={modules} formats={formats} />
//             <button style={{ marginTop: '5px', backgroundColor: 'green' }}>Create post</button>
//         </form>
//     )
// }

//////////////////////////////////////////////

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

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
    },
};

const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
];

function imageHandler() {
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
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            const url = data.url;
            const quill = this.quill;
            const range = quill.getSelection();
            quill.insertEmbed(range.index, 'image', url);
        } else {
            console.error('Image upload failed');
        }
    };
}

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);

    async function createNewPost(ev) {
        ev.preventDefault();

        // ابتدا محتوای تصاویر را اصلاح می‌کنیم
        const contentWithImages = await handleImagesInContent(content);

        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', contentWithImages);  // ارسال محتوای اصلاح‌شده
        data.set('file', files[0]);

        const response = await fetch('http://localhost:8000/post', {
            method: 'POST',
            body: data,
            credentials: 'include',
        });

        if (response.ok) {
            setRedirect(true);
        }
    }

    // بررسی و اصلاح تصاویر در متن
    const handleImagesInContent = async (content) => {
        const imageMatches = content.match(/<img[^>]+src="([^">]+)"/g);
        if (imageMatches) {
            for (const imageTag of imageMatches) {
                const imageUrl = imageTag.match(/src="([^">]+)"/)[1];
                if (!imageUrl.startsWith('http')) {  // اگر URL تصویر صحیح نیست
                    const imageUrlFromServer = await handleImageUpload(imageUrl);  // آپلود تصویر و دریافت URL
                    content = content.replace(imageUrl, imageUrlFromServer);  // جایگزینی URL تصویر
                }
            }
        }
        return content;
    };

    // آپلود تصویر و دریافت URL از سرور
    const handleImageUpload = async (imageUrl) => {
        const formData = new FormData();
        formData.append('file', imageUrl);
        const response = await fetch('http://localhost:8000/upload', {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        return data.url;  // برگرداندن URL تصویر آپلود شده
    };

    if (redirect) {
        return <Navigate to={'/'} />;
    }

    return (
        <form onSubmit={createNewPost}>
            <input type="text" placeholder='title' value={title} onChange={ev => setTitle(ev.target.value)} />
            <input type="summary" placeholder='summary' value={summary} onChange={ev => setSummary(ev.target.value)} />
            <input type="file" onChange={ev => setFiles(ev.target.files)} />
            <ReactQuill value={content} onChange={newValue => setContent(newValue)} modules={modules} formats={formats} />
            <button style={{ marginTop: '5px', backgroundColor: 'green' }}>Create post</button>
        </form>
    )
}
