import{_ as l,o as a,c as n,a as e,b as o,d as r,e as t,r as s}from"./app.a26fd538.js";const c={},d=e("p",null,`This will take you through installing the iOS 15 "tvOS profile" to block updates on your device. It's easy to install and ensures you'll stay on the firmware you're currently on. This is useful if you're waiting for a jailbreak for a lower version and don't want to update in case it gets patched.`,-1),u=e("h2",{id:"installing-the-tvos-profile",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-the-tvos-profile","aria-hidden":"true"},"#"),o(" Installing the tvOS profile")],-1),p={href:"https://cydia.ichitaso.com/no-ota15.mobileconfig",target:"_blank",rel:"noopener noreferrer"},h=t("<li>Select &quot;Allow&quot; if prompted</li><li>Open the Settings application</li><li>Navigate to <code>General</code> -&gt; <code>Profile</code><ul><li>This may also be called <code>Profile and Device Management</code></li></ul></li><li>Tap on the tvOS Beta Profile you just installed</li><li>Tap &quot;Install&quot;</li><li>Confirm by tapping &quot;Install&quot; again <ul><li>Enter your passcode if you have one</li></ul></li><li>Tap &quot;Install&quot; for a third time</li><li>Restart your device when prompted</li>",8),f=t('<p>Your device should no longer receive software updates. You can confirm this by going to <code>Settings &gt; General &gt; Software Update</code>, and if it shows that &quot;iOS is up to date&quot;, you are successfully blocking updates.</p><h2 id="uninstalling-the-tvos-profile" tabindex="-1"><a class="header-anchor" href="#uninstalling-the-tvos-profile" aria-hidden="true">#</a> Uninstalling the tvOS Profile</h2><p>If you want to update your system again, follow the following steps to remove update blocking.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>By removing update blocking, you may unintentionally update to a higher firmware, and be unable to jailbreak.</p></div><ol><li>Open the Settings application</li><li>Go to <code>General</code> -&gt; <code>Profile</code></li></ol><ul><li>This may also be called <code>Profile and Device Management</code></li></ul><ol start="3"><li>Tap on the tvOS Beta Profile</li><li>Tap &quot;Remove Downloaded Profile&quot;</li></ol><p>Your device should now be able to update again.</p>',8);function g(m,v){const i=s("ExternalLinkIcon");return a(),n("div",null,[d,u,e("ol",null,[e("li",null,[o("Open "),e("a",p,[o("cydia.ichitaso.com/no-ota15.mobileconfig"),r(i)]),o(" in your device's browser")]),h]),f])}var _=l(c,[["render",g],["__file","index.html.vue"]]);export{_ as default};
