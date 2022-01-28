import { sdk } from "./helpers.js";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  const packModuleAddress = process.env.PACK_MODULE_ADDRESS; 
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Opening the pack...');
  const opened = await packModule.open('0');
  console.log('Opened the pack!');
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}

