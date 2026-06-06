import useTareas from './hooks/useTareas'
import CustomTitle from './componets/CustomTitle'
import TodoForm from './componets/TodoForm'
import TodoCounter from './componets/TodoCounter'
import TodoItem from './componets/TodoItem'
import TodoClearButton from './componets/TodoClearButton'

function App() {
  const t = useTareas() // Usamos un alias corto para mapear las propiedades directo del hook

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <CustomTitle title="Mi Lista de Tareas" />

      <TodoForm 
        nuevaTarea={t.nuevaTarea} 
        setNuevaTarea={t.setNuevaTarea} 
        manejarAgregar={t.manejarAgregar} 
      />

      <TodoCounter tareasPendientes={t.tareasPendientes} />

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {t.tareas.map(tarea => (
          <TodoItem 
            key={tarea.id} 
            tarea={tarea} 
            manejarAlternarCompletada={t.manejarAlternarCompletada}
            manejarEliminar={t.manejarEliminar}
          />
        ))}
      </ul>

      <TodoClearButton 
        tieneCompletadas={t.tieneCompletadas} 
        manejarLimpiarCompletadas={t.manejarLimpiarCompletadas} 
      />
    </div>
  )
}

export default App