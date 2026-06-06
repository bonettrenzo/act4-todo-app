import { useState, useEffect } from 'react'

function App() {
  // feature/persistencia-localstorage: Inicializamos el estado con lo que haya en localStorage
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem('mis_tareas')
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : []
  })
  
  const [nuevaTarea, setNuevaTarea] = useState('')

  // feature/persistencia-localstorage: Guardamos en localStorage cada vez que las tareas cambien
  useEffect(() => {
    localStorage.setItem('mis_tareas', JSON.stringify(tareas))
  }, [tareas])

  // feature/agregar-tareas
  const manejarAgregar = (e) => {
    e.preventDefault()
    if (!nuevaTarea.trim()) return // Evita tareas vacías

    const tareaNueva = {
      id: Date.now(), // ID único basado en el tiempo
      texto: nuevaTarea,
      completada: false
    }

    setTareas([...tareas, tareaNueva])
    setNuevaTarea('') // Limpiar el input
  }

  // feature/completar-tareas
  const manejarAlternarCompletada = (id) => {
    const tareasActualizadas = tareas.map(tarea => 
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    )
    setTareas(tareasActualizadas)
  }

  // feature/eliminar-tareas
  const manejarEliminar = (id) => {
    const tareasFiltradas = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareasFiltradas)
  }

  // feature/limpiar-tareas-completadas
  const manejarLimpiarCompletadas = () => {
    const tareasPendientes = tareas.filter(tarea => !tarea.completada)
    setTareas(tareasPendientes)
  }

  // feature/contador-pendientes
  const tareasPendientes = tareas.filter(tarea => !tarea.completada).length

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Mi Lista de Tareas</h1>

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

      {/* Lista de tareas */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tareas.map(tarea => (
          <li 
            key={tarea.id} 
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
                color: tarea.completada ? '#888' : '#fefefe'
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
        ))}
      </ul>

      {/* Botón para limpiar completadas */}
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