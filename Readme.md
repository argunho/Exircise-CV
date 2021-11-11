# Uppgift: CV (js, css, html)

[Demo](https://argunho.github.io/Exircise-CV/)

/* Functions */
01. Function setStart()                 = Denna function körs vid start om localStorage inte är tom eller vid eventuell 
                                            klick på knappen start
02. Function activatedStartButton()     = Om user är på start sidan och vill starta skapa nytt CV då måste han fylla namn och
                                            efternamn för att gå vidare och denna funktionen kontrollerar att dessa två fäl är fyllt 
                                            på rätt sätt och vid godkännade resultat aktiverar start knappen.
03. Function setValue()                 = Tar emot value från nput om man trycker ner tanget knapp och sätter den value til localStorage
04. Functions setInputValue()           = För att sätta input value som togs från localStorage vid page omstart
05. Function skiftSection(e)            = Används att skifta form vid klick på menu knappar
06. Function reset()                    = Återställer localStorage och gör page omstart och återvänder till start sidan
07. Function onFileChange(ev)           = Tar emot image och sätter img src som base64 kod
08. Function resetImage()               = Raderar img och visar input att ladda up image
09. Function setImgSrc()                = Denna function körs i setStart() och onFileChange() att sätta img src
10. Function overview()                 = Länk till cv.html att titta på cv

/* Buttons event */
01: _name.onkeyup                       = Sätter value for input name på start sidan
02: _lastname.onkeyup                   = Sätter value for input lastname på start sidan
03: start.onclick                       = Kör function setStart()


P.S. Har inte hunnit göra riktigt bra, tyvärr ....
