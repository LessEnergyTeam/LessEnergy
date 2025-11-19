Feature: Recomendaciones personalizadas

  # User Story ID: US19
  # Epic ID: EP05
  # Título: Recomendaciones personalizadas
  # Descripción:
  # Como usuario quiero recibir recomendaciones basadas en mi historial de uso para reducir mi consumo.

  Scenario: Generación de recomendaciones
    Given que el usuario tiene un historial de consumo registrado,
    When entra a la sección de recomendaciones,
    Then el sistema debe mostrar sugerencias personalizadas según patrones detectados.

  Scenario: Adaptabilidad de recomendaciones
    Given que el consumo del usuario cambia con el tiempo,
    When el patrón de consumo es actualizado,
    Then las recomendaciones deben adaptarse automáticamente a los nuevos datos.
