/**
 * Test script for checking API endpoints
 * Run with: npx ts-node src/scripts/test-api.ts
 */

async function checkEndpoint(url: string) {
  console.log(`Testing endpoint: ${url}`);
  try {
    const response = await fetch(url);
    const status = response.status;
    console.log(`Status code: ${status}`);
    
    try {
      const data = await response.json();
      console.log('Response data:', JSON.stringify(data, null, 2));
    } catch (e) {
      console.log('Response is not JSON');
      const text = await response.text();
      console.log('Response text:', text.substring(0, 500) + (text.length > 500 ? '...' : ''));
    }
  } catch (error) {
    console.error('Error testing endpoint:', error);
  }
  console.log('-----------------------------------');
}

async function main() {
  const baseUrl = 'http://localhost:3000';
  
  // Test health endpoint
  await checkEndpoint(`${baseUrl}/api/health`);
  
  // Test static endpoint (doesn't require database)
  await checkEndpoint(`${baseUrl}/api/static`);
  
  // Test leaderboard endpoint
  await checkEndpoint(`${baseUrl}/api/leaderboard?page=1&limit=10`);
}

main().catch(console.error);
