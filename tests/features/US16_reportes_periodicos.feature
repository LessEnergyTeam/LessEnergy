Feature: Reportes por día, semana y mes

  # User Story ID: US16
  # Epic ID: EP04
  # Título: Reportes por día, semana y mes
  # Descripción:
  # Como usuario, quiero ver reportes diarios, semanales y mensuales de mi consumo eléctrico para evaluar el impacto de mis decisiones.

  Scenario: Visualización del reporte diario
    Given que el usuario accede a la sección de reportes
    And ha seleccionado la opción de reporte diario
    When el usuario elige una fecha del calendario
    Then el sistema debe mostrar el consumo eléctrico detallado de ese día
    And debe mostrar un gráfico de barras por hora

  Scenario: Visualización del reporte semanal
    Given que el usuario accede a la sección de reportes
    And ha seleccionado la opción de reporte semanal
    When el usuario elige una semana del calendario
    Then el sistema debe mostrar el consumo eléctrico detallado de esa semana
    And debe mostrar un gráfico de barras por día

  Scenario: Visualización del reporte mensual
    Given que el usuario accede a la sección de reportes
    And ha seleccionado la opción de reporte mensual
    When el usuario elige un mes del calendario
    Then el sistema debe mostrar el consumo eléctrico detallado de ese mes
