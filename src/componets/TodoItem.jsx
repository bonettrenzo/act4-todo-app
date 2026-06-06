function TodoItem({ tarea, manejarAlternarCompletada, manejarEliminar }) {
  return (
    <li 
      style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid #eee',
        backgroundColor: tarea.completada ? '#f9f9f9' : 'transparent'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input 
          type="checkbox" 
          checked={tarea.completada} 
          onChange={() => manejarAlternarCompletada(tarea.id)}
          style={{ cursor: 'pointer' }}
        />
        <span style={{ 
          textDecoration: tarea.completada ? 'line-through' : 'none',
          color: tarea.completada ? '#888' : '#000'
        }}>
          {tarea.texto}
        </span>
      </div>
      <button 
        onClick={() => manejarEliminar(tarea.id)}
        style={{ background: '#ff4d4d', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
      >
        Eliminar
      </button>
    </li>
  )
}