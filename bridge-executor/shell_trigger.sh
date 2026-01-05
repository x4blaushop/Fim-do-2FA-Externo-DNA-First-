#!/bin/bash
# Ativação do DNA Soberano - José Patrick [cite: 2025-12-23]

echo "[Aba Console] Iniciando sistema de veias..."
# Compila o C++ localmente no celular
g++ ../bridge-core/Biometricbridge.cpp -o dna_engine

# Inicia o vigilante Python em background
python3 guardian.py &

# Abre o Portal Web local
termux-open-url ../bridge-web/index.html
