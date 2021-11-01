# API-Crypt
OpenSSL AES-256 Doble Crypt + Recursive Hash 

Made by YeCoHo v1 - Initial Beta Release



Instructions

Add <script src="Insane_Crypt.js"></script>

4 kind of ciphers (use form of your choice, look raw code)

<h5>Cifrado con clave aleatoria (random key)</h5> 
  <form action="" method="post" id="form_2crypt">
    <input id="input" type="text" pattern="[a-zA-Z0-9-_]{1,150}" name="input_2crypt" placeholder="Texto a cifrar" required />
    <input type="submit" class="button" value="Cifrar" /> <br/>
    <p class="info">Formato de salida -> $01$64$ <em>(64bytes por defecto)</em></p>
  </form>
      
<h5>Cifrado con clave aleatoria de longitud definida (random key with defined lenght>64 )</h5> 
  <form action="" method="post" id="form_2crypt_0">
    <input id="input_0" type="text" pattern="[a-zA-Z0-9-_]{1,150}" name="input_2crypt" placeholder="Texto a cifrar" required />
    <input id="input_size_0" type="text" pattern="[0-9]{1,15}" name="input_size_0" size="5" placeholder="Tamaño clave aleatoria" required />
    <input type="submit" class="button" value="Cifrar" /> <br/>
    <p class="info">Formato de salida -> $01$<i>longitud_clave</i>$ <em>(64bytes mínimo)</em></p>
  </form>
      
<h5>Cifrado con clave propia (your own key without any random factor -NOT RECOMMENDED- your raw password is hashed and used)</h5> 
  <form action="" method="post" id="form_2crypt_1">
    <input id="input_1" type="text" pattern="[a-zA-Z0-9-_]{1,150}" name="input_2crypt" placeholder="Texto a cifrar" required />
    <input id="input_pass_1" type="text" pattern="[a-zA-Z0-9-_]{1,150}" name="input_pass_2crypt" placeholder="Clave" required />
    <input type="submit" class="button" value="Cifrar" /> <br/>
    <p class="info">Formato de salida -> $00$00$</p>
  </form>

<h5>Cifrado con clave propia + fragmento aleatorio (your own key + random added key with total leght of choice at end of yours, password + random >= 64)</h5> 
  <form action="" method="post" id="form_2crypt_2">
    <input id="input_2" type="text" pattern="[a-zA-Z0-9-_]{1,150}" name="input_2crypt" placeholder="Texto a cifrar" required />
    <input id="input_pass_2" type="text" pattern="[a-zA-Z0-9-_]{1,150}" name="input_pass_2crypt" placeholder="Clave" required />
    <input id="input_size_2" type="text" pattern="[0-9]{1,15}" name="input_size_2" size="5" placeholder="Tamaño clave aleatoria" required />
    <input type="submit" class="button" value="Cifrar" /> <br/>
    <p class="info">Formato de salida -> $00$<i>longitud_clave</i>$</p>
  </form>


 And this form to decrypt (look raw code)


  <form action="" method="post" id="form_2decrypt">
    <input id="input_2decrypt" type="text" name="input_2decrypt" hidden/>
    <input id="input_pass_2decrypt" type="text" name="input_pass_2decrypt" hidden/>
  </form>
  
  

 It selects automatically the decrypt method than he needs based on the header $00$ or $01$
 
 And can be empty password or not included if don't needed



GNU General Public License v3.0

