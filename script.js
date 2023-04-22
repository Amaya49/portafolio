
      function encriptar(texto) {
        texto = texto.toLowerCase();
        texto = texto.replace(/e/g, 'enter');
        texto = texto.replace(/i/g, 'imes');
        texto = texto.replace(/a/g, 'ai');
        texto = texto.replace(/o/g, 'ober');
        texto = texto.replace(/u/g, 'ufat');
        return texto;
      }
      function desencriptar(texto) {
        texto = texto.toLowerCase();
        texto = texto.replace(/enter/g, 'e');
        texto = texto.replace(/imes/g, 'i');
        texto = texto.replace(/ai/g, 'a');
        texto = texto.replace(/ober/g, 'o');
        texto = texto.replace(/ufat/g, 'u');
        return texto;
      }

      function ejecutarAccion() {
        var texto = document.getElementById('texto').value.trim();
        var accionEncriptar = document.getElementById('accion-encriptar').checked;
        var resultado = '';
        if (accionEncriptar) {
          resultado = encriptar(texto);
        } else {
          resultado = desencriptar(texto);
        }
        document.getElementById('texto-resultado').value = resultado;
        document.getElementById('resultado').style.display = 'block';
      }

      function copiarTexto() {
        var textoResultado = document.getElementById('texto-resultado');
        textoResultado.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles: ' + textoResultado.value);
      }

      document.getElementById('boton-accion').addEventListener('click', ejecutarAccion);
      document.getElementById('boton-copiar').addEventListener('click', copiarTexto);
