// src/components/NotesApp.js

import React, { useState, useRef } from 'react';
import './scribble.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import html2canvas from 'html2canvas';

const ScribblePage = ({ onAddNote }) => {
    const [input, setInput] = useState('');
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [isErasing, setIsErasing] = useState(false);
    const A4_WIDTH = 815;
    const A4_HEIGHT = 1000;

    const startDrawing = (event) => {
        const ctx = canvasRef.current.getContext('2d');
        if (isErasing) {
            ctx.globalCompositeOperation = 'destination-out';
        } else {
            ctx.globalCompositeOperation = 'source-over';
        }
        setIsDrawing(true);
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#000000';
        const x = (event.nativeEvent.offsetX * A4_WIDTH) / canvasRef.current.offsetWidth;
        const y = (event.nativeEvent.offsetY * A4_HEIGHT) / canvasRef.current.offsetHeight;
        ctx.beginPath();
        ctx.moveTo(x, y);
    };

    const draw = (event) => {
        if (!isDrawing) return;
        const ctx = canvasRef.current.getContext('2d');
        const x = (event.nativeEvent.offsetX * A4_WIDTH) / canvasRef.current.offsetWidth;
        const y = (event.nativeEvent.offsetY * A4_HEIGHT) / canvasRef.current.offsetHeight;
        ctx.lineTo(x, y);
        ctx.stroke();
    };

    const endDrawing = () => {
        setIsDrawing(false);
    };

    const toggleEraser = () => {
        setIsErasing(!isErasing);
    };

    const addNote = () => {
        const dataUrl = canvasRef.current.toDataURL();
        const newNote = {
            id: Date.now(),
            dataUrl,
            marks: ''
        };
        onAddNote(newNote);
        clearCanvas();
    };

    const clearCanvas = () => {
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    };

    const handleSaveImage = async () => {
        try {
            const canvas = await html2canvas(canvasRef.current);
            const dataURL = canvas.toDataURL();
            setArray([...array, { id: array.length + 1, img: dataURL }])
        } catch (error) {
            console.error('Error saving image:', error);
        }
    };

    const [array, setArray] = useState([]);
    const handleSubmit = () => {
        handleSaveImage();
        toast.success("submitted successfully!", { autoClose: 2000, });
    }

    const [imageState, setImageState] = useState(null);

    return (
        <>
            <div className='notes-main'>
                <h1>Write Your Answer</h1>
                <ToastContainer />
                <div className='notes-container'>
                    <canvas
                        ref={canvasRef}
                        onMouseDown={startDrawing}
                        onMouseMove={draw}
                        onMouseUp={endDrawing}
                        onMouseOut={endDrawing}
                        width={A4_WIDTH}
                        height={A4_HEIGHT}
                    ></canvas>
                </div>
                <div className="input-container">
                    <button onClick={addNote}>Add</button>
                    <button onClick={toggleEraser}>{isErasing ? "Write" : "Eraser"}</button>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>

            <div className='submission-history'>
                {array.map((val, index) => {
                    return (
                        <div className='notesSection' key={index} onClick={() => setImageState(val.img)}>
                            Submission - {val.id}
                            <img key={val.id} src={val.img} alt='' />
                        </div>
                    )
                })}
            </div>

            {imageState && <div className='popup' onClick={()=>setImageState(null)}>
                <img src={imageState} className='inner' onClick={(e)=>e.preventDefault()}/>
            </div>}
        </>
    );
};

export default ScribblePage;
