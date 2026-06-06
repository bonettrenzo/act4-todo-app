import { useState, useEffect } from 'react'


export default function useTareas() {
  const [tareas, setTareas] = useState(() => {
    return JSON.parse(localStorage.getItem('mis_tareas')) || []
  })
  
  const [nuevaTarea, setNuevaTarea] = useState('')

  useEffect(() => {
    localStorage.setItem('mis_tareas', JSON.stringify(tareas))
  }, [tareas])

  // Lógica para agregar
  const manejarAgregar = (e) => {
    e.preventDefault()
    if (!nuevaTarea.trim()) return

    setTareas([...tareas, {
      id: Date.now(),
      texto: nuevaTarea,
      completada: false
    }])
    setNuevaTarea('')
  }

  const manejarAlternarCompletada = (id) => {
    setTareas(prev => prev.map(t => t.id === id ? { ...t, completada: !t.completada } : t))
  }

  const manejarEliminar = (id) => {
    setTareas(prev => prev.filter(t => t.id !== id))
  }

  const manejarLimpiarCompletadas = () => {
    setTareas(prev => prev.filter(t => !t.completada))
  }

  const tareasPendientes = tareas.filter(t => !t.completada).length
  const tieneCompletadas = tareas.length > tareasPendientes

  return {
    tareas,
    nuevaTarea,
    setNuevaTarea,
    tareasPendientes,
    tieneCompletadas,
    manejarAgregar,
    manejarAlternarCompletada,
    manejarEliminar,
    manejarLimpiarCompletadas
  }
}