Feature: Visualizar consumo

  # User Story ID: US01
  # Epic ID: EP01
  # Descripción:
  # Como usuario, quiero visualizar mi consumo eléctrico en tiempo real
  # para tomar medidas ante picos de consumo.

  Scenario: Consumo general
    Given que el usuario accede a la aplicación
    And cuente con dispositivos registrados
    When el usuario se encuentre en la página principal
    Then la aplicación debe mostrar el total de consumo de todos los dispositivos registrados

  Scenario: Consumo por dispositivo
    Given que el usuario cuenta con dispositivos registrados
    When el usuario accede al apartado de consumo por dispositivo
    Then el sistema debe mostrar una lista de los dispositivos y su consumo
