Feature: Cuenta de usuario

  # User Story ID: US07
  # Epic ID: EP02
  # Título: Cuenta de usuario
  # Descripción:
  # Como usuario ,  quiero registrar una cuenta , para tener una experiencia más personalizada 

  Scenario: Registro de cuenta
    Given que el usuario se encuentra en el apartado de inicio
    And el usuario no cuente con una cuenta 
    When el usuario ingrese sus datos para la creación de cuenta
    Then el sistema debe guardar los datos ingresados 
    And mandar un correo para terminar la creación de la cuenta

  Scenario: Inicio de sesión
    Given que el usuario posee una cuenta registrada
    And el usuario a ingresado los datos de cuenta correctamente 
    When presiona el botón de Iniciar sesión
    Then el sistema debe comprobar los datos con los registros internos para ingresar a la aplicación
