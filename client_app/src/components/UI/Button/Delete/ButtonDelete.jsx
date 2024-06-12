import React from 'react'
import Delete from '../../Iconos/BookList/Delete';

export default function BottonDelete({ onDelete }) {
  return (
    <button type="button" class="btn btn-outline-light" onClick={onDelete}>
      <Delete />
    </button>
  )
}