/* ============================================================
   AR Connect Support El Salvador
   CONFIGURACION: cambia SOLO estas dos lineas por tu numero real.
   WA_NUMERO  -> codigo de pais + numero, sin signos ni espacios (503 = El Salvador)
   WA_VISIBLE -> como quieres que se vea el numero en la pagina
   ============================================================ */
var WA_NUMERO = "50378051905";
var WA_VISIBLE = "+503 7805-1905";

(function () {
  "use strict";

  var BASE = "https://wa.me/" + WA_NUMERO + "?text=";

  function waLink(texto) {
    return BASE + encodeURIComponent(texto);
  }

  var saludo =
    "Hola AR Connect Support El Salvador, vi su pagina web y necesito ayuda con mi computadora.";

  ["navWa", "heroWa", "ctaWa", "floatWa", "footWa"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) {
      el.href = waLink(saludo);
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    }
  });

  var phoneLink = document.getElementById("waPhoneLink");
  var phoneText = document.getElementById("waPhoneText");
  if (phoneLink) {
    phoneLink.href = waLink(saludo);
    phoneLink.target = "_blank";
    phoneLink.rel = "noopener noreferrer";
  }
  if (phoneText) phoneText.textContent = WA_VISIBLE;

  var yr = document.getElementById("yr");
  if (yr) yr.textContent = String(new Date().getFullYear());

  /* ---------- Boton de WhatsApp en cada servicio y licencia ---------- */
  function money0(n) {
    return "$" + n.toFixed(2);
  }

  var pedidos = document.querySelectorAll("[data-wa-service]");
  Array.prototype.forEach.call(pedidos, function (el) {
    var servicio = el.getAttribute("data-wa-service") || "Servicio";
    var precio = parseFloat(el.getAttribute("data-wa-price")) || 0;
    var texto =
      "Hola AR Connect Support El Salvador, vi su pagina web y quiero solicitar:\n\n" +
      "- " + servicio +
      (precio > 0 ? " (" + money0(precio) + ")" : "") +
      "\n\nMi equipo es: \nMi problema es: ";
    el.href = waLink(texto);
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });

  /* ---------- Cotizador ---------- */
  var form = document.getElementById("quoteForm");
  var list = document.getElementById("sumList");
  var totalEl = document.getElementById("sumTotal");
  var sendBtn = document.getElementById("sendWa");
  if (!form || !list || !totalEl || !sendBtn) return;

  var boxes = form.querySelectorAll('input[type="checkbox"]');

  function money(n) {
    return "$" + n.toFixed(2);
  }

  function seleccion() {
    var items = [];
    var total = 0;
    Array.prototype.forEach.call(boxes, function (b) {
      if (b.checked) {
        var precio = parseFloat(b.getAttribute("data-price")) || 0;
        items.push({ nombre: b.getAttribute("data-name") || "Servicio", precio: precio });
        total += precio;
      }
    });
    return { items: items, total: total };
  }

  function render() {
    var s = seleccion();
    list.textContent = "";

    if (!s.items.length) {
      var vacio = document.createElement("li");
      vacio.className = "empty";
      vacio.textContent = "Aun no has seleccionado servicios.";
      list.appendChild(vacio);
    } else {
      s.items.forEach(function (it) {
        var li = document.createElement("li");
        var n = document.createElement("span");
        n.textContent = it.nombre;
        var p = document.createElement("strong");
        p.textContent = money(it.precio);
        li.appendChild(n);
        li.appendChild(p);
        list.appendChild(li);
      });
    }

    totalEl.textContent = money(s.total);
    sendBtn.href = waLink(mensaje(s));
    sendBtn.target = "_blank";
    sendBtn.rel = "noopener noreferrer";
  }

  function valor(id) {
    var el = document.getElementById(id);
    return el && el.value ? el.value.trim() : "";
  }

  function mensaje(s) {
    var lineas = ["Hola AR Connect Support El Salvador, quiero solicitar este servicio:"];
    var nombre = valor("cName");
    if (nombre) lineas.push("Nombre: " + nombre);
    lineas.push("Equipo: " + (valor("cDevice") || "No especificado"));

    if (s.items.length) {
      lineas.push("");
      lineas.push("Servicios seleccionados:");
      s.items.forEach(function (it) {
        lineas.push("- " + it.nombre + ": " + money(it.precio));
      });
      lineas.push("Total estimado: " + money(s.total));
    } else {
      lineas.push("");
      lineas.push("Aun no elegi servicios, necesito asesoria.");
    }

    var detalle = valor("cMsg");
    if (detalle) {
      lineas.push("");
      lineas.push("Problema: " + detalle);
    }
    return lineas.join("\n");
  }

  form.addEventListener("change", render);
  form.addEventListener("input", render);
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  });

  render();
})();
