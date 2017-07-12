# language: es

@Login
Característica: : Login

    As a user, I want to be able to log into my private area using my credentials

  @LoginKO
  Escenario: : Login with invalid credentials
    Dado que estoy en la pagina de wikipedia
    Cuando busco el término "Kamchatka"
    Entonces debería ver una foto de la península

