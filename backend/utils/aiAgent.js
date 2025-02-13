const { OpenAI } = require("langchain/llms/openai");

const model = new OpenAI({ openAIApiKey: process.env.OPENAI_API_KEY });

async function prioritizeTasks(tasks) {
  const prompt = `Prioritize the following tasks based on deadlines and importance:\n${tasks.map(t => t.title).join("\n")}`;
  const response = await model.call(prompt);
  return response;
}

module.exports = { prioritizeTasks };