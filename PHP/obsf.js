var obsf_callback_url = "http://natwelch.com/PHP/obsf_callback.php"; // change me
var obsf_delim = "___OBSF___";
var obsf_script = "___SCRIPT___";
var xmlhttp;

/**
 *  Collects the IDs of all obfuscated elements and submits a POST request to obsf_callback.php for their values
 *
 *  @author
 *    Arpad Ray <arpad@rajeczy.com>
 *  @version
 *    2005/9/30
 */
function fillBlanks() {
    var divs = document.getElementsByTagName("SPAN");
    var obsf = "";
    for (var i = divs.length; i--;) {
        sr = divs[i];
        if (sr.className == "_obsf") {
            if (obsf != "") {
                obsf += ",";
            }
            obsf += sr.id;
        }
    }
    xmlhttp = (typeof XMLHttpRequest != "undefined" ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"));
    xmlhttp.onreadystatechange = fillBlanks_callback;
    xmlhttp.open("POST",obsf_callback_url,true);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    xmlhttp.send("_obsf="+escape(obsf));
}

/**
 *  Fills returned values into their respective elements (called with the response of obsf_callback.php)
 *
 *  @author
 *    Arpad Ray <arpad@rajeczy.com>
 *  @version
 *    2005/9/30
 */
function fillBlanks_callback() {
    if (xmlhttp.readyState == 4) {
        var ret = xmlhttp.responseText;
        xmlhttp = null;
        eval(ret);
        if (obr == undefined) {
            return true;
        }
        var el, val, vals, scripts, script;
        for (key in obr) {
            el = document.getElementById(key);
            vals = unescape(obr[key][0]).split(obsf_delim);
            eval("scripts = unserialize(unescape(\"" + obr[key][1] + "\"));");
            for (vkey in vals) {
                val = vals[vkey];
                if (val.substring(0, 12) == obsf_script) {
                    val = val.substring(12);
                    if (!scripts || !scripts[val]) {
                        continue;
                    }
                    if (scripts[val][0]) {
                        eval(scripts[val][0]);
                    }
                    if (scripts[val][1] != "") {
                        script = document.createElement("SCRIPT");
                        for (akey in scripts[val][1]) {
                            script.setAttribute(akey, scripts[val][1][akey]);
                        }
                        el.appendChild(script);
                    }
                } else {
                    el.innerHTML += val;
                }
            }
        }
    }
}

/**
 *  Reconstructs a serialized variable
 *
 *  @param      inp
 *    the string to reconstruct
 *  @return
 *    the variable represented by the input string
 *  @author
 *    Arpad Ray <arpad@rajeczy.com>
 *  @version
 *    2005/9/29
 */
function unserialize(inp)
{
    if (!inp || inp.length < 3) {
        return;
    }
    var val, kret, vret, cval;
    var type = inp.charAt(0);
    var cont = inp.substring(2);
    var size = 0;
    var divpos = 0;
    var endcont = 0;
    var rest = "";

    switch (type) {
        case "b": // boolean
            val = (cont.charAt(0) == "1");
            rest = cont.substring(1);
            break;
        case "s": // string
            val = "";
            divpos = cont.indexOf(":");
            if (divpos == -1) {
                return;
            }
            size = parseInt(cont.substring(0, divpos));
            if (size == 0) {
                rest = cont.substring(divpos + 4);
                break;
            }
            val = cont.substring(divpos + 2, divpos + 2 + size);
            rest = cont.substring(divpos + 4 + size);
            break;
        case "i": // integer
        case "d": // float
            endcont = cont.length;
            for (var i = 0; i < cont.length; i++) {
                cval = (type == "i" ? parseInt(cont.charAt(i)) : parseFloat(cont.substring(0, i + 1)));
                if (isNaN(cval)) {
                    endcont = i;
                    break;
                }
            }
            if (!endcont) {
                return;
            }
            val = cont.substring(0, endcont);
            val = (type == "i" ? parseInt(val) : parseFloat(val));
            rest = cont.substring(endcont + 1);
            break;
        case "a": // array
        if (cont.length < 4) {
                return;
            }
            divpos = cont.indexOf(":", 1);
        if (divpos == -1) {
                return;
            }
            size = parseInt(cont.substring(1, divpos - 1));
            cont = cont.substring(divpos + 2);
            val = new Array();
            if (cont.length < 1) {
                break;
            }
            for (var i = 0; i + 1 < size * 2; i += 2) {
                kret = unserialize(cont, 1);
        if (kret == undefined || kret[0] == undefined || kret[1] == "") {
                    break;
                }
                vret = unserialize(kret[1], 1);
        if (vret == undefined || vret[0] == undefined) {
                    break;
                }
                val[kret[0]] = vret[0];
                cont = vret[1];
            }
            rest = (vret ? vret[1].substring(1) : "");
            break;
        case "O": // object
            divpos = cont.indexOf(":");
            if (divpos == -1) {
                return;
            }
            size = parseInt(cont.substring(0, divpos));
            var objname = cont.substring(divpos + 2, divpos + 2 + size);
            var objprops = unserialize("a:" + cont.substring(divpos + 4 + size));
            if (objprops == undefined) {
                return;
            }
            var objout = "function " + objname + "(){";
            for (key in objprops) {
                objout += "this." + key + "=objprops[key];";
            }
            objout += "}val=new " + objname + "();";
            eval(objout);  
    }
    return (arguments.length == 1 ? val : [val, rest]);
}


var bonload = window.onload;
window.onload = (typeof window.onload != "function" ? fillBlanks : function(){ bonload(); fillBlanks(); });
