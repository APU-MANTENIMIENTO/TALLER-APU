import { supabase } from './supabase.js'

async function cargarHistorico() {
  const { data, error } = await supabase
    .from('HISTORICO_BD')  // ⚠️ Respeta las mayúsculas
    .select('*')
    .order('Fecha', { ascending: false })

  if (error) {
    console.error('Error al cargar:', error)
    return []
  }

  console.log('Registros cargados:', data)
  return data
}

// Ejecutar al cargar la página
cargarHistorico().then(registros => {
  // Aquí renderizas los datos en tu HTML
  const tabla = document.getElementById('tabla-historico')
  registros.forEach(r => {
    const fila = `<tr>
      <td>${r.Placa}</td>
      <td>${r.Fecha}</td>
      <td>${r.Carroceria}</td>
      <td>${r.Modelo}</td>
    </tr>`
    tabla.innerHTML += fila
  })
})
