import { useState, useEffect } from 'react'
import useTareas from './hooks/useTareas'
import CustomTitle from './componets/CustomTitle'
import TodoItem from './componets/TodoItem'

function App() {

  const {
      tareas,
      nuevaTarea,
      setNuevaTarea,
      tareasPendientes,
      tieneCompletadas,
      manejarAgregar,
      manejarAlternarCompletada,
      manejarEliminar,
      manejarLimpiarCompletadas
    } = useTareas()

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <CustomTitle title="Mi Lista de Tareas" />

      {/* Formulario para agregar tareas */}
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

      {/* Contador de pendientes */}
      <div style={{ marginBottom: '20px', fontWeight: 'bold', color: '#555' }}>
        {tareasPendientes === 0 
          ? "🎉 ¡No tienes tareas pendientes!" 
          : `Tienes ${tareasPendientes} ${tareasPendientes === 1 ? 'tarea pendiente' : 'tareas pendientes'}`
        }
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tareas.map(tarea => (
          <TodoItem
            key={tarea.id} 
            tarea={tarea} 
            manejarAlternarCompletada={manejarAlternarCompletada}
            manejarEliminar={manejarEliminar}
          />
        ))}
      </ul>

      {tareas.length > tareasPendientes && (
        <button 
          onClick={manejarLimpiarCompletadas}
          style={{ marginTop: '20px', padding: '10px', width: '100%', background: '#666', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Limpiar tareas completadas
        </button>
      )}
    </div>
  )
}

export default App