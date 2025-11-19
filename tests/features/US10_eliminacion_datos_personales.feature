Feature: Eliminación de Datos Personales

  # User Story ID: US10
  # Epic ID: EP02
  # Título: Eliminación de Datos Personales
  # Descripción:
  # Como usuario, quiero tener control sobre mis datos y poder eliminar la información personal recopilada por la aplicación cuando quiera para  sentirme seguro usando la app.

  Scenario: Eliminación de datos personales desde la aplicación
    Given que el usuario accede a la sección de privacidad
    When selecciona la opción "Eliminar mis datos personales"
    Then el sistema debe solicitar una confirmación
    And tras confirmar, eliminar toda la información personal vinculada al usuario.

  Scenario: Revocación del consentimiento
    Given que el usuario revisa la sección de privacidad,
    When desactiva el consentimiento de uso de datos
    Then la app debe deshabilitar funciones que requieran esos datos y guardar la preferencia.
