export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/did.json") {
      return new Response(await env.alma_did.get("did.json"), {
        headers: { "Content-Type": "application/json" }
      });
    }

    if (url.pathname === "/services.json") {
      return new Response(await env.alma_did.get("services.json"), {
        headers: { "Content-Type": "application/json" }
      });
    }

    if (url.pathname === "/keys.json") {
      return new Response(await env.alma_did.get("keys.json"), {
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response("alma_did activo");
  }
}
