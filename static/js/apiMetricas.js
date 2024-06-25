//Obtener todas las metricas
    fetch('http://localhost:3000/api/metrics', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => console.log('Métricas:', data))
    .catch(error => console.error('Error:', error));

//Crear una nueva metrica
    const newMetric = {
        type: 'clicks',
        value: 100,
        timestamp: '2023-06-24T12:00:00Z'
    };
    
    fetch('http://localhost:3000/api/metrics', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMetric)
    })
    .then(response => response.json())
    .then(data => console.log('Nueva métrica creada:', data))
    .catch(error => console.error('Error:', error));

//Obtener metricas de rendimiento
    fetch('http://localhost:3000/api/metrics/performance', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => console.log('Métricas de rendimiento:', data))
    .catch(error => console.error('Error:', error));

//Obtener metricas de clics
    fetch('http://localhost:3000/api/metrics/clicks', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => console.log('Métricas de clics:', data))
    .catch(error => console.error('Error:', error));

//Obtener metricas de visitas
    fetch('http://localhost:3000/api/metrics/visits', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => console.log('Métricas de visitas:', data))
    .catch(error => console.error('Error:', error));

//Obtener una metrica especifica por su ID
    const metricId = '60c72b2f9b1e8b001c8e4a5d'; // Reemplaza con el ID de la métrica que deseas obtener

    fetch(`http://localhost:3000/api/metrics/${metricId}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
    })
    .then(response => response.json())
    .then(data => console.log('Métrica específica:', data))
    .catch(error => console.error('Error:', error));

//Actualizar una metrica especifica por su ID
    const metricId2 = '60c72b2f9b1e8b001c8e4a5d'; // Reemplaza con el ID de la métrica que deseas actualizar
    const updatedMetric = {
    type: 'performance',
    value: 95,
    timestamp: '2023-06-24T12:00:00Z'
    };

    fetch(`http://localhost:3000/api/metrics/${metricId}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedMetric)
    })
    .then(response => response.json())
    .then(data => console.log('Métrica actualizada:', data))
    .catch(error => console.error('Error:', error));

//Eliminar una metrica especifica por su ID
const metricId3 = '60c72b2f9b1e8b001c8e4a5d'; // Reemplaza con el ID de la métrica que deseas eliminar

    fetch(`http://localhost:3000/api/metrics/${metricId3}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
    })
    .then(response => {
    if (response.status === 204) {
        console.log('Métrica eliminada');
    } else {
        console.error('Error al eliminar la métrica');
    }
    })
    .catch(error => console.error('Error:', error));

