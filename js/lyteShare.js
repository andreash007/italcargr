(function( lyte ) {
d = document;

var srv = new Object;
srv["twitter"]={url:"https://twitter.com/intent/tweet?text=%lT%&url=%lU%", target:"_blank"};
srv["facebook"]={url:"https://www.facebook.com/sharer/sharer.php?u=%lU%&t=%lT%", target:"_blank"};
srv["googleplus"]={url:"https://plus.google.com/share?url=%lU%&hl=en-US", target:"_blank"};
srv["vkontakte"]={url:"https://vk.com/share.php?url=%lU%23sthash.DRaDsoVi.wluf&title=%lT%", target:"_blank"};
srv["odnoklassniki"]={url:"http://www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl=%lU%&comment=%lT%", target:"_blank"};
srv["email"]={url:"mailto:?subject=%lT%&body=%lU%", target:"_self"};
srv["print"]={url:"javascript:window.print()", target:"_self"};

var shU=encodeURIComponent(window.location.href);
var shT=encodeURIComponent(d.title);
var baseUrl="/sites/default/files/smm/";
var baseSize="32";

lyte.sh = function() {
	lDiv = getElementsByClassName("lyteShare", "div")[0]; // assuming only one div
	lDiv.className = lDiv.className.replace(/lyteShare/, "lyteShared")+ " lP";
	classes = lDiv.className.split(" ");
	for (x in classes) {
		thCl=classes[x];
		if ((thCl!="lyteShared")&&typeof(srv[thCl])!="undefined") {
			var l = d.createElement("a");
			l.href=srv[thCl].url.replace("%lU%",shU).replace("%lT%",shT);
			l.title=thCl;
			l.target=srv[thCl].target;
			lDiv.appendChild(l);

			var i = d.createElement("img");
			i.src = baseUrl+thCl+"_"+baseSize+".png";
			i.className = "lyteImg";
			l.appendChild(i);
		}
	}
}

function getElementsByClassName (className, tag, elm) {
    if (d.getElementsByClassName) {
        getElementsByClassName = function (className, tag, elm) {
            elm = elm || d;
            var elements = elm.getElementsByClassName(className),
                nodeName = (tag) ? new RegExp("\\b" + tag + "\\b", "i") : null,
                returnElements = [],
                current;
            for (var i = 0, il = elements.length; i < il; i += 1) {
                current = elements[i];
                if (!nodeName || nodeName.test(current.nodeName)) {
                    returnElements.push(current)
                }
            }
            return returnElements
        }
    } else if (d.evaluate) {
        getElementsByClassName = function (className, tag, elm) {
            tag = tag || "*";
            elm = elm || d;
            var classes = className.split(" "),
                classesToCheck = "",
                xhtmlNamespace = "http://www.w3.org/1999/xhtml",
                namespaceResolver = (d.documentElement.namespaceURI === xhtmlNamespace) ? xhtmlNamespace : null,
                returnElements = [],
                elements, node;
            for (var j = 0, jl = classes.length; j < jl; j += 1) {
                classesToCheck += "[contains(concat(' ', @class, ' '), ' " + classes[j] + " ')]"
            }
            try {
                elements = d.evaluate(".//" + tag + classesToCheck, elm, namespaceResolver, 0, null)
            } catch (e) {
                elements = d.evaluate(".//" + tag + classesToCheck, elm, null, 0, null)
            }
            while ((node = elements.iterateNext())) {
                returnElements.push(node)
            }
            return returnElements
        }
    } else {
        getElementsByClassName = function (className, tag, elm) {
            tag = tag || "*";
            elm = elm || d;
            var classes = className.split(" "),
                classesToCheck = [],
                elements = (tag === "*" && elm.all) ? elm.all : elm.getElementsByTagName(tag),
                current, returnElements = [],
                match;
            for (var k = 0, kl = classes.length; k < kl; k += 1) {
                classesToCheck.push(new RegExp("(^|\\s)" + classes[k] + "(\\s|$)"))
            }
            for (var l = 0, ll = elements.length; l < ll; l += 1) {
                current = elements[l];
                match = false;
                for (var m = 0, ml = classesToCheck.length; m < ml; m += 1) {
                    match = classesToCheck[m].test(current.className);
                    if (!match) {
                        break
                    }
                }
                if (match) {
                    returnElements.push(current)
                }
            }
            return returnElements
        }
    }
    return getElementsByClassName(className, tag, elm)
};

}( window.lyte = window.lyte || {} ));

(function(){
var w = window;
var d = document;

if(w.addEventListener) {
	w.addEventListener('load', lyte.sh, false);
	d.addEventListener('DomContentLoaded', function(){setTimeout("lyte.sh()",750)}, false);
} else {
	w.onload=lyte.sh;
	setTimeout("lyte.sh()",1000);
}}())