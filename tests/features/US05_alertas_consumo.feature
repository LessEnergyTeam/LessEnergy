Feature: Detectar el grado de alerta en las fuentes de consumo

  # User Story ID: US05
  # Epic ID: EP01
  # Título: Detectar el grado de alerta en las fuentes de consumo
  # Descripción:
  # Como usuario, quiero que la aplicación me muestre el grado de alerta de cada electrodoméstico ,si es alto, medio o bajo, para poder tomar decisiones sobre su uso y optimizar mi consumo.

  Scenario: Visualización de niveles de alerta
    Given que el usuario se encuentra en la sección de consumo por dispositivo
    And el usuario visualiza la lista de dispositivos conectados.
    When el consumo supera ciertos umbrales,
    Then debe mostrar un ícono con el nivel de alerta correspondiente (alto, medio, bajo).
    And se mostrara cada casilla de la lista de dispositivos pintada de un ligero rojo amarillo o verde según corresponda el nivel de alerta.

  Scenario: Detalles de dispositivo
    Given que el usuario se encuentra observando las diferentes alertas de la lista de dispositivos
    When el usuario presione sobre uno de los dispositivos de la lista,
    Then debe mostrar un pequeño panel con información extra de cada dispositivo
    And se mostrará en el panel el valor exacto de kWh o porcentaje que representa además mostrará información adicional del dispositivo.
