
//http es el módulo que permite crear un servidor que pueda atender peticiones http
const http = require('http');

const server = http.createServer( (request, response) => {    

    console.log(request.url);

    if(request.url === "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Lectura de Signos</h1>"); 
        response.write('<a href="/signos">Haz click para concer más acerca de tu signo zodiacal</a>');
        response.end();
        
    } else if (request.url === "/signos" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Signos Zodiacales</h1>");
        response.write('<form action="/signos" method="POST">');

        let radios = '<fieldset><legend>¿Qué signo zodiacla eres?</legend>';

        radios += '<div><input type="radio" id="aries" name="zodiaco" value="aries" checked>';
        radios += '<label for="aries"> Aries </label></div><br>';

        radios += '<div><input type="radio" id="tauro" name="zodiaco" value="tauro">';
        radios += '<label for="tauro"> Tauro </label></div><br>';

        radios += '<div><input type="radio" id="geminis" name="zodiaco" value="geminis">';
        radios += '<label for="geminis"> Géminis </label></div><br>';

        radios += '<div><input type="radio" id="cancer" name="zodiaco" value="cancer">';
        radios += '<label for="cancer"> Cáncer </label></div><br>';

        radios += '<div><input type="radio" id="leo" name="zodiaco" value="leo">';
        radios += '<label for="leo"> Leo </label></div><br>';

        radios += '<div><input type="radio" id="virgo" name="zodiaco" value="virgo">';
        radios += '<label for="virgo"> Virgo </label></div><br>';

        radios += '<div><input type="radio" id="libra" name="zodiaco" value="libra">';
        radios += '<label for="libra"> Libra </label></div><br>';

        radios += '<div><input type="radio" id="escorpio" name="zodiaco" value="escorpio">';
        radios += '<label for="escorpio"> Escorpio </label></div><br>';

        radios += '<div><input type="radio" id="sagitario" name="zodiaco" value="sagitario">';
        radios += '<label for="sagitario"> Sagitario  </label></div><br>';

        radios += '<div><input type="radio" id="capricornio" name="zodiaco" value="capricornio">';
        radios += '<label for="capricornio"> Capricornio </label></div><br>';

        radios += '<div><input type="radio" id="acuario" name="zodiaco" value="acuario">';
        radios += '<label for="acuario"> Acuario</label></div><br>';

        radios += '<div><input type="radio" id="piscis" name="zodiaco" value="piscis">';
        radios += '<label for="piscis"> Piscis  </label></div></fieldset><br>';

        response.write(radios);

        //response.write('<label for="extras">¿Con qué deseas tus chilaquiles?</label>');
        //response.write('<input type="text" id="extras" name="extras"><br><br>');

        response.write('<input type="submit" value="Ordenar">');

        response.write("</form>");
        response.write('</body></html>');
        response.end();
    } else if (request.url === "/signos" && request.method === "POST") {

        const datos = [];

        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const zodiaco = datos_completos.split('&')[0].split('=')[1];
            console.log(zodiaco);

            if(zodiaco === "aries") {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("Me caes mal");
                response.write('<img alt="chilaquiles rojos" src="https://sazondemama.com/wp-content/uploads/2022/09/Como-hacer-la-receta-de-chilaquiles-rojos-y-cuantas-calorias-tiene-768x432.jpg">');
                return response.end();

            } else {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("<Eres mala onda>");
                response.write('<img alt="chilaquiles tauro" src="https://i.pinimg.com/736x/9a/c3/2b/9ac32b9b26902dc6708d835d6b8d0954.jpg">');
                return response.end();
            }
            
        });

        
    } else {
        response.statusCode = 404;
        response.write("Lo sentimos, de esos chilaquiles no tenemos");
        response.end();
    }

    
    
});

server.listen(3000);