
import react from 'react'

export default function CustomTitle({ title }) {
  return (
    <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
      {title}
    </h1>
  )
}