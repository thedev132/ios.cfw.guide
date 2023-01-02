import{_ as r}from"./checkra1n.ace0089d.js";import{_ as c,o as d,c as u,a as e,b as o,d as n,w as s,e as l,r as a}from"./app.a26fd538.js";const h={},p=l('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode</p><p>If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>A7 devices will likely fail to successfully jailbreak with checkra1n on Linux, as a result, you&#39;ll need to use an older checkra1n version and quickly unplug and replug your device once you see <code>Right Before Trigger</code></p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>This is a highly experimental guide page, there may be things not directly mentioned that need to be done in order to follow this. As a result, we highly recommend getting another type of computer instead if possible.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You need to have enabled developer mode on your ChromeOS device to follow this</p></div><h2 id="downloads-chromeos" tabindex="-1"><a class="header-anchor" href="#downloads-chromeos" aria-hidden="true">#</a> Downloads (ChromeOS)</h2>',6),y={href:"https://checkra.in",target:"_blank",rel:"noopener noreferrer"},m={href:"https://checkra.in/releases/0.12.2-beta#all-downloads",target:"_blank",rel:"noopener noreferrer"},f={href:"https://checkra.in/releases/0.10.1-beta#all-downloads",target:"_blank",rel:"noopener noreferrer"},_=l('<p><img src="'+r+'" alt="A screenshot of the checkra1n application"></p><h2 id="allowing-checkra1n-to-run" tabindex="-1"><a class="header-anchor" href="#allowing-checkra1n-to-run" aria-hidden="true">#</a> Allowing checkra1n to run</h2><ol><li>Move the checkra1n binary which is downloaded to <code>/usr/local/bin</code><ul><li>This can be done by doing the following: <ul><li>press <code>Ctrl</code> + <code>Alt</code> + <code>T</code></li><li>run <code>shell</code></li><li>run <code>mv ~/Downloads/checkra1n /usr/local/bin/</code></li></ul></li></ul></li><li>Run the following command in terminal: <code>sudo mount -o remount,exec /tmp</code><ul><li>You&#39;ll need to do this every single time you reboot your ChromeOS device</li></ul></li><li>Every time you need to jailbreak in ChromeOS, you need to plug in your device, and enter Recovery Mode manually.</li></ol><h2 id="installing-checkra1n" tabindex="-1"><a class="header-anchor" href="#installing-checkra1n" aria-hidden="true">#</a> Installing checkra1n</h2>',4),w=l("<li>Run the <code>checkra1n</code> binary in the terminal using <code>TERM=linux sudo checkra1n</code><ul><li>You may need to run <code>sudo chmod a+x /usr/local/bin/checkra1n</code> if the binary doesn&#39;t run</li><li>If you&#39;re on an A11 device, you will need to head into <code>Options</code>, then enable the <code>Skip A11 BPR Check</code> option once it runs</li><li>If you&#39;re on iOS 14.6 or later, you will need to head into <code>Options</code>, then enable the <code>Allow Untested Versions</code> option once it runs</li><li>If you&#39;re on an A8X or A9X device and are on iOS 14.4 to 14.4.2, you will need to head into <code>Options</code>, then enable the <code>Allow Untested Versions</code> option once it runs</li></ul></li><li>Click <code>Start</code> and follow all onscreen prompts</li>",2),g=e("code",null,"Start",-1),b=e("ul",null,[e("li",null,"Follow the instructions until your device shows a black screen")],-1),k=e("li",null,"After this, checkra1n should automatically install",-1),v=e("p",null,"Your iOS device should now reboot.",-1),S=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"While you could, at this stage, install Cydia instead of continuing with the Odysseyra1n steps, we don't recommend it because of the fact that:"),e("ul",null,[e("li",null,"People generally tend to have more stability when using Odysseyra1n instead of installing Cydia"),e("li",null,"Certain ease-of-use functionality (such as shshd, which automatically saves blobs for you when jailbroken) is not available"),e("li",null,"Some tweaks may require or be better tested with software that Odysseyra1n utilizes, rather than the software that is used when you choose to install Cydia")])],-1),A=e("h2",{id:"the-odysseyra1n-script",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#the-odysseyra1n-script","aria-hidden":"true"},"#"),o(" The Odysseyra1n script")],-1),I=e("li",null,"Open this page (ios.cfw.guide/installing-odysseyra1n-chromeos) on your device by typing this URL into Safari",-1),x={href:"https://www.icloud.com/shortcuts/8d4e206d568d4aadb624b2a6191a3771",target:"_blank",rel:"noopener noreferrer"},C=e("ul",null,[e("li",null,"If needed, download the Shortcuts app.")],-1),O=e("li",null,[o("When prompted, choose "),e("code",null,"Open")],-1),R=e("li",null,[o("If necessary, press the "),e("code",null,"Procursus Bootstraper"),o(" icon, then press the Play icon.")],-1),U=e("li",null,"Press OK to any prompts which do come up",-1),N=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[o("If prompted about an untrusted shortcut, run another shortcut, then open "),e("code",null,"Settings"),o(", go to "),e("code",null,"Shortcuts"),o(", and then toggle "),e("code",null,"Allow Untrusted Shortcuts")])],-1);function T(B,P){const t=a("ExternalLinkIcon"),i=a("router-link");return d(),u("div",null,[p,e("ul",null,[e("li",null,[o("The latest release of "),e("a",y,[o("checkra1n"),n(t)]),e("ul",null,[e("li",null,[o("If you are on an A8X or A9X device, you should instead get the 0.12.2 release of "),e("a",m,[o("checkra1n"),n(t)])]),e("li",null,[o("If you are on an A7 device, you should instead get the 0.10.1 release of "),e("a",f,[o("checkra1n"),n(t)])])])])]),_,e("ol",null,[w,e("li",null,[o("You will now be presented with instructions in how to reboot your device into "),n(i,{to:"/faq/#what-is-dfu-mode"},{default:s(()=>[o("DFU mode")]),_:1}),o(", click "),g,o(" to begin "),b]),k]),v,S,A,e("ol",null,[I,e("li",null,[o("Click on "),e("a",x,[o("this hyperlink"),n(t)]),o(" on your device, and press `Get Shortcut "),C]),O,R,U]),N,e("p",null,[o("You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install "),n(i,{to:"/faq/#what-are-tweaks"},{default:s(()=>[o("tweaks")]),_:1}),o(", themes, packages and more.")])])}var E=c(h,[["render",T],["__file","index.html.vue"]]);export{E as default};
