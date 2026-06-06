function TodoForm({ nuevaTarea, setNuevaTarea, manejarAgregar }) {
  return (
    <form onSubmit={manejarAgregar} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input 
        type="text" 
        placeholder="Escribe una nueva tarea..." 
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        style={{ flexGrow: 1, padding: '8px', fontSize: '16px' }}
      />
      <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>Agregar</button>
    </form>
  )
}
export default TodoForm