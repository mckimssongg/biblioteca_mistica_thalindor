import React from 'react'
import Delete from '../../Iconos/BookList/Delete';

export default function BottonDelete({ onDelete }) {
  return (
    <button onClick={onDelete}>
      <Delete />
    </button>
  )
}