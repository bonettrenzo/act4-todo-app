function TodoClearButton({ tieneCompletadas, manejarLimpiarCompletadas }) {
  if (!tieneCompletadas) return null

  return (
    <button 
      onClick={manejarLimpiarCompletadas}
      style=
      {{ marginTop: '20px', padding: '10px', width: '100%', background: '#666', color: 'white', border: 'none', 
        borderRadius: '4px', cursor: 'pointer' }}
    >
      Limpiar tareas completadas
    </button>
  )
}
export default TodoClearButton