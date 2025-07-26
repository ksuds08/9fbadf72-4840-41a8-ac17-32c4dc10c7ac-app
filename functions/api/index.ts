// Auto-generated index.ts for Pages Functions routing
import type { Request } from 'itty-router';

import { AIEngineHandler } from './AIEngine';
import { TemplateLibraryHandler } from './TemplateLibrary';
import { ContentSuggestionHandler } from './ContentSuggestion';

export async function onRequest({ request }: { request: Request }): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path === "/api/AIEngine") return AIEngineHandler(request);
  if (path === "/api/TemplateLibrary") return TemplateLibraryHandler(request);
  if (path === "/api/ContentSuggestion") return ContentSuggestionHandler(request);

  return new Response("Not found", { status: 404 });
}
