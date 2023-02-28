
//http es el módulo que permite crear un servidor que pueda atender peticiones http

const http = require('http');

const server = http.createServer( (request, response) => {    

    console.log(request.url);

    if(request.url === "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write('<link rel="stylesheet" type="text/css" href="style.css">');
        response.write('<h1 Signos Zodiaca'); 
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

        response.write('<input type="submit" value="CONSULTAR">');

        response.write("</form>");
        response.write('</body></html>');
        response.end();
    } 
    
    
    else if (request.url === "/signos" && request.method === "POST") {

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
                response.write('<h1>ARIES</h1>');
                response.write('<img alt="signo de aries" src=https://asknebula.com/app/static/media/aries-large.c5d724e95ea618d7e55ac05107b6c9a0.svg>');
                response.write('<h2> Características: </h2>')
                response.write('<p>Aries forma parte de los signos cardinales y al mismo tiempo es un signo de fuego; también es el primer signo del zodíaco, precisamente por eso, simboliza el inicio, la creación. Se caracteriza por ser una persona rebosante de energía y entusiasmo; avanzada y aventurera, adora la libertad, los retos y las nuevas ideas.</p>')
                return response.end();

            } 

            else if(zodiaco === "tauro")
            {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("<h1>TAURO</h1>");
                response.write('<img alt="signo tauro" src="https://asknebula.com/app/static/media/taurus-large.3325049abfec2059ab969bfb39ec7572.svg">');
                return response.end();
            }
            
            else if(zodiaco === "geminis")
            {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("<h1>GEMINIS</h1>");
                response.write('<img alt="signo geminis" src="https://asknebula.com/app/static/media/gemini-large.4d8246258ab5682c2ea048e40b86c971.svg">');
                return response.end();
            }

            else if(zodiaco === "cancer")
            {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("<h1>CANCER</h1>");
                response.write('<img alt="signo cancer" src="https://asknebula.com/app/static/media/cancer-large.f3ebc9336ba69efb61a2f715d91f3f88.svg">');
                return response.end();
            }

            else if(zodiaco === "leo")
            {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("<h1>LEO</h1>");
                response.write('<img alt="signo leo" src="https://asknebula.com/app/static/media/leo-large.fff4b111ce27cc3d7655242f3cd24ee9.svg">');
                return response.end();
            }

            else if(zodiaco === "virgo")
            {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("<h1>VIRGO</h1>");
                response.write('<img alt="signo virgo" src="https://asknebula.com/app/static/media/virgo-large.21ce27386b8e7f2496e03b838e8cba61.svg">');
                return response.end();
            }

            else if(zodiaco === "libra")
            {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("<h1>LIBRA</h1>");
                response.write('<img alt="signo libra" src="https://asknebula.com/app/static/media/libra-large.68821583ca62d469ceed920ea7eb4a7f.svg">');
                return response.end();
            }

            else if(zodiaco === "escorpio")
            {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("<h1>ESCORPIO</h1>");
                response.write('<img alt="signo escorpio" src="https://asknebula.com/app/static/media/scorpio-large.d11994430d8e3ebddcdc0eb0d50a84ea.svg">');
                return response.end();
            }

            else if(zodiaco === "sagitario")
            {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("<h1>SAGITARIO</h1>");
                response.write('<img alt="signo sagitario" src="https://asknebula.com/app/static/media/sagittarius-large.1e1b84d90c87e6298fb8c3857344eca5.svg">');
                return response.end();
            }

            else if(zodiaco === "capricorno")
            {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("<h1>CAPRICORNIO</h1>");
                response.write('<img alt="signo capricornio" src="https://asknebula.com/app/static/media/capricorn-large.dfc9772210d77bed6eb8c12c6d8f4cd7.svg">');
                return response.end();
            }

            else if(zodiaco === "acuario")
            {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("<h1>ACUARIO</h1>");
                response.write('<img alt="signo acuario" src="https://asknebula.com/app/static/media/aquarius-large.21f41d8fb4720412440e4247dc0831a7.svg">');
                return response.end();
            }

            else {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write("<h1>PISCIS</h1>");
                response.write('<img alt="signo piscis" src="https://asknebula.com/app/static/media/pisces-large.8c948035211933ad9840a4c6c1088307.svg">');
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