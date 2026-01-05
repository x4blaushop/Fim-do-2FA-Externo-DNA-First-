#ifndef BRIDGE_CONNECTOR_H
#define BRIDGE_CONNECTOR_H

// Definição do sinal de saída do DNA [cite: 2025-12-30]
typedef struct {
    bool is_authorized;
    char sovereign_key[64];
    long timestamp;
} DNAResponse;

// Função que o Rust e o Python chamarão para validar o Arquiteto [cite: 2025-12-23]
DNAResponse get_hardware_signal();

#endif
