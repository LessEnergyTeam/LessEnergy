Feature: Control parental energético

  # User Story ID: US37
  # Epic ID: EP010
  # Título: Control parental energético
  # Descripción:
  # Como usuario, quiero limitar el tiempo o consumo de ciertos dispositivos usados por mis hijos, para promover buenos hábitos de ahorro energético

  Scenario: Límite de tiempo de uso
    Given que el usuario ha configurado un tiempo máximo de uso para dispositivos infantiles,
    When se cumpla el límite establecido,
    Then la aplicación debe notificar al usuario y apagar automáticamente los dispositivos del área infantil.

  Scenario: Aumento de tiempo
    Given que se ha notificado al usuario por llegar al máximo de tiempo en los dispositivos infantiles
    And el usuario puede ver la notificación con la opción de aumentar el tiempo
    When el usuario acepte aumentar el tiempo del dispositivo,
    Then el tiempo del dispositivo se restablece como si no hubiera sido usado aún.
