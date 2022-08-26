import React, { useState } from "react";

const Input: React.FC<{ onSubmit: Function }> = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  return <form 
    action="post" 
    className='flex flex-col space-y-2' 
    onSubmit={(evt) => { 
      evt.preventDefault();
      onSubmit(input)
  }}>
    <textarea 
      value={input} 
      maxLength={150}
      minLength={1}
      placeholder={'Add a response to this review!'}
      required
      rows={3}
      cols={50}
      onChange={(evt) => setInput(evt.target.value) }
      className='text-black bg-slate-200 w-full max-w-full max-h-28 p-3 border border-slate-400'
    />
    <button type='submit' className='bg-slate-800 p-3 rounded hover:bg-slate-900 self-end text-white'>Submit</button>
  </form>
}

export default Input