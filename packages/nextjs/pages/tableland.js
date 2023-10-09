import { Database } from "@tableland/sdk";

console.log("fetch data")
// {prefix}_{chainId}_{tableId}
const tableName = "healthbot_31337_1";  // Our pre-defined health check table
const db = new Database();

export async function fetchData() {
  try {
    const { results } = await db.prepare(`SELECT * FROM ${tableName};`).all();
    console.log("results")
    console.log(results)
    return results;
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}
