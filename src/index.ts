export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext) {
    const url = new URL(request.url);

    if (url.pathname === "/did.json") {
      const did = await env.KV.get("did.json");
      return new Response(did ?? "alma_did activo", {
        headers: { "Content-Type": "application/json" }
      });
    }

    if (url.pathname === "/services.json") {
      const services = await env.KV.get("services.json");
      return new Response(services ?? "alma_did activo", {
        headers: { "Content-Type": "application/json" }
      });
    }

    if (url.pathname === "/keys.json") {
      const keys = await env.KV.get("keys.json");
      return new Response(keys ?? "alma_did activo", {
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response("alma_did activo");
  }
}
