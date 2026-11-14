/* ==========================================================================
   Gabora646 · utilidades compartidas
   - Iconos SVG (trazo y relleno)
   - Datos por defecto (los mismos cursos de tu tarjeta original)
   - Capa de acceso a JSONBin.io (lectura pública, escritura con Master Key)
   Lo usan index.html (tarjeta) y admin.html (panel).
   ========================================================================== */
(function (global) {
  'use strict';

  /* ---------- Iconos de trazo (viewBox 24x24) ---------- */
  var STROKE_ICONS = {
    /* cursos */
    'road': '<path d="M6 21 10 3"/><path d="M18 21 14 3"/><path d="M12 5v2"/><path d="M12 11v2"/><path d="M12 17v2"/>',
    'trending-up': '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
    'smile': '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/>',
    'trophy': '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
    'wallet': '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
    'bar-chart': '<line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/>',
    'graduation': '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
    'rocket': '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
    'coins': '<circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/>',
    'book': '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/>',
    'target': '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    'shield': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    'star': '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    'lightbulb': '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
    'users': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    'briefcase': '<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    'dollar': '<line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',

    /* interfaz */
    'chevron-left': '<path d="m15 18-6-6 6-6"/>',
    'chevron-right': '<path d="m9 18 6-6-6-6"/>',
    'shopping-bag': '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
    'arrow-up-right': '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    'package': '<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
    'check': '<path d="M20 6 9 17l-5-5"/>',
    'lock': '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    'message-circle': '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    'zap': '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    'plus': '<path d="M5 12h14"/><path d="M12 5v14"/>',
    'pencil': '<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/>',
    'trash': '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
    'copy': '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    'arrow-up': '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
    'arrow-down': '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
    'save': '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8"/><path d="M7 3v5h8"/>',
    'log-out': '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
    'sliders': '<line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="2" x2="6" y1="14" y2="14"/><line x1="10" x2="14" y1="8" y2="8"/><line x1="18" x2="22" y1="16" y2="16"/>',
    'external-link': '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    'refresh': '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
    'key': '<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/>',
    'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    'download': '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
    'upload': '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
    'eye': '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    'alert': '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',

    /* marcas (trazo) */
    'facebook': '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    'instagram': '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>'
  };

  /* ---------- Iconos de marca rellenos ---------- */
  var FILL_ICONS = {
    'whatsapp': 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z',
    'tiktok': 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z'
  };

  /* Iconos que se pueden elegir para un curso */
  var COURSE_ICONS = ['road', 'trending-up', 'smile', 'trophy', 'wallet', 'bar-chart', 'graduation', 'rocket', 'coins', 'book', 'target', 'shield', 'star', 'lightbulb', 'users', 'briefcase', 'dollar'];

  function icon(name, cls) {
    var c = cls ? ' class="' + cls + '"' : '';
    var base = '<svg' + c + ' width="1em" height="1em" viewBox="0 0 24 24" aria-hidden="true" focusable="false"';
    if (FILL_ICONS[name]) {
      return base + ' fill="currentColor"><path d="' + FILL_ICONS[name] + '"/></svg>';
    }
    var inner = STROKE_ICONS[name] || STROKE_ICONS.star;
    return base + ' fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + inner + '</svg>';
  }

  /* ---------- Datos por defecto (tus cursos originales) ---------- */
  var DEFAULT_DATA = {
    version: 1,
    ajustes: {
      productosUrl: 'https://wa.me/c/584228745777',
      stats: [
        { valor: 5000, sufijo: '', etiqueta: 'Estudiantes' },
        { valor: 98, sufijo: '%', etiqueta: 'Satisfacción' },
        { valor: 12, sufijo: '', etiqueta: 'Cursos' }
      ]
    },
    cursos: [
      {
        id: 'c1', titulo: 'Camino al Primer Millón', precio: '$47', icono: 'road',
        descripcion: 'Descubre 10 negocios rentables para tu éxito financiero y transforma tus finanzas',
        etiquetas: ['Ebook exclusivo', 'Plan de acción', 'Plantilla financiera'],
        url: 'https://go.hotmart.com/G102721289A', insignia: '', activo: true
      },
      {
        id: 'c2', titulo: 'Estrategias de Inversión', precio: '$97', icono: 'trending-up',
        descripcion: 'Aprende técnicas avanzadas para multiplicar tu capital con inversiones inteligentes',
        etiquetas: ['Análisis técnico', 'Gestión de riesgo', 'Casos reales'],
        url: 'https://go.hotmart.com/A102721287E', insignia: '', activo: true
      },
      {
        id: 'c3', titulo: 'Educación Financiera para Niños', precio: '$37', icono: 'smile',
        descripcion: 'Curso de 7 días para enseñar finanzas a los más pequeños de la casa',
        etiquetas: ['7 módulos diarios', 'Actividades interactivas', 'Guía para padres'],
        url: 'https://go.hotmart.com/L102721297M', insignia: '', activo: true
      },
      {
        id: 'c4', titulo: 'Independencia Financiera Mentoring', precio: '$297', icono: 'trophy',
        descripcion: 'Programa completo con mentoría personalizada para alcanzar tu libertad financiera',
        etiquetas: ['Acompañamiento continuo', 'Estrategias probadas', 'Comunidad exclusiva'],
        url: 'https://go.hotmart.com/F102721278V', insignia: '', activo: true
      },
      {
        id: 'c5', titulo: 'Finanzas Personales Avanzadas', precio: '$67', icono: 'wallet',
        descripcion: 'Domina el control de tus finanzas personales y multiplica tu patrimonio',
        etiquetas: ['Presupuesto maestro', 'Ahorro inteligente', 'Inversión básica'],
        url: 'https://go.hotmart.com/P102802168A', insignia: '', activo: true
      },
      {
        id: 'c6', titulo: 'Trading y Mercados Financieros', precio: '$147', icono: 'bar-chart',
        descripcion: 'Aprende a operar en los mercados como un profesional con estrategias ganadoras',
        etiquetas: ['Trading en vivo', 'Indicadores técnicos', 'Psicología del trader'],
        url: 'https://go.hotmart.com/X102802160F', insignia: '', activo: true
      },
      {
        id: 'c7', titulo: 'Finanzas para Niños - Completo', precio: '$57', icono: 'graduation',
        descripcion: 'Programa interactivo completo para enseñar el valor del dinero a tus hijos',
        etiquetas: ['4 módulos completos', '2 bonos incluidos', 'Juegos prácticos'],
        url: 'https://go.hotmart.com/F102721304V', insignia: '', activo: true
      }
    ]
  };

  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  /* ---------- Normalización / saneado ---------- */
  function str(v, max) {
    if (v === null || v === undefined) return '';
    return String(v).trim().slice(0, max);
  }
  function safeUrl(v) {
    var s = str(v, 600);
    return /^https?:\/\/[^\s]+$/i.test(s) ? s : '';
  }
  function uid() {
    return 'c_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  }

  function normalizeCourse(c, i) {
    c = (c && typeof c === 'object') ? c : {};
    var tags = Array.isArray(c.etiquetas) ? c.etiquetas : (typeof c.etiquetas === 'string' ? c.etiquetas.split(',') : []);
    var icono = str(c.icono, 30);
    return {
      id: str(c.id, 40) || ('c' + (i + 1)),
      titulo: str(c.titulo, 90),
      precio: str(c.precio, 18),
      icono: (STROKE_ICONS[icono] && COURSE_ICONS.indexOf(icono) !== -1) ? icono : 'star',
      descripcion: str(c.descripcion, 300),
      etiquetas: tags.map(function (t) { return str(t, 28); }).filter(Boolean).slice(0, 4),
      url: safeUrl(c.url),
      insignia: str(c.insignia, 16),
      activo: c.activo !== false
    };
  }

  function normalize(raw) {
    var d = (raw && typeof raw === 'object') ? raw : {};
    var aj = (d.ajustes && typeof d.ajustes === 'object') ? d.ajustes : {};
    var defStats = DEFAULT_DATA.ajustes.stats;
    var stats = Array.isArray(aj.stats) && aj.stats.length ? aj.stats.slice(0, 3).map(function (s, i) {
      s = (s && typeof s === 'object') ? s : {};
      var n = Number(s.valor);
      return {
        valor: isFinite(n) && n >= 0 ? n : 0,
        sufijo: str(s.sufijo, 4),
        etiqueta: str(s.etiqueta, 24) || (defStats[i] ? defStats[i].etiqueta : '')
      };
    }) : clone(defStats);
    var cursos = Array.isArray(d.cursos) ? d.cursos.map(normalizeCourse).filter(function (c) { return c.titulo; }) : clone(DEFAULT_DATA.cursos);
    return {
      version: 1,
      ajustes: {
        productosUrl: safeUrl(aj.productosUrl) || DEFAULT_DATA.ajustes.productosUrl,
        stats: stats
      },
      cursos: cursos
    };
  }

  /* ---------- JSONBin ---------- */
  var API = 'https://api.jsonbin.io/v3/b';

  function isConfigured(id) {
    id = String(id || '').trim();
    return /^[A-Za-z0-9_-]{8,64}$/.test(id) && !/pega/i.test(id);
  }

  function request(method, url, headers, body, timeoutMs) {
    var ctrl = new AbortController();
    var timer = setTimeout(function () { ctrl.abort(); }, timeoutMs || 10000);
    var opts = { method: method, headers: headers || {}, signal: ctrl.signal };
    if (body !== undefined) opts.body = JSON.stringify(body);
    return fetch(url, opts).then(function (res) {
      return res.json().catch(function () { return null; }).then(function (json) {
        if (!res.ok) {
          var err = new Error((json && json.message) || ('Error HTTP ' + res.status));
          err.status = res.status;
          throw err;
        }
        return json;
      });
    }).catch(function (e) {
      if (e && e.name === 'AbortError') {
        var t = new Error('Tiempo de espera agotado. Revisa tu conexión.');
        t.code = 'timeout';
        throw t;
      }
      throw e;
    }).then(function (v) { clearTimeout(timer); return v; }, function (e) { clearTimeout(timer); throw e; });
  }

  /* Lectura pública (sin cabeceras: evita preflight CORS). El bin debe ser público. */
  function readPublic(binId) {
    return request('GET', API + '/' + encodeURIComponent(binId) + '/latest').then(function (j) { return j && j.record; });
  }
  /* Lectura con Master Key (admin) */
  function readPrivate(binId, key) {
    return request('GET', API + '/' + encodeURIComponent(binId) + '/latest', { 'X-Master-Key': key }).then(function (j) { return j && j.record; });
  }
  function saveBin(binId, key, data) {
    return request('PUT', API + '/' + encodeURIComponent(binId), {
      'Content-Type': 'application/json',
      'X-Master-Key': key
    }, data);
  }
  function createBin(key, data, name) {
    return request('POST', API, {
      'Content-Type': 'application/json',
      'X-Master-Key': key,
      'X-Bin-Private': 'false',
      'X-Bin-Name': name || 'gabora646-cursos'
    }, data).then(function (j) { return j && j.metadata && j.metadata.id; });
  }

  /* ---------- Caché local (carga instantánea + menos peticiones) ---------- */
  var CACHE_KEY = 'g646_cache_v1';
  var cache = {
    get: function () {
      try {
        var raw = localStorage.getItem(CACHE_KEY);
        if (!raw) return null;
        var o = JSON.parse(raw);
        return (o && o.data) ? o : null;
      } catch (e) { return null; }
    },
    set: function (data) {
      try { localStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), data: data })); } catch (e) { /* modo privado o lleno */ }
    },
    clear: function () { try { localStorage.removeItem(CACHE_KEY); } catch (e) { /* nada */ } }
  };

  global.Gabora = {
    icon: icon,
    COURSE_ICONS: COURSE_ICONS,
    DEFAULT_DATA: DEFAULT_DATA,
    clone: clone,
    uid: uid,
    safeUrl: safeUrl,
    normalize: normalize,
    isConfigured: isConfigured,
    readPublic: readPublic,
    readPrivate: readPrivate,
    saveBin: saveBin,
    createBin: createBin,
    cache: cache
  };
})(window);
