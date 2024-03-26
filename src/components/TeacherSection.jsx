// src/components/NotesApp.js

import React, { useState, useRef } from 'react';
import './scribble.css';

const NotesApp = ({ onAddNote }) => {
  const [input, setInput] = useState('');
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isErasing, setIsErasing] = useState(false);
  const A4_WIDTH = 595;
  const A4_HEIGHT = 842;

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

  return (
    <div className="notes-container">
      <h1>Write Your Answer</h1>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
        onMouseOut={endDrawing}
        width={A4_WIDTH}
        height={A4_HEIGHT}
      ></canvas>
      <div className="input-container">
        <button onClick={addNote}>Add</button>
        <button onClick={toggleEraser}>Eraser</button>
      </div>
    </div>
  );
};

export default NotesApp;
