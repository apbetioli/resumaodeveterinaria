Change Disqus
=============
Change Disqus ID by open assets/js/config.js file and edit `disqus_shortname` variable.

Change Theme
============
Krypton is designed to allow you to customize theme colors.
To use particular theme, open default.hbs file using text editor (Notepad, Notepad++),
then change "alternate stylesheet" to "stylesheet" of your favored theme.

For example, if you want to use "green" theme, change:
<link rel="alternate stylesheet" title="green" type="text/css" href="{{asset "css/theme-green.css"}}" />

become

<link rel="stylesheet" title="green" type="text/css" href="{{asset "css/theme-green.css"}}" />



Enjoy!
