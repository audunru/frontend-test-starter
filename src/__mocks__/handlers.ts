import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/foo", () => {
    return HttpResponse.json({ foo: "bar" });
  }),
];
