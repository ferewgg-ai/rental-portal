export async function POST(request) {
  try {
    const form = await request.formData();
    const fullName = form.get('fullName');
    const email = form.get('email');
    const consent = !!form.get('consent');
    console.log('[Renewal Request]', { fullName, email, consent });
    return Response.json({ ok: true, message: 'Renewal request received' }, { status: 200 });
  } catch (err) {
    console.error('Renew API error:', err);
    return Response.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}