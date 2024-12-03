import Script from "next/script";

const TalkToChat = () => {
  return (
    <Script
      id=""
      dangerouslySetInnerHTML={{
        __html: `
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5c4dd43fab5284048d0ef37d/1hrk3jqqs';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
`,
      }}
      strategy="lazyOnload"
    />
  );
};

export default TalkToChat;
