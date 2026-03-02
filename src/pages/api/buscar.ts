import type { APIRoute } from 'astro';
import { GoogleGenAI } from '@google/genai';

export const POST: APIRoute = async ({ request }) => {
    try {
        const { query } = await request.json();

        if (!query || query.length < 3) {
            return new Response(JSON.stringify({ error: 'Busca muito curta' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const apiKey = import.meta.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return new Response(JSON.stringify({ error: 'API Key não configurada' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const ai = new GoogleGenAI({ apiKey });

        const prompt = `
      O usuário buscou por um curso relacionado a: "${query}".
      Você é um curador educacional especialista (EduBot Pro).
      Sua missão é encontrar 1 curso EXCELENTE, GRATUITO e COM CERTIFICADO sobre este tema.

      REGRAS CRÍTICAS:
      1. Os cursos DEVEM ser 100% gratuitos para acessar e estudar.
      2. O \`link\` NÃO DEVE ser apenas a página inicial (ex: não envie apenas "https://www.coursera.org/"). DEVE ser o link direto para a página do curso específico.
      3. A \`imagem\` DEVE ser uma URL do Unsplash (ex: https://images.unsplash.com/photo-...).
      4. A \`categoria\` DEVE ser exatamente "Hard Skill" ou "Soft Skill".
      
      Gere a sua resposta puramente no seguinte formato JSON (sem markdown, sem blocos de código \`\`\`json, apenas o array de objetos):
      [
        {
          "id": "gerado_agora_${Date.now()}",
          "titulo": "Nome do Curso",
          "instituicao": "Instituição",
          "link": "https://url-especifica-do-curso",
          "categoria": "Hard Skill",
          "tags": ["Tag1", "Tag2"],
          "descricao": "Pequena descrição...",
          "certificado_gratuito": true,
          "imagem": "https://images.unsplash.com/photo-exemplo?w=800&h=400&fit=crop"
        }
      ]
    `;

        // Note: We are using gemini-2.5-flash as it is the fastest for API resolution
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                temperature: 0.3,
                responseMimeType: "application/json",
            }
        });

        const resultText = response.text;

        try {
            const generatedCourses = JSON.parse(resultText);
            return new Response(JSON.stringify({ cursos: generatedCourses }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (parseError) {
            console.error("Failed to parse Gemini JSON output:", resultText);
            return new Response(JSON.stringify({ error: 'Erro de formatação das respostas da IA.' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

    } catch (error) {
        console.error("API error:", error);
        return new Response(JSON.stringify({ error: 'Falha interna na comunicação com a IA' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
