export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/did.json") {
      return new Response(JSON.stringify({
        id: "did:alma:root",
        services: [
          { id: "api", type: "REST", endpoint: "/api" },
          { id: "cdn", type: "CDN", endpoint: "/cdn" },
          { id: "dashboard", type: "UI", endpoint: "/dashboard" }
        ]
      }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    if (url.pathname === "/services.json") {
      return new Response(JSON.stringify({
        services: [
          { id: "api", type: "REST", endpoint: "/api" },
          { id: "cdn", type: "CDN", endpoint: "/cdn" },
          { id: "dashboard", type: "UI", endpoint: "/dashboard" }
        ]
      }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    if (url.pathname === "/keys.json") {
      return new Response(JSON.stringify({
        keys: [
          {
            id: "alma-public",
            type: "Ed25519",
            publicKey: "AAAAC3NzaC1lZDI1NTE5AAAAIBuF02le/dA7Vzt38gfF+1VxhtdLSc8nOo9lxwyeHEmd"
          }
        ]
      }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response("Not found", { status: 404 });
  }
}
