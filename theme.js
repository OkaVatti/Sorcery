(() => {
	const themeScript = document.createElement("SCRIPT");
	themeScript.setAttribute("type", "text/javascript");
	themeScript.setAttribute("src", "https://cdn.jsdelivr.net/gh/OkaVatti/sorcery@main/theme.script.js"); 
    // It's like this because github doesn't like it 
    //  when I reference their servers directly.
    //   CORS is annoying as fuck >:(
	document.head.appendChild(themeScript);
})();