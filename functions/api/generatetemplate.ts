export async function generatetemplateHandler(req: Request): Promise<Response> {
  return new Response(JSON.stringify({ message: "Generates resume template based on user inputs." }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}