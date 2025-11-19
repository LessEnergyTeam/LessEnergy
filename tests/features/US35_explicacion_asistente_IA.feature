Feature: Explicación asistente IA

  # User Story ID: US35
  # Epic ID: EP09
  # Título: Explicación asistente IA
  # Descripción:
  # Como usuario quiero que la aplicación me explique cómo efectuar las recomendaciones y resuelva mis posibles dudas para cumplir con ellas correctamente

  Scenario: Explicación detallada de una recomendación
    Given que el usuario ya conoce las recomendaciones para el ahorro de energía
    And se encuentre en el apartado de asistente IA
    When el usuario escriba el nombre de la recomendación
    And pregunte cómo realizarla
    Then el asistente IA le brindará una seria de pasos a realizar como una respuesta fácil de comprender

  Scenario: Resolución de dudas sobre los pasos sugeridos
    Given que el usuario se le ha brindado una serie de pasos para realizar una de las recomendaciones
    When el usuario escriba una posible duda acerca de los pasos o la recomendación
    Then el asistente IA le brindara una respuesta fácil de comprender
