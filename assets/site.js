(function () {
  "use strict";

  /* ── Vietnamese copy. English lives in the HTML and is read on load. ── */
  var VI = {
    "skip": "Đến phần dự án",
    "role": "Thiết kế đồ họa và UX",
    "nav.work": "Dự án",
    "nav.about": "Giới thiệu",
    "nav.contact": "Liên hệ",
    "nav.resume": "CV",
    "hero.lead": "Sinh viên Thiết kế Đồ họa, chuyên ngành phụ UX tại Đại học Minnesota. Mình làm nhận diện thương hiệu, bao bì, dàn trang ấn phẩm và website, và tự nghiên cứu để quyết định chúng trông như thế nào.",
    "hero.note": "Sống ở Minneapolis, quê Thành phố Hồ Chí Minh. Đang tìm thực tập thiết kế và nhận dự án freelance.",
    "hero.cta": "Xem dự án",
    "hero.email": "Gửi email",
    "work.title": "Dự án tiêu biểu",
    "work.intro": "Bảy dự án được trình bày kỹ, sau đó là các dự án khác và kho lưu trữ tác phẩm nhỏ. Dùng bộ lọc để xem từng loại.",
    "work.filterLabel": "Lọc dự án",
    "f.all": "Tất cả",
    "f.ux": "UX và kỹ thuật số",
    "f.graphic": "Thiết kế đồ họa",
    "f.research": "Nghiên cứu",
    "f.packaging": "Bao bì",
    "sour.kind": "Bao bì và thiết kế hình ảnh, 2026",
    "sour.sub": "Hộp kẹo chua mở ra thành một trò chơi",
    "sour.desc": "Thiết kế lại bao bì kẹo Warheads. Khi ăn hết kẹo, một mặt hộp mở ra thành bàn cờ caro cho hai người, để người dùng có lý do giữ lại chiếc hộp. Mình phát triển từ phác thảo, layout vector đến ba vòng prototype in thật.",
    "l.case": "Đọc case study",
    "choi.kind": "Bao bì album và minh họa, 2026",
    "choi.sub": "Album được thiết kế lại bằng ngôn ngữ Ukiyo-e",
    "choi.desc": "Album đầu tay của Ánh Sáng AZA, được làm lại thành một hệ thống bao bì đĩa than hoàn chỉnh: hai hướng bìa, bìa sau có danh sách bài hát, nhãn đĩa mặt A và mặt B, cùng mockup in thật. Sóng biển, hoa anh đào, khung chữ dọc và dấu triện chuyển ngôn ngữ tranh khắc gỗ thời Edo thành một vỏ đĩa hiện đại, nhẹ nhàng.",
    "bath.kind": "Bao bì và minh họa, 2026",
    "bath.title": "Chiếc hộp nhỏ, một chút thư giãn",
    "bath.sub": "Viên sủi bồn tắm đóng gói như một bồn tắm nhỏ",
    "bath.desc": "Thiết kế lại bao bì cho ba viên sủi bồn tắm hương bạc hà. Bên ngoài màu đỏ đơn giản, mở ra là cảnh phòng tắm được minh họa, mỗi viên sủi nằm ở một ô riêng trong khay hình bồn tắm. Góp ý trên lớp giúp mình phát triển thêm nắp và phần bên trong; mình đã in và lắp ráp ba phiên bản.",
    "mood.kind": "Thương hiệu, bao bì và web, 2026",
    "mood.sub": "Thương hiệu sữa hữu cơ, từ hộp sữa đến trang thanh toán",
    "mood.desc": "Dự án tự khởi xướng. Mình vẽ nhận diện và linh vật chú bò, thiết kế sáu hộp sữa nửa gallon với mặt trước, mặt dinh dưỡng và mặt sau, rồi dựng cửa hàng online thành một prototype chạy được: trang sản phẩm có chọn cỡ gói, giỏ hàng, thanh toán ba bước, form liên hệ, và bộ UI kit mà mọi thành phần đều lấy từ một bộ token.",
    "facts.role": "Vai trò",
    "facts.tools": "Công cụ",
    "facts.output": "Sản phẩm",
    "mood.role": "Nhận diện, bao bì, UX và UI, code front-end",
    "mood.output": "Nhận diện, 6 hộp sữa, danh thiếp, banner, prototype cửa hàng, design system",
    "mood.l1": "Mở cửa hàng",
    "mood.l2": "Xem cả sáu hộp sữa",
    "mood.l3": "Đọc hướng dẫn thương hiệu",
    "mood.l4": "Xem design system",
    "oyo.kind": "Nghiên cứu UX và giao diện, 2025",
    "oyo.sub": "Ứng dụng mạng xã hội xoay quanh sự chú ý",
    "oyo.desc": "Dự án nghiên cứu cách giao diện mạng xã hội giữ chân người dùng, được phát triển thành một ý tưởng ứng dụng với giao diện do mình thiết kế và prototype tương tác trên Figma.",
    "oyo.l1": "Mở prototype Figma",
    "food.kind": "Ấn phẩm và typography, 2024",
    "food.title": "Tạp chí Ẩm thực Việt Nam",
    "food.sub": "Kể chuyện món ăn bằng chữ và bố cục",
    "food.desc": "Dự án typography: một tạp chí về ẩm thực Việt Nam, gồm bìa, các trang bài viết và một hệ thống chữ phù hợp cho cả đoạn đọc dài lẫn tiêu đề lớn.",
    "l.behance": "Xem trên Behance",
    "fw.kind": "Nghiên cứu, typography và web, 2025",
    "fw.title": "Floating Worlds in Print",
    "fw.sub": "Ukiyo-e và sự ra đời của truyền thông thị giác hiện đại",
    "fw.desc": "Dự án nghiên cứu cách tranh khắc gỗ Nhật Bản ảnh hưởng đến thiết kế đồ họa phương Tây, trình bày dưới dạng website dòng thời gian có minh họa do mình tự lên kế hoạch, thiết kế và code từ đầu, không dùng template. Thực hiện cho môn History of Graphic Design (GDES 4131W).",
    "l.read": "Đọc dự án",
    "more.title": "Dự án khác",
    "more.1": "Nguồn gốc vật lý của chữ Hán và chữ La Mã",
    "more.1k": "Website nghiên cứu và typography, 2026",
    "more.2k": "Web và tương tác, 2025",
    "more.3k": "Nhận diện thương hiệu, 2023",
    "more.4k": "Poster hòa nhạc và motion, 2023",
    "arc.title": "Lưu trữ",
    "arc.intro": "Poster, bao bì, nghiên cứu chữ và các tác phẩm khác. Bấm vào để xem lớn hơn.",
    "a.cafe": "Thiết kế lại bao bì Café Phở Gold",
    "a.currency": "Thiết kế lại tiền Việt Nam",
    "a.vietthai": "Viet × Thai Kitchen, poster sự kiện",
    "a.futura": "Sách mẫu chữ Futura",
    "a.interstellar": "Interstellar, poster phim",
    "a.squill": "Siberian Squill, poster",
    "a.lauren": "Lauren Hom, trang tạp chí",
    "a.major": "Ngành thiết kế đồ họa, poster chữ",
    "a.anatomia": "Anatomia Humani Corporis, nghiên cứu bìa sách",
    "a.love": "Can This Love Be Translated?, title card",
    "a.galaxy": "Galaxy Dream, ảnh ghép",
    "a.card": "Danh thiếp cá nhân",
    "empty": "Không có tác phẩm nào cho bộ lọc này. Chọn Tất cả để xem toàn bộ.",
    "about.title": "Về mình",
    "about.p1": "Mình lớn lên ở Thành phố Hồ Chí Minh và hiện sống ở Minneapolis, đang học Cử nhân Mỹ thuật ngành Thiết kế Đồ họa, chuyên ngành phụ Thiết kế UX tại Đại học Minnesota, khóa 2028.",
    "about.p2": "Mình thích những dự án mà phần khó nhất là làm cho mọi thứ rõ ràng: một chủ đề nghiên cứu dày đặc, một thương hiệu cần cảm giác thân thiện, một trang web phải dùng được cho tất cả mọi người. Ngoài giờ học, mình đã thiết kế cho College of Liberal Arts, chăm sóc các trang web của Trường Y và viết tin nghiên cứu cho Khoa Tâm lý học. Tiếng Việt là tiếng mẹ đẻ, tiếng Anh là ngôn ngữ thứ hai của mình.",
    "about.design": "Mình thiết kế",
    "about.tools": "Công cụ",
    "about.exp": "Kinh nghiệm",
    "s.1": "Nhận diện thương hiệu",
    "s.2": "Bao bì",
    "s.3": "Typography và dàn trang",
    "s.4": "Thiết kế giao diện",
    "s.5": "Prototype",
    "e.1r": "Thực tập sinh Thiết kế Đồ họa",
    "e.1o": "College of Liberal Arts, Đại học Minnesota",
    "e.1t": "Tháng 5–8/2026",
    "e.1d": "Năm dự án cho sự kiện và hoạt động của trường: áo thun, tất, poster Welcome Week và đồ họa Instagram theo nhận diện của Đại học.",
    "e.2r": "Điều phối Web (sinh viên)",
    "e.2o": "Trường Y, Đại học Minnesota, phòng Marketing và Truyền thông",
    "e.2t": "12/2025–5/2026",
    "e.2d": "Rà soát khoảng 500 trang mỗi tháng và chỉnh bố cục trên Drupal để trang dễ đọc, dễ tiếp cận và đúng nhận diện.",
    "e.3r": "Trợ lý Truyền thông",
    "e.3o": "Khoa Tâm lý học, Đại học Minnesota",
    "e.3t": "12/2025–5/2026",
    "e.3d": "Bài tin nghiên cứu, tiêu đề và chú thích mạng xã hội giải thích nghiên cứu của giảng viên cho công chúng.",
    "e.4r": "Thực tập sinh Thiết kế và Marketing",
    "e.4o": "Công ty Cơ khí Nhiệt lạnh Hồng Nhựt, TP. Hồ Chí Minh",
    "e.4t": "6–9/2025",
    "e.4d": "Lên kế hoạch thiết kế lại tạp chí công ty, dàn trang thông tin kỹ thuật sản phẩm và làm video quảng bá.",
    "e.5r": "Trợ giảng, Chương trình ESL cho người lớn",
    "e.5o": "Our Saviour's Community Services, Minneapolis",
    "e.5t": "1–5/2026",
    "e.5d": "Bài tập trên lớp, hoạt động nhóm nhỏ và kèm riêng cho người lớn học tiếng Anh.",
    "e.6r": "Trợ giảng",
    "e.6o": "College of Design, Đại học Minnesota",
    "e.6t": "9/2025–1/2026",
    "e.6d": "Hướng dẫn 15–20 sinh viên mỗi lớp về nguyên lý thiết kế qua buổi nhận xét và góp ý riêng.",
    "e.7r": "Nhà sáng tạo nội dung mạng xã hội",
    "e.7o": "TikTok, @phamnguyenkiet2004",
    "e.7t": "6/2025–nay",
    "e.7d": "Video ngắn cho kênh có hơn 5.000 người theo dõi và 2 triệu lượt thích.",
    "about.resume": "Mở CV của mình",
    "c.title": "Bạn có dự án hay vị trí thực tập?",
    "c.body": "Mình đang tìm thực tập thiết kế, dự án freelance và cơ hội hợp tác. Email là cách nhanh nhất để liên hệ.",
    "c.copy": "Sao chép email",
    "foot.play": "Phiên bản vui nhộn của trang này, có thú cưng và photo booth",
    "foot.top": "Lên đầu trang",
    "v.close": "Đóng"
  };
  var MSG = {
    en: { copied: "Copied to your clipboard.", copyFail: "Couldn't copy. Select the address and copy it.", showing: function (n, label) { return "Showing " + n + " " + (n === 1 ? "piece" : "pieces") + " in " + label + "."; } },
    vi: { copied: "Đã sao chép vào bộ nhớ tạm.", copyFail: "Không sao chép được. Hãy chọn địa chỉ và sao chép.", showing: function (n, label) { return "Đang hiển thị " + n + " tác phẩm trong mục " + label + "."; } }
  };

  var EN = {};
  var tNodes = document.querySelectorAll("[data-t]");
  tNodes.forEach(function (el) { EN[el.getAttribute("data-t")] = el.textContent; });
  var ariaNodes = document.querySelectorAll("[data-t-aria]");
  ariaNodes.forEach(function (el) { EN[el.getAttribute("data-t-aria")] = el.getAttribute("aria-label"); });

  var lang = "en";
  var langBtn = document.getElementById("langBtn");

  function setLang(next) {
    lang = next;
    var dict = next === "vi" ? VI : EN;
    tNodes.forEach(function (el) { var k = el.getAttribute("data-t"); if (dict[k] != null) el.textContent = dict[k]; });
    ariaNodes.forEach(function (el) { var k = el.getAttribute("data-t-aria"); if (dict[k] != null) el.setAttribute("aria-label", dict[k]); });
    document.documentElement.lang = next;
    if (next === "vi") {
      langBtn.textContent = "English"; langBtn.lang = "en"; langBtn.setAttribute("aria-label", "View in English");
    } else {
      langBtn.textContent = "Tiếng Việt"; langBtn.lang = "vi"; langBtn.setAttribute("aria-label", "Xem bằng tiếng Việt");
    }
    try { localStorage.setItem("kp-lang", next); } catch (e) {}
    updateStatus();
  }

  /* ── Filter ── */
  var chips = document.querySelectorAll(".chip");
  var items = document.querySelectorAll("[data-kind]");
  var status = document.getElementById("filterStatus");
  var emptyNote = document.getElementById("emptyNote");
  var current = "all";
  var subTitles = document.querySelectorAll(".work .sub-title");

  function updateStatus() {
    if (current === "all") { status.textContent = ""; return; }
    var n = 0;
    items.forEach(function (el) { if (!el.classList.contains("is-hidden")) n++; });
    var active = document.querySelector('.chip[aria-pressed="true"]');
    status.textContent = MSG[lang].showing(n, active ? active.textContent : "");
  }

  function applyFilter(kind) {
    current = kind;
    var shown = 0;
    items.forEach(function (el) {
      var match = kind === "all" || el.getAttribute("data-kind").split(" ").indexOf(kind) !== -1;
      el.classList.toggle("is-hidden", !match);
      if (match) shown++;
    });
    chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c.getAttribute("data-filter") === kind)); });
    // hide group headings whose lists are empty
    var moreVisible = document.querySelectorAll(".more > li:not(.is-hidden)").length > 0;
    var arcVisible = document.querySelectorAll(".archive > li:not(.is-hidden)").length > 0;
    if (subTitles[0]) subTitles[0].hidden = !moreVisible;
    var arcHead = document.querySelector(".archive-head");
    if (arcHead) arcHead.hidden = !arcVisible;
    emptyNote.hidden = shown !== 0;
    updateStatus();
  }
  chips.forEach(function (c) { c.addEventListener("click", function () { applyFilter(c.getAttribute("data-filter")); }); });

  /* ── Archive viewer ── */
  var viewer = document.getElementById("viewer");
  var vImg = document.getElementById("viewerImg");
  var vCap = document.getElementById("viewerCap");
  var lastTrigger = null;
  document.querySelectorAll(".archive button").forEach(function (b) {
    b.addEventListener("click", function () {
      var thumb = b.querySelector("img");
      vImg.src = b.getAttribute("data-full");
      vImg.alt = thumb.alt;
      vCap.textContent = b.querySelector("span").textContent;
      lastTrigger = b;
      if (typeof viewer.showModal === "function") viewer.showModal();
      else window.open(b.getAttribute("data-full"), "_blank");
    });
  });
  viewer.addEventListener("click", function (e) { if (e.target === viewer) viewer.close(); });
  viewer.addEventListener("close", function () { if (lastTrigger) lastTrigger.focus(); });

  /* ── Copy email ── */
  var copyBtn = document.getElementById("copyBtn");
  var copyNote = document.getElementById("copyNote");
  copyBtn.addEventListener("click", function () {
    var done = function () { copyNote.textContent = MSG[lang].copied; };
    var fail = function () { copyNote.textContent = MSG[lang].copyFail; };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText("pham0687@umn.edu").then(done, fail);
    else fail();
  });

  /* ── Ink registration: the pink plate drifts with the pointer ── */
  var ink = document.querySelector(".ink");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (ink && !reduce) {
    ink.classList.add("is-loading");
    requestAnimationFrame(function () { requestAnimationFrame(function () { ink.classList.remove("is-loading"); }); });
    var hero = document.querySelector(".hero");
    var fine = window.matchMedia("(pointer: fine)").matches;
    if (fine) {
      setTimeout(function () {
        hero.addEventListener("pointermove", function (e) {
          var r = ink.getBoundingClientRect();
          var dx = (e.clientX - (r.left + r.width / 2)) / r.width;
          var dy = (e.clientY - (r.top + r.height / 2)) / r.height;
          ink.classList.add("is-tracking");
          ink.style.setProperty("--rx", (7 + dx * 14).toFixed(1) + "px");
          ink.style.setProperty("--ry", (5 + dy * 10).toFixed(1) + "px");
        });
        hero.addEventListener("pointerleave", function () {
          ink.classList.remove("is-tracking");
          ink.style.removeProperty("--rx");
          ink.style.removeProperty("--ry");
        });
      }, 1100);
    }
  }

  langBtn.addEventListener("click", function () { setLang(lang === "en" ? "vi" : "en"); });
  var saved = null;
  try { saved = localStorage.getItem("kp-lang"); } catch (e) {}
  if (saved === "vi") setLang("vi");
})();
