export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  try {
    const body = await req.json();
    const { eventName, eventUrl, eventTime, fbp, fbc } = body;
    const PIXEL_ID = '3046746782192073';
    const TOKEN = 'EAA4kfEmICLcBR283ZCG6MOSAgARaQAM4F1P5NC0nQazfViZBzTry8jB5S2rKQXIL3McZAb8El0U4c3zkxYaw8n1nrbW90xMD5FWhwUgEmIw4iZCZB71EKofru1CMRorFfgI6v1t93HqFmSj6BqSfNMviSjsV97qwz1ECbZCHlrf4mYbrQFV2bpeFYOEQsG5QZDZD';

    const clientIp = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip');
    const userAgent = req.headers.get('user-agent');

    const metaPayload = {
      data: [
        {
          event_name: eventName,
          event_time: eventTime || Math.floor(Date.now() / 1000),
          action_source: 'website',
          event_source_url: eventUrl,
          user_data: {
            client_user_agent: userAgent,
            client_ip_address: clientIp,
            fbp: fbp || undefined,
            fbc: fbc || undefined,
          },
        },
      ],
    };

    const response = await fetch(`https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(metaPayload),
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
