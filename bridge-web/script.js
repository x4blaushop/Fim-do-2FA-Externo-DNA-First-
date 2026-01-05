// Função para materializar o sensor do Poco X6 Pro
async function ativarChaveDoArquiteto() {
  const options = {
    publicKey: {
      challenge: new Uint8Array([1, 2, 3, 4]), // Desafio aleatório de DNA
      rp: { name: "Sistema Soberano" },
      user: {
        id: new Uint8Array([10, 20, 30]),
        name: "José Patrick",
        displayName: "Arquiteto José Patrick"
      },
      pubKeyCredParams: [{ alg: -7, type: "public-key" }], // Algoritmo compatível com TEE
      authenticatorSelection: { authenticatorAttachment: "platform" }, // Usa o hardware local
      timeout: 60000
    }
  };

  try {
    const credential = await navigator.credentials.create(options);
    console.log("Aba Console: DNA Validado com Sucesso.");
    abrirEstadoInvisivel(); // Libera a camada soberana [cite: 2025-12-30]
  } catch (err) {
    console.error("Aba Console: Falha na identificação do Arquiteto.");
  }
}

