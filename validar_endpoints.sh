#!/bin/bash
# validar_endpoints.sh
# Script forense para validar accesibilidad y formato de archivos JSON clave

BASE_URL="https://almhfeehhd.peperoman275.workers.dev"

ARCHIVOS=("did.json" "services.json" "keys.json")

echo "🔍 Validando endpoints en $BASE_URL..."
for archivo in "${ARCHIVOS[@]}"; do
  echo -e "\n--- $archivo ---"
  # Descargar y validar formato JSON
  respuesta=$(curl -s -w "%{http_code}" "$BASE_URL/$archivo" -o tmp_$archivo)
  codigo_http=$(tail -n1 <<< "$respuesta")
  if [ "$codigo_http" == "200" ]; then
    echo "✅ $archivo accesible (HTTP 200)"
    if jq empty tmp_$archivo 2>/dev/null; then
      echo "✅ $archivo contiene JSON válido"
    else
      echo "⚠️ $archivo no es JSON válido"
    fi
  else
    echo "❌ $archivo no accesible (HTTP $codigo_http)"
  fi
  rm -f tmp_$archivo
done
