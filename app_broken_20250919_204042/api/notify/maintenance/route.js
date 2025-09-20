import twilio from "twilio";

export async function POST(req) {
  try {
    const {
      name, address, phone, email,
      category, priority, description,
    } = await req.json();

    const sid   = process.env.TWILIO_ACCOUNT_SID;
    const token = process.env.TWILIO_AUTH_TOKEN;
    const from  = process.env.TWILIO_PHONE;
    const to1   = process.env.MY_PHONE;
    const to2   = process.env.WIFE_PHONE;

    if (!sid || !token || !from) {
      return new Response(JSON.stringify({ error: "Twilio env vars missing" }), { status: 500 });
    }

    const body =
      `🛠️ Maintenance Request` +
      `\nName: ${name}` +
      `\nAddress: ${address}` +
      `\nPhone: ${phone}` +
      `\nEmail: ${email}` +
      `\nCategory: ${category}` +
      `\nPriority: ${priority}` +
      `\n—` +
      `\n${(description||"").slice(0, 320)}`;

    const client = twilio(sid, token);
    const send = async (to) => client.messages.create({ from, to, body });

    const sends = [];
    if (to1) sends.push(send(to1));
    if (to2) sends.push(send(to2));
    await Promise.all(sends);

    return new Response(JSON.stringify({ ok: true }), { status: 200 });

  } catch (e) {
    return new Response(JSON.stringify({ error: e?.message || "Server error" }), { status: 500 });
  }
}