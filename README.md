Atverot lapu uz "/" būs iespēja reģistrēties vai autorizēties.

Uzspiežot uz login pogas, tiek paradīta login forma, kuru pareizi aizpildot, tiek iedots autorizacijas tokens un parādīti autorizētā lietotaja dati. Tiek arī parādīta logout poga, kuru uzspiežot autorizācijas tokens tiek izdzēsts un lietotājs ir izrakstīts no sistēmas.

Uzspiežot Register pogu, tiek parādīta Register forma, kuru pareizi aizpildot, tiks izveidots Jūsu konts. In

API routes: {
    /api/login POST,
    /api/register POST,
    /api/logout POST autorizētiem lietotajiem,
    /logout POST autorizētiem lietotajiem
}

Es izvēlējos savu projektu taisīt uz Laravel, jo tas ir šajā industrijā plaši izmantots rīks, kas darbu ar datubāzēm un maršrutēšanu padara ļoti vienkāršu, salīdzinot ar citān valodān, kā Node.js vai PHP. 