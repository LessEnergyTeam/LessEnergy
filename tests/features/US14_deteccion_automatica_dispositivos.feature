Feature: Detección automática de dispositivos

  # User Story ID: US14
  # Epic ID: EP03
  # Título: Detección automática de dispositivos
  # Descripción:
  # Como usuario, quiero que la app detecte nuevos dispositivos IoT conectados a mi red y me permita agregarlos fácilmente para monitorearlos.

  Scenario: Agregar dispositivos
    Given que el usuario se encuentra en el apartado de agregar dispositivos
    And la aplicación ha realizado un escaneo de los posibles dispositivos a evaluar
    And muestra esos dispositivos como lista
    When escoja alguno de los dispositivos
    And registre a que zona pertenece
    Then el sistema debe mostrarlo como seleccionado para monitorear y agregarlos a la lista de los dispositivos monitoreados

  Scenario: Quitar dispositivos
    Given que el usuario puede ver la lista de los dispositivos detectados por la app
    When escoja alguno de los dispositivos ya seleccionados para monitorear
    Then el sistema debe mostrarle un mensaje de confirmación, antes de quitarlo de los dispositivos monitoreados
