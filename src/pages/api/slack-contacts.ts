import type { NextApiRequest, NextApiResponse } from "next";
import { sendToContactChannelSlack } from "@/services/slack";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const response = await axios.post(
        process.env.SLACK_HOOK_CONTACT ||
          "https://hooks.slack.com/services/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",
        req.body
      );
      if (res) {
        res.status(200).json(response.data);
      }
    } catch (err) {
      res
        .status(500)
        .json({ message: "Fail to send slack", error: "Fail to send slack" });
    }
  }
}
