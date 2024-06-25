//Peticion de inicio de sesion
    const login = async (username, password) => {
        const url = 'http://localhost:5001/api/login';
    
        const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
        });
    
        if (response.ok) {
        const data = await response.json();
        console.log('Inicio de sesión exitoso:', data);
        return data;  // Aquí puedes manejar el usuario_id u otra información que necesites
        } else {
        const errorData = await response.json();
        console.error('Error de inicio de sesión:', errorData);
        throw new Error(errorData.message);
        }
    };
    
    // Ejemplo de uso
    login('usuario1', 'password123')
        .then(data => console.log('Datos recibidos:', data))
        .catch(error => console.error('Error:', error));
    
//Peticion para obtener datos del usuario
    const getUserData = async (usuarioId) => {
        const url = `http://localhost:5001/api/usuarios/${usuarioId}`;
    
        const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        });
    
        if (response.ok) {
        const data = await response.json();
        console.log('Datos del usuario:', data);
        return data;  // Aquí puedes manejar los datos del usuario según tus necesidades
        } else {
        const errorData = await response.json();
        console.error('Error al obtener datos del usuario:', errorData);
        throw new Error(errorData.message);
        }
    };
    
    // Ejemplo de uso
    getUserData('123456')
        .then(data => console.log('Datos del usuario:', data))
        .catch(error => console.error('Error:', error));
    