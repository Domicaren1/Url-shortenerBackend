import { Express, Request, Response } from "express";
import { 
    createShortUrl, 
    handleRedirect,
    getAnalytics,
    getShortUrl
} from "../controller/shortUrl.controller";
import validateResource from "../middleware/validateResource";
import shortUrlSchema from "../schemas/createShortUrl.schema";




function routes (app: Express) {
    app.get("/healthcheck", (req: Request, res: Response) => {
        return res.send("App is healthy");
    });

    app.post("/api/url", validateResource(shortUrlSchema), createShortUrl);

    app.get("/:shortId", handleRedirect)

    app.get("/api/url:shortId", getShortUrl)

    app.get("/api/analytics", getAnalytics)
}


export default routes