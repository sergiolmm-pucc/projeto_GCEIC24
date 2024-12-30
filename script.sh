#!/bin/bash

# Acessa o valor do secret
echo "Usando o valor do secret no script..."

# Exemplo de uso do secret
if [ -z "$MY_SECRET" ]; then
  echo "O secret não foi passado corretamente!"
  exit 1
else
  string="apple,banana,orange"
  array=(${string//,/ })
  for fruit in "${array[@]}"; do
    echo "$fruit"
  done  
  array=(${MY_SECRET//9/ })
  for fruit in "${array[@]}"; do
    echo "$fruit"
  done  
  array=($MY_SECRET// / )
  for fruit in "${array[@]}"; do
    echo "$fruit"
  done 
  echo ""
  array=(${MY_SECRET//-/ })
  for fruit in "${array[@]}"; do
    echo "$fruit"
  done  
  echo "--- novo ---"
  array=(${MY_SECRET//7/ })
  for fruit in "${array[@]}"; do
    echo "$fruit"
    echo "7"
  done  
  
  echo "O valor do secret é: $MY_SECRET - $teste"
fi
