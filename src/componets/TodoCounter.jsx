function TodoCounter({ tareasPendientes }) {
  return (
    <div style={{ marginBottom: '20px', fontWeight: 'bold', color: '#555' }}>
      {tareasPendientes === 0 
        ? "🎉 ¡No tienes tareas pendientes!" 
        : `Tienes ${tareasPendientes} ${tareasPendientes === 1 ? 'tarea pendiente' : 'tareas pendientes'}`
      }
    </div>
  )
}
export default TodoCounter