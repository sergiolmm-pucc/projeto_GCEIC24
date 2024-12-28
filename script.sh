#!/bin/bash

# Acessa o valor do secret
echo "Usando o valor do secret no script..."

# Exemplo de uso do secret
if [ -z "$MY_SECRET" ]; then
  echo "O secret não foi passado corretamente!"
  exit 1
else
  echo "O valor do secret é: $MY_SECRET"
fi