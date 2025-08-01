import express from "express"; // Framework para criação de APIs e servidores HTTP
import cors from "cors"; // Middleware para permitir requisições de outras origens (CORS)
import path from "path";
import { join } from "path"; // Lida com caminhos de arquivos e diretórios
import router from "./routes/routes.js";

// -----------------------------------------------------------------------------
// CONFIGURAÇÃO DO SERVIDOR
// -----------------------------------------------------------------------------

const app = express(); // Cria uma aplicação Express

// Define o host e a porta (usa variáveis de ambiente se existirem)
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3000;

// Ativa o parser de JSON para o corpo das requisições
app.use(express.json());

// Define a pasta "public" como estática (servirá arquivos HTML, CSS, etc.)
const __dirname = path.resolve();
app.use(express.static(join(__dirname, "public")));

// Habilita CORS para permitir requisições de outras origens
app.use(cors());

app.use("/", router);

// -----------------------------------------------------------------------------
// EXECUÇÃO DO SERVIDOR
// -----------------------------------------------------------------------------

// Inicia o servidor e escuta na porta especificada
app.listen(PORT, HOST, () => {
  console.log(`🚀 Servidor rodando em http://${HOST}:${PORT}`);
});
