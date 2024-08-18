export async function GET(request: Request) {
  console.log(request);
  return new Response(JSON.stringify("Hello there"), {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}
