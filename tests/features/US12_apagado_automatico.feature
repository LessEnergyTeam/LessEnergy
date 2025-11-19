Feature: Apagado automático de dispositivos

  # User Story ID: US12
  # Epic ID: EP03
  # Título: Apagado automático de dispositivos
  # Descripción:
  # Como usuario quiero que la aplicación me permita programar el apagado automático de ciertos dispositivos conectados a mi red cuando no estén en uso, para ahorrar energía.

  Scenario: apagado automático
    Given que el usuario a elegido cuales son los dispositivos que se apagaran
    When la hora concuerde con la hora de apagado guardada
    Then el sistema debe mandará una notificación de confirmación de apagado

  Scenario: confirmación automática
    Given que el usuario a recibido la notificación de confirmación
    When confirme el apagado o pase un periodo de tiempo sin respuesta
    Then el sistema debe apagar todos los dispositivos seleccionados anteriormente
