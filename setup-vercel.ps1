# setup-vercel.ps1
# Add Twilio + phone environment variables to Vercel (production)

# Replace these with your actual values
$TWILIO_ACCOUNT_SID = "ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
$TWILIO_AUTH_TOKEN  = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
$TWILIO_PHONE       = "+1XXXXXXXXXX"   # Your Twilio number
$MY_PHONE           = "+12024655587"  # Your number
$WIFE_PHONE         = "+12403749158"  # Wife’s number

# Push env vars to Vercel
echo $TWILIO_ACCOUNT_SID | vercel env add TWILIO_ACCOUNT_SID production --yes
echo $TWILIO_AUTH_TOKEN  | vercel env add TWILIO_AUTH_TOKEN production --yes
echo $TWILIO_PHONE       | vercel env add TWILIO_PHONE production --yes
echo $MY_PHONE           | vercel env add MY_PHONE production --yes
echo $WIFE_PHONE         | vercel env add WIFE_PHONE production --yes

# Deploy to production
vercel --prod
