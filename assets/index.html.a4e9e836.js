import{_ as r,o as s,c,a as e,b as i,d as t,w as n,e as d,r as l}from"./app.a26fd538.js";const h={},p=e("p",null,"h3lix is capable of jailbreaking every 32bit iOS device on firmware version 10.0 up to 10.3.4.",-1),u=e("p",null,"Note that the h3lix jailbreak is not \u201Cpersistent\u201D (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.",-1),m=e("p",null,"Due to how custom applications are installed to the device, in most cases you will need to reinstall the h3lix jailbreak application to your device every 7 days from your computer.",-1),f=e("p",null,"We will use Sideloadly and a patcher script to install the application to your device.",-1),g=e("h2",{id:"downloads",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#downloads","aria-hidden":"true"},"#"),i(" Downloads")],-1),_={href:"https://mega.nz/folder/k4FAXCIB#Fk7pxs6ikYzL3YBvAGX5ig/file/UgV1HAJT",target:"_blank",rel:"noopener noreferrer"},y={href:"https://sideloadly.io/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://gist.github.com/jakeajames/b44d8db345769a7149e97f5e155b3d46",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/kawaiizenbo/winh3lixpatcher/releases",target:"_blank",rel:"noopener noreferrer"},v=e("h2",{id:"patching-the-application",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#patching-the-application","aria-hidden":"true"},"#"),i(" Patching the application")],-1),b={class:"custom-container tip"},k=e("p",{class:"custom-container-title"},"TIP",-1),I=d('<div class="custom-container tip"><p class="custom-container-title">TIP</p><h3 id="macos-and-linux" tabindex="-1"><a class="header-anchor" href="#macos-and-linux" aria-hidden="true">#</a> macOS and Linux</h3><ol><li>Open your Terminal application</li><li>Change directory to the folder where you saved the script and h3lix.ipa files <ul><li>If you saved them to Downloads, this would be <code>cd ~/Downloads</code></li></ul></li><li>Type <code>./patch.sh</code> in the terminal</li><li>Drag and drop the h3lix <code>.ipa</code> file into the terminal</li><li>Type &quot;h3lix.ipa&quot;</li><li>Press Enter</li></ol></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3><ol><li>Drag the h3lix ipa onto the winh3lixpatcher.exe file</li></ol></div><p>You now have a patched h3lix ipa that you can sign</p><h2 id="installing-the-application" tabindex="-1"><a class="header-anchor" href="#installing-the-application" aria-hidden="true">#</a> Installing the application</h2><ol><li>Open Sideloadly</li><li>Plug your iOS device into your computer <ul><li>Make sure your computer is trusted and allowed to view the contents of your device</li></ul></li><li>Drag and drop the h3lix <code>.ipa</code> file into Sideloadly</li><li>Enter in your Apple ID</li><li>Enter in your password <ul><li>Sideloadly must make a request to it&#39;s servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.</li></ul></li></ol><p>The app will now install to your iOS device.</p><h2 id="trusting-the-application" tabindex="-1"><a class="header-anchor" href="#trusting-the-application" aria-hidden="true">#</a> Trusting the application</h2><ol><li>Go to <code>Settings</code> -&gt; <code>General</code> -&gt; <code>Device Management</code> -&gt; <code>&lt;Your Apple ID&gt;</code><ul><li>Depending on your usage, <code>Device Management</code> may be labeled <code>Profiles and Device Management</code></li></ul></li><li>Tap <code>Trust &quot;&lt;Your Apple ID&gt;&quot;</code></li></ol><p>The h3lix application can now be opened from home screen.</p><h2 id="running-h3lix" tabindex="-1"><a class="header-anchor" href="#running-h3lix" aria-hidden="true">#</a> Running h3lix</h2><ol><li>Open the h3lix application from your home screen</li><li>Tap &quot;Jailbreak&quot;</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If the app displays <code>Uicache Failed!</code> this means the patching process was not done properly and you should double check you followed the steps above properly</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If your device crashes or restarts unexpectedly and the jailbreak isn&#39;t installed, simply try running the exploit again until it does work.</p></div>',13),T={class:"custom-container tip"},D=e("p",{class:"custom-container-title"},"TIP",-1);function S(O,A){const o=l("ExternalLinkIcon"),a=l("router-link");return s(),c("div",null,[p,u,m,f,g,e("ul",null,[e("li",null,[i("Version RC6 of "),e("a",_,[i("h3lix"),t(o)]),i(" from the Legacy Jailbreak Archives")]),e("li",null,[i("The latest version of "),e("a",y,[i("Sideloadly"),t(o)])]),e("li",null,[i("macOS and Linux: Jakeajames' "),e("a",w,[i("patcher script"),t(o)])]),e("li",null,[i("Windows: "),e("a",x,[i("winh3lixpatcher"),t(o)])])]),v,e("div",b,[k,e("p",null,[i("If you wish to not have to patch an application, and are on iOS 10.3.x, you could follow "),t(a,{to:"/installing-kok3shiX"},{default:n(()=>[i("Installing kok3shiX")]),_:1}),i(" instead, though keep in mind that kok3shiX is currently in an alpha stage.")])]),I,e("p",null,[i("You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install "),t(a,{to:"/faq/#what-are-tweaks"},{default:n(()=>[i("tweaks")]),_:1}),i(", themes and more.")]),e("div",T,[D,e("p",null,[i("If you wish to use a more modern package manager, continue to "),t(a,{to:"/installing-zebra"},{default:n(()=>[i("Installing Zebra")]),_:1})])])])}var Y=r(h,[["render",S],["__file","index.html.vue"]]);export{Y as default};
