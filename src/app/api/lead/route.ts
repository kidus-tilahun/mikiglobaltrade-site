import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, tradeType, productCategory, message } = body;

    // Basic validation
    if (!name || !email || !tradeType) {
      return NextResponse.json(
        { success: false, error: "Missing required fields (name, email, tradeType)." },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Format Markdown message for Telegram
    const telegramMessage = 
      `📩 *New B2B Inquiry / Lead Received*\n\n` +
      `👤 *Name:* ${escapeMarkdown(name)}\n` +
      `📧 *Email:* ${escapeMarkdown(email)}\n` +
      `📱 *Phone / WhatsApp:* ${escapeMarkdown(phone || "Not provided")}\n` +
      `🔄 *Trade Type:* ${escapeMarkdown(tradeType)}\n` +
      `📦 *Product Category:* ${escapeMarkdown(productCategory || "General Inquiry")}\n\n` +
      `💬 *Message:* \n${escapeMarkdown(message || "No message provided")}`;

    if (botToken && chatId) {
      const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
      const telegramRes = await fetch(telegramUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: "Markdown",
        }),
      });

      if (!telegramRes.ok) {
        const errText = await telegramRes.text();
        console.error("Telegram API Error:", errText);
        // We still return success to user if form was received, but log error
      }
    } else {
      console.warn("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set in environment variables.");
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been successfully sent to Miki Import Export. We will get back to you shortly.",
    });
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again later or contact us directly via WhatsApp." },
      { status: 500 }
    );
  }
}

function escapeMarkdown(text: string): string {
  return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");
}
