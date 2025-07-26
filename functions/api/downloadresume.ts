export async function downloadresumeHandler(req: Request): Promise<Response> {
  return new Response(JSON.stringify({ message: "Allows users to download the finalized resume." }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}