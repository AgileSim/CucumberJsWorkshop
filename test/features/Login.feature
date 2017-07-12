# language: es

@Login
Característica: : Login

  Como usuario de wikipedia, me gustaría poder consultar un artículo sobre la península de kamchatka

  @LoginKO
  Escenario: : Kamchatka search
    Dado que estoy en la pagina de wikipedia
    Cuando busco el término "Kamchatka"
    Entonces debería ver una foto de la península

