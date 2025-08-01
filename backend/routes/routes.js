import express from "express";
import path from "path";
import * as controleUsuario from "../../user-control.js";
import { v4 as uuidv4 } from "uuid";
import { normalizarCampoTexto } from "../utils/normalizeInput.js";

const router = express.Router();
const __dirname = path.resolve();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

router.get("/list-users/:count?", async (req, res) => {
  let num = parseInt(req.params.count, 10); // Converte o parâmetro para número inteiro
  if (isNaN(num)) num = 100; // Valor padrão se não for fornecido
  if (num == 0) {
    // Se não houver limite, retorna todos os usuários
    console.log(`Nenhum limite aplicado. Retornando todos os usuários.`);
    num = 10000; // Define um número máximo para evitar sobrecarga
  } else if (num < 0) {
    num = 100;
  } else if (num > 10000) {
    num = 10000; // Limita o número máximo de usuários a 10.000
    console.log(`Número máximo de usuários a retornar: ${num}`);
  }

  try {
    const todos = await controleUsuario.lerUsuarios(num); // Lê N usuários do arquivo
    res.json(todos); // Retorna os usuários como JSON
  } catch (err) {
    console.error("❌ Falha ao ler usuários:", err);
    res.status(500).json({ error: "Não foi possível ler usuários." });
  }
});

router.post("/cadastrar-usuario", async (req, res) => {
  try {
    const novoUsuario = {
      id: uuidv4(),
      nome: normalizarCampoTexto(req.body.nome),
      idade: req.body.idade,
      endereco: normalizarCampoTexto(req.body.endereco),
      email: normalizarCampoTexto(req.body.email),
    };

    await controleUsuario.appendUsuario(novoUsuario);

    console.log(`✔️ Usuário cadastrado: ${JSON.stringify(novoUsuario)}`);
    res.status(201).json({
      ok: true,
      message: "Usuário cadastrado com sucesso!",
      usuario: novoUsuario,
    });
  } catch (err) {
    console.error("❌ Erro ao cadastrar usuário:", err);
    res.status(500).json({ error: "Não foi possível cadastrar usuário." });
  }
});

router.put("/atualizar-usuario/:id", async (req, res) => {
  try {
    console.log("ID recebido na URL:", req.params.id);

    const usuarios = await controleUsuario.lerUsuarios();
    const idRecebido = req.params.id.trim();

    console.log("IDs no arquivo:", usuarios.map(u => u.id));

    const usuarioIndex = usuarios.findIndex((u) => u.id.trim() === idRecebido);

    if (usuarioIndex === -1) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }

    // Atualização dos campos
    if (req.body.nome) usuarios[usuarioIndex].nome = normalizarCampoTexto(req.body.nome);
    if (req.body.idade) usuarios[usuarioIndex].idade = req.body.idade;
    if (req.body.endereco) usuarios[usuarioIndex].endereco = normalizarCampoTexto(req.body.endereco);
    if (req.body.email) usuarios[usuarioIndex].email = normalizarCampoTexto(req.body.email);

    await controleUsuario.salvarUsuarios(usuarios);
    console.log(`✔️ Usuário atualizado: ${JSON.stringify(usuarios[usuarioIndex])}`);

    res.json({
      ok: true,
      message: "Usuário atualizado com sucesso!",
      usuario: usuarios[usuarioIndex],
    });
  } catch (err) {
    console.error("❌ Erro ao atualizar usuário:", err);
    res.status(500).json({ error: "Não foi possível atualizar usuário." });
  }
});

router.delete("/remover-usuario/:id", async (req, res) => {
  try {
    let usuarios = await controleUsuario.lerUsuarios();
    const idRecebido = req.params.id.trim();
    const usuarioIndex = usuarios.findIndex((u) => u.id.trim() === idRecebido);

    if (usuarioIndex === -1) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }

    const usuarioRemovido = usuarios[usuarioIndex];
    usuarios = usuarios.filter((u) => u.id !== req.params.id);

    await controleUsuario.salvarUsuarios(usuarios);
    console.log(`✔️ Usuário removido: ${JSON.stringify(usuarioRemovido)}`);
    res.json({
      ok: true,
      message: "Usuário removido com sucesso!",
      usuario: usuarioRemovido,
    });
  } catch (err) {
    console.error("❌ Erro ao remover usuário:", err);
    res.status(500).json({ error: "Não foi possível remover usuário." });
  }
});

export default router;