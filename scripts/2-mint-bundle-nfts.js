import { readFileSync } from 'fs';
import { sdk } from './helpers.js';
import dotenv from "dotenv";
dotenv.config();

async function main() {
  // Paste in the address from when you created the bundle collection module
  const bundleModuleAddress = process.env.BUNDLE_MODULE_ADDRESS;
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  console.log('Creating NFT batch...');

  const created = await bundleModule.createAndMintBatch([
    {
      metadata: {
        name: 'Tesla Model 3',
        description: 'A pretty fancy car!',
        image: readFileSync('./assets/tesla-model3.jpeg'),
        properties: {
          rarity: 'a bit rare',
          fanciness: 7,
        }
      },
      supply: 50,
    },
    {
      metadata: {
        name: 'Porsche 911',
        description: 'A pretty fancy car!',
        image: readFileSync('./assets/porsche-911.jpeg'),
        properties: {
          rarity: 'a bit rare',
          fanciness: 7,
        }
      },
      supply: 50,
    },
    {
      metadata: {
        name: 'Mclaren P1',
        description: 'A super fancy car!',
        image: readFileSync('./assets/mclaren-p1.jpeg'),
        properties: {
          rarity: 'super rare!',
          fanciness: 10,
        }
      },
      supply: 10,
    }
  ]);

  console.log('NFTs created!')
  console.log(JSON.stringify(created, null, 2));
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}