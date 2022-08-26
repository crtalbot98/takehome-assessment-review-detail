import React, { useState } from "react";
import Input from "./Input";

export interface IResponse {
  id: string
  content: string
  author: string
  date: string | Date
}

export const Response: React.FC<{ response: IResponse, onSubmit: Function }> = ({ response, onSubmit }) => {
  const [editOpen, setEditOpen] = useState<boolean>(false);

  const editResponse = () => {
    setEditOpen(!editOpen);
  }

  const submitEdit = (value: string) => {
    setEditOpen(false);
    onSubmit(response.id, value)
  }

  return <div className='bg-slate-300 p-3 rounded text-black flex flex-col justify-start'>
    <button 
      onClick={editResponse}
      className='absolute self-end'
    >{ !editOpen ? 'Edit' : 'Close' }</button>
    <h2>{ response.author }</h2>
    <p>{ response.date.toLocaleString() }</p>
    <p className='mb-2'>{ response.content }</p>
    { editOpen && <Input onSubmit={submitEdit}/> }
  </div>
}